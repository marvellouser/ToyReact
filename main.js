import ToyReact, { Component } from './ToyReact';
console.log(ToyReact, 'jjjjjjjjj', ToyReact.Component === Component)
class MyComponent extends Component {
  render() {
    return (
      <div>
        <span>hello</span>
        <SubComponent />
        <h1>world</h1>
        <h2>
          {this.children}

        </h2>
      </div>
    )
  }
}

class SubComponent extends Component {
  render() {
    return (
      <div>
        <h1>SubComponent</h1>
      </div>
    )
  }
}
const a = <MyComponent>

</MyComponent>
ToyReact.render(a, document.body);