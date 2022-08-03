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
import Layout from "./kpmponen baru/layout";
import Button from "./kpmponen baru/button";
import "./styles/styles.css"
function App() {
  return (
    <React.Fragment>
      <h1>Belajar Props 2</h1>
      <Layout title={"nomor 1"}>
        <h1>SMK MADINATUL QURAN</h1>
      </Layout>
      <Layout title={"nomor 2"}>
        <h1>SMK IDN</h1>
      </Layout>
      <Layout title={'nomor 3'}>
        <h1>SMK UMUM</h1>
      </Layout>
      <Button
        onClick={() => {
          console.log("button in simpan")
        }}
        color="blue" title={'simpan'} />
      <Button
        onClick={() => {
          console.log("button in batal")
        }}
        disabled={true}
        title={'batal'} />
      <Button color="green" title={"update"} />
    </React.Fragment>

  );
}
export default App;