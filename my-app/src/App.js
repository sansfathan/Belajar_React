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
import Home from "./pages/home";
import About from "./pages/about"
import Settings from "./pages/settings";
import Detail from "./pages/detail";

function App () {
  return (

    
   <React.Fragment>
    <section >
      
<NavLink
 exact to="/" 
 style={({isActive}) => 
isActive
? {
  color:"red",
}
:undefined
}
>Home</NavLink>

<NavLink
 exact to="/settings" 
 style={({isActive}) => 
isActive
? {
  color:"red",
}
:undefined
}
>Settings</NavLink>

<NavLink
 exact to="/about" 
 className={({isActive})=>
 isActive ? ' border p-2 bg-red' : undefined
 }
// style= {({isActive}) => 
// isActive ?
//  {
//   color:"red",
// }
// :undefined
// }
>About</NavLink>

    </section>
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/settings" element={<Settings/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/about/:id/:nama" element={<Detail/>}/>
    </Routes>
   </React.Fragment>
  );
}
export default App;

