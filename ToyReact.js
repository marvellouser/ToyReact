
let childSymbol = Symbol('children');
export class Component {
  constructor(props) {
    this.children = [];
    this.props = Object.create(null);
  }

  setAttribute(name, value) {
    this.props[name] = value;
    this[name] = value;
  }

  mountTo(range) {
    this.range = range;
    this.update();
  }

  get vdom() {
    return this.render().vdom;
  }

  update() {
    let vdom = this.vdom
    if (this.oldVdom) {
      let isSameNode = (node1, node2) => {
        if (node1.type !== node2.type) {
          return false;
        }
        for (let name in node1.props) {
          const node1Value = node1.props[name];
          const node2Value = node2.props[name];
          if (typeof node1Value === 'object' && typeof node2Value === 'object' && JSON.stringify(node1Value) && JSON.stringify(node2Value)) {
            continue;
          }
          if (node1Value !== node2Value) {
            return false;
          }
        }
        if (Object.keys(node1.props).length != Object.keys(node2.props).length) {
          return false;
        }
        return true;
      }

      let isSameTree = (node1, node2) => {
        if (!isSameNode(node1, node2) || node1.children.length != node2.children.length) return false;
        for (let i = 0; i < node1.children.length; i++) {
          if (!isSameTree(node1.children[i], node2.children[i])) {
            return false;
          }
        }
        return true;
      }

      let replace = (newTree, oldTree) => {
        if (isSameTree(newTree, oldTree)) return;
        if (!isSameNode(newTree, oldTree)) {
          newTree.mountTo(oldTree.range);
        } else {
          for (let i = 0; i < newTree.children.length; i++) {
            replace(newTree.children[i], oldTree.children[i]);
          }
        }
      }
      replace(vdom, this.oldVdom);
    } else {
      vdom.mountTo(this.range);
    }

    this.oldVdom = vdom;
  }

  setState(state) {
    if (typeof state !== 'object' && typeof state !== 'function') return;
    let merge = (oldState, newState) => {
      for (let p in newState) {
        if (typeof newState[p] === 'object') {
          if (typeof oldState[p] !== 'object') {
            oldState[p] = {};
          }
          merge(oldState[p], newState[p]);
        } else {
          oldState[p] = newState[p];
        }
      }
    }
    if (!this.state && state) {
      this.state = {};
    }
    merge(this.state, state);
    this.update();
  }

  appendChild(vchild) {
    this.children.push(vchild);
  }
}
class ElementWrapper {
  constructor(type) {
    this.type = type;
    this.props = Object.create(null);
    this[childSymbol] = [];
    this.children = [];
    // this.root = document.createElement(type);
  }
  setAttribute(name, value) {
    // if (name.match(/^on([\s\S]+)$/)) {
    //   let eventName = RegExp.$1.replace(/^[\s\S]/, (s) => s.toLowerCase())
    //   this.root.addEventListener(eventName, value);
    // }
    // if (name === 'className') {
    //   name = 'class';
    // }
    // this.root.setAttribute(name, value);
    this.props[name] = value;
  }
  appendChild(vchild) {
    // let range = document.createRange();
    // if (this.root.children.length) {
    //   range.setStartAfter(this.root.lastChild);
    //   range.setEndAfter(this.root.lastChild);
    // } else {
    //   range.setStart(this.root, 0);
    //   range.setEnd(this.root, 0);
    // }
    // vchild.mountTo(range);
    this[childSymbol].push(vchild);
    this.children.push(vchild.vdom);
  }

  get vdom() {
    return this;
  }

  mountTo(range) {
    this.range = range;
    let placeholder = document.createComment('placeholder');
    let endRange = document.createRange();
    endRange.setStart(range.endContainer, range.endOffset);
    endRange.setEnd(range.endContainer, range.endOffset);
    endRange.insertNode(placeholder);
    range.deleteContents();
    let element = document.createElement(this.type);
    for (let name in this.props) {
      let value = this.props[name];
      if (name.match(/^on([\s\S]+)$/)) {
        let eventName = RegExp.$1.replace(/^[\s\S]/, (s) => s.toLowerCase())
        element.addEventListener(eventName, value);
      }
      if (name === 'className') {
        name = 'class';
      }
      element.setAttribute(name, value);
    }

    for (let child of this.children) {
      let range = document.createRange();
      if (element.children.length) {
        range.setStartAfter(element.lastChild);
        range.setEndAfter(element.lastChild);
      }
      else {
        range.setStart(element, 0);
        range.setEnd(element, 0);
      }
      child.mountTo(range);
    }
    range.insertNode(element);
  }
}

class TextWrapper {
  constructor(content) {
    this.root = document.createTextNode(content);
    this.type = '#text';
    this.children = [];
    this.props = Object.create(null);
  }
  mountTo(range) {
    this.range = range;
    range.deleteContents();
    range.insertNode(this.root);
  }

  get vdom() {
    return this;
  }

}

const ToyReact = {
  createElement(type, attrbutes, ...children) {
    let element;
    if (typeof type === 'string') {
      element = new ElementWrapper(type);
    } else {
      element = new type({ ...attrbutes });
    }
    for (let name in attrbutes) {
      element.setAttribute(name, attrbutes[name]);
    }
    let insertChildren = (children) => {
      for (let child of children) {
        if (Array.isArray(child)) {
          insertChildren(child);
        } else {
          if (!(child instanceof Component)
            && !(child instanceof ElementWrapper)
            && !(child instanceof TextWrapper)
          ) {
            child = String(child)
          }
          if (typeof child === 'string') {
            child = new TextWrapper(child);
          }
          element.appendChild(child);
        }
      }
    }

    insertChildren(children);
    return element;
  },
  render(vdom, element) {
    let range = document.createRange();
    if (element.children.length) {
      range.setStartAfter(element.lastChild);
      range.setEndAfter(element.lastChild);
    } else {
      range.setStart(element, 0);
      range.setEnd(element, 0);
    }
    vdom.mountTo(range);
  },
  Component,
}

export default ToyReact;