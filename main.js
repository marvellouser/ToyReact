

import ToyReact from './ToyReact';


// const container = document.getElementById('root');

// const a = <div>111<span>222</span></div>
// console.log(a, '.......')

// ToyReact.render(a, container);


const container = document.getElementById("root")

const updateValue = e => {
  rerender(e.target.value)
}

const rerender = value => {
  const element = (
    <div>
      <input onInput={updateValue} value={value} /><span onClick={handleDelete}>delete</span>
      <h2>Hello {value}</h2>
    </div>
  )
  // const element = <div a="11">111</div>
  ToyReact.render(element, container)
}

rerender("World")

