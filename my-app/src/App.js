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
// import Layout from "./kpmponen baru/layout";
import Button from "./kpmponen baru/button";
import Input from "./kpmponen baru/input";
import Card from "./kpmponen baru/card";
import "./styles/styles.css";

export default function App() {
  const [values, setValues] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    Date: "",
    Gender:"",
    tempatLahir: "",
  });

  const [data, setData] = React.useState([]);
  const [errors, setErrors] = React.useState({});
  const handleChange = (e) => {
    e.preventDefault();
    console.log("ok siap jalan");
    setValues((values) => {
      return {
        ...values,
        [e.target.name]: e.target.value,
      };
    });
    if (e.target.name !== "") {
      setErrors({
        ...errors,
        [e.target.name]: false,
      });
    }
  };

  const handleBlur = (e) => {
    e.preventDefault();

    if (e.target.value === "") {
      setErrors((errors) => {
        return {
          ...errors,
          [e.target.name]: true,
        };
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form tersubmit");

    values.id = new Date().getTime();
    setData((data) => {
      return [...data, values];
    });
    setValues((values) => {
      return {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        Date: "",
        tempatLahir: "",
        Gender: "",
      };
    });
  };
  console.log("error", errors);
  return (
    <React.Fragment>
      <div style={{ display: "flex" }}>
        <form
          onSubmit={handleSubmit}
          style={{ widht: "50px", backgroundColor: "white" }}
        >
          <Input
            isError={errors?.username}
            name="username"
            value={values.username}
            label={"Username"}
            placeholder="Username"
            onBlur={handleBlur}
            onChange={handleChange}
            // onChange={(event) => {
            //   event.preventDefault();
            //   console.log("ok jalan");
            //   console.log(event);
            //   setValues((values) => {
            //     return {
            //       ...values,
            //       username: event.target.value,
            //     };
            //   });
            // }}
          />

          <Input
            isError={errors?.email}
            name="email"
            value={values.email}
            label={"Email"}
            placeholder="Email"
            onBlur={handleBlur}
            onChange={handleChange}
          />

          <Input
            isError={errors?.tempatLahir}
            name="tempatLahir"
            value={values.tempatLahir}
            label={"Tempat Lahir"}
            placeholder="Tempat Lahir"
            onBlur={handleBlur}
            onChange={handleChange}
          />

          <Input
            type="date"
            isError={errors?.Date}
            name="Date"
            value={values.Date}
            label={"Tanggal Lahir"}
            placeholder="Tanggal Lahir"
            onBlur={handleBlur}
            onChange={handleChange}
          />

          <Input
            isError={errors?.Gender}
            name="Gender"
            value={values.Gender}
            label={"Jenis Kelamin"}
            placeholder="Jenis Kelamin"
            onBlur={handleBlur}
            onChange={handleChange}
          />

          <Input
            type="password"
            isError={errors?.password}
            name="password"
            value={values.password}
            label={"Password"}
            placeholder="Password"
            onBlur={handleBlur}
            onChange={handleChange}
          />

          <Input
            type="password"
            isError={errors?.confirmPassword}
            name="confirmPassword"
            value={values.confirmPassword}
            label={"ConfirmPassword"}
            placeholder="ConfirmPassword"
            onBlur={handleBlur}
            onChange={handleChange}
          />

          <Button type={"button"} title={"Reset"} />
          <Button title={"Simpan"} />
        </form>
        <div
          style={{
            width: "50%",
            margin: "100px",
            border: "1px solid white",
            height: "50%",
            backgroundColor: "darkorange",
            borderRadius: "20px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              border: "1px solid black",
              borderRadius: "10px",
              fontStyle: "italic",
              backgroundColor: "whitesmoke",
            }}
          >
            Data{" "}
          </h2>
          <p
            style={{
              color: "white",
              textAlign: "center",
              border: "1px solid white",
              borderRadius: "5px",
              // backgroundColor: "whitesmoke",
            }}
          >
            Nama :{values?.username}
          </p>
          <p
            style={{
              color: "white",
              textAlign: "center",
              border: "1px solid white",
              borderRadius: "5px",
              // backgroundColor: "whitesmoke",
            }}
          >
            email :{values?.email}
          </p>
          <p
            style={{
              color: "white",
              textAlign: "center",
              border: "1px solid white",
              borderRadius: "5px",
              // backgroundColor: "whitesmoke",
            }}
          >
            Tanggal Lahir :{values?.Date}
          </p>

          <p
            style={{
              color: "white",
              textAlign: "center",
              border: "1px solid white",
              borderRadius: "5px",
              // backgroundColor: "whitesmoke",
            }}
          >
            Jenis Kelamin :{values?.Gender}
          </p>

          <p
            style={{
              color: "white",
              textAlign: "center",
              border: "1px solid white",
              borderRadius: "5px",
              // backgroundColor: "whitesmoke",
            }}
          >
            Password :{values?.password}
          </p>
          <p
            style={{
              color: "white",
              textAlign: "center",
              border: "1px solid white",
              borderRadius: "5px",
              // backgroundColor: "whitesmoke",
            }}
          >
            confirmPassword :{values?.confirmPassword}
          </p>
        </div>
      </div>
      <Card data={data} setData={setData} />
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
