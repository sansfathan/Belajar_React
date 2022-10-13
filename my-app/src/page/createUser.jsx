import React from "react";
import Input from "../komponen baru/input";
import Button from "../komponen baru/button";
import axios from "axios";
import Select from "../komponen baru/select";
import { createUser } from "../ApI/user";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  let [errorMessage, setErrorMessage] = React.useState("");
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState({});
  const [users, setUsers] = React.useState({
    username: "",
    name: "",
    jenis_kelamin: "laki-laki",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    setUsers((users) => {
      return {
        ...users,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(users);

    try {
      setIsLoading(true);
      // eslint-disable-next-line no-unused-vars
      const response = await createUser(users);

      return navigate("/users");
    } catch (err) {
      console.log(err);

      setIsLoading(false);
      setErrorMessage("Periksa error kembali");

      setError(err?.response?.data?.errors);
      setErrorMessage("periksa imputan kembali");
    }
  };
  console.log("error ke =>", error);
  return (
    <div>
      {/* <p style={{color:"red",border:"1px solid black",textAlign:"center",marginTop:5,marginBottom:5}}>{errorMessage}</p> */}
      <h1 className="bg-red-700">Tambah User</h1>

      <form onSubmit={handleSubmit}>
        <Input
          value={users.username}
          label={"username :"}
          placeholder={"userName"}
          name={"username"}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{error?.username?.[0]}</p>
        <Input
          value={users.name}
          label={"name :"}
          placeholder={"name"}
          name={"name"}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{error?.name?.[0]}</p>

        <Input
          value={users.email}
          label={"email :"}
          placeholder={"email"}
          name={"email"}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{error?.email?.[0]}</p>

        <Select
          value={users.jenis_kelamin}
          label={"jenis Kelamin :"}
          placeholder={"Jenis Kelamin"}
          name={"jenis_kelamin"}
          onChange={handleChange}
        >
          <option>Pilih</option>
          <option value={"laki-laki"}>Laki-laki</option>
          <option value={"perempuan"}>Perempuan</option>
        </Select>

        <Input
          value={users.password}
          label={"password :"}
          placeholder={"password"}
          name={"password"}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{error?.password?.[0]}</p>
        <Input
          value={users.password_confirmation}
          label={"Konfirmasi password :"}
          placeholder={"Confirm Password"}
          name={"password_confirmation"}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{error?.password_confirmation?.[0]}</p>
        
      </form>
      <Button title={isLoading ? "sedang menyimpan" : "simpan"} />
        <Button color="wihte" title={"back"} />
    </div>
  );
}
