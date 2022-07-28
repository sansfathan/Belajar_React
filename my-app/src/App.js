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
import "./styles/style.css"
import Identitas from "./Identitas";
import Nilai from "./nilai";
function App() {
  let [data, setData] = React.useState([10,20,30,40,50])
  return (
    <React.Fragment>
      <h1>Latihan Props</h1>
      <section className="section">
       <div>
       <Identitas nama={"fathan"} kelas={"XI RPL"} nilai={"100"} />
        <Identitas nama={"darman"} kelas={"XI RPL"} nilai={"100"} />
        <Identitas nama={"Ilham"} kelas={"XI RPL"} nilai={"100"} />
        <Identitas nama={"Cobuzer"} kelas={"XI RPL"} nilai={"100"} />
        <Identitas/>
       
       </div>
       <Nilai nama={'Fathan'} data={data}/>
      </section>
    </React.Fragment>
  );
}
export default App;