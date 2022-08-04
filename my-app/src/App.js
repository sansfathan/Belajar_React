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
import Input from "./kpmponen baru/input";
import "./styles/styles.css";

export default function App() {
  const [values, setValues] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange=(e) =>{
    e.preventDefault()
    console.log("ok siap jalan");
    setValues((values) =>{
      return{
        ...values,
        [e.target.name]: e.target.value
      }
    }
    )
    // setValues{(values)=>{
    //   return{
    //     ...values,
    //     e.target.name
    //   }
    // }}
  }
  return (
    <React.Fragment>
      <div style={{ display: "flex" }}>
        <form style={{widht:'500'}}>
          <Input
            name="username"
            value={values.username}
            label={"Username"}
            placeholder="Username"
            onChange={(event) => {
              event.preventDefault();
              console.log("ok jalan");
              console.log(event);
              setValues((values) => {
                return {
                  ...values,
                  username: event.target.value,
                };
              });
            }}
          />

          <Input
            name="email"
            value={values.email}
            label={"Email"}
            placeholder="Email"
            onChange={handleChange}
          />

          <Input
            name="password"
            value={values.password}
            label={"Password"}
            placeholder="Password"
            onChange={handleChange}
          />

          <Input
            name="confirmPassword"
            value={values.confirmPassword}
            label={"ConfirmPassword"}
            placeholder="ConfirmPassword"
            onChange={handleChange}
          />

          <Button title={"simpan"} />
        </form>
        <div
          style={{
            width:"50%",
            margin:"50px"
          }
            
        }
 >
          <p>username :{values?.username}</p>
          <p>email :{values?.email}</p>
          <p>passwor :{values?.password}</p>
          <p>confirmPassword :{values?.confirmPassword}</p>
        </div>
      </div>
      <></>
    </React.Fragment>
  );
}

// function App() {
//   let [count, setCount] = React.useState(0);
//   const handleTambah = () => {
//     setCount(count + 1);
//   };
//   const handleKurang = () => {
//     setCount(count - 1);
//   }
//   return (
//     <React.Fragment>

//       <h1>count = {count}</h1>
//       <Button onClick={handleTambah} title="Tambah" color="blue" />
//       <Button
//         disabled={count <= 0 ? true : false}
//         onClick={handleKurang} title="Kurang" color="green" />
//       <Button
//         disabled={count === 0 ? true : false}
//       onClick={() => {
//         setCount(0)
//       }
//       } title="Resets" />
//     </React.Fragment>

//   );
// }

// export default App;
