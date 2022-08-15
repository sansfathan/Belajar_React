// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Hello World
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// function App () {
//   return (
//     <div>
//       <p>Hello World</p>
//     </div>
//   )
// }

// export default App;
// function App() {
//   let a = 20
//   let b = 10
//   return (
//     <div>
//       <h1>Hello World Ke-{a}</h1>
//       <h1>Hello World Ke-{a+b}</h1>
//     </div>
//   );
// }
// export default App;
// function App() {
//   let a = 20
//   let b = 10
//   return (
//     <React.Fragment>
//       <h1>Hello World Ke-{a}</h1>
//       <h1>Hello World Ke-{a + b}</h1>
//     <button>button</button>
//     </React.Fragment>
//   );
// }
// export default App;

import React from "react";
import Latihan from "./latihan";
import "./styles/styles.css";

function App() {
  let [count, setCount] = React.useState(0);
  let [color, setColor] = React.useState("blue");
  return (
    <React.Fragment>
      <div></div>
      <Latihan
        count={count}
        setCount={setCount}
        color={color}
        setColor={setColor}
      />
    </React.Fragment>
  );
}
export default App;
