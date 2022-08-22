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
import {Routes, Route , NavLink} from 'react-router-dom';
import Card from "./komponen/card";
import Settings from "./pages/settings";
import Detail from "./pages/detail";

function App () {
  return (
    <React.Fragment>
      <div style={{display:"flex"}}>Buat catatan

      </div>
      {/* <div style={{display:"flex"}}>

      <Input
            isError={errors?.email}
            name="judul"
            value={values.judul}
            label={"judul"}
            placeholder="judul"
            onBlur={handleBlur}
            onChange={handleChange}
          />

<Input
            isError={errors?.Catatan}
            name="Catatan"
            value={values.Catatan}
            label={"Catatan"}
            placeholder="Catatan"
            onBlur={handleBlur}
            onChange={handleChange}
          />

      </div> */}
    </React.Fragment>
  )
}
export default App;

