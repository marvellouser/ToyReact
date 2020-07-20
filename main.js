import ToyReact, { Component } from './ToyReact';

class MyComponent extends Component{
  render() {
    return (
      <div>
        <span>hello</span>
        <h1>world</h1>
        <h2>
          {this.children}

        </h2>
      </div>
    )
  }
}
const a = <MyComponent>
  <div>2222</div>
</MyComponent>
ToyReact.render(a, document.body);