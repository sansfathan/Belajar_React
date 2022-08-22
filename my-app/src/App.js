import React from "react";
// import Layout from "./kpmponen baru/layout";
import Button from "./kpmponen baru/button";
import Input from "./kpmponen baru/input";
import Card from "./kpmponen baru/card";
import "./styles/styles.css";

 function App() {
  const [values, setValues] = React.useState({
    Judul: "",
    Catatan: "",
  });
  



  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState({});
  const [password, setPassword] = React.useState("");
  const [form, setForm] = React.useState("");
  function handlePassword(e) {
     const judul = values.Judul;
     const Catatan = values.Catatan;
     if (judul !== Catatan) {
       e.preventDefault();
       alert("Isian tidak di temukan");
       setPassword("Isian tidak di temukan");
     }

     else if (values.Judul === "") {
       e.preventDefault();
       setForm("Form Kosong");
       alert("Form harus di isi");
     }
     else if (values.Catatan === "") {
       e.preventDefault();
       setForm("Form Kosong");
       alert("Form harus di isi");
     }
   }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
    values.id = new Date().getTime();
    setValues((values) => {
      return {
        Judul: "",
        Catatan: "",
      };
    });
    setData((data) => {
      return [...data, values];
    });
  };
  const handleReset = (e) => {
    e.preventDefault();
    setValues((values) => {
      return {
        Judul: "",
        Catatan: "",
      };
    });
  };
  const handleBlur = (e) => {
    e.preventDefault();

    if (e.target.value === "") {
      setError((error) => {
        return {
          ...error,
          [e.target.name]: true,
        };
      });
    } else {
      setError((error) => {
        return {
          ...error,
          [e.target.name]: false,
        };
      });
    }
  };
  const handleChange = (e) => {
    const Judul = values.Judul;
    const Catatan = values.Catatan;
    if (Judul !== Catatan) {
      e.preventDefault();
      setPassword("")
    }
    else if (values.Judul === "") {
      e.preventDefault();
      setForm("")
    }
    else if (values.Catatan === "") {
      e.preventDefault();
      setForm("")
    }
    setValues((values) => {
      return {
        ...values,
        [e.target.name]: e.target.value,
      };
    });
  };  
 
  console.log("error", error);

  return (
    <React.Fragment>
      <div style={{ display: "flex" }}>
        <form
          onSubmit={handleSubmit} isError={error?.form}
          
          style={{ widht: "50px", backgroundColor: "white" }}
        >
          <Input
            isError={error?.Judul}
            textError={"tolong di isi"}
            name="Judul"
            value={values.Judul}
            label={"Judul"}
            placeholder="Judul"
            onBlur={handleBlur}
            onChange={handleChange}
            onReset={handleReset}
          />

          <Input

            isError={error?.Catatan}
            textError={"tolong di isi"}
            name="Catatan"
            value={values.Catatan}
            label={"Catatan"}
            placeholder="Catatan"
            onBlur={handleBlur}
            onChange={handleChange}
          />

          <Button title={"simpan"} />
        </form>
        <div
          style={{
            width: "50%",
            margin: "100px",
            border: "1px solid white",
            height: "50%",
            backgroundColor: "white",
            borderRadius: "20px",
          }}
        >
        </div>
      </div>

      <Card 
      data={data} 
      setData={setData} 
      />
    </React.Fragment>
  );
}


export default App;
