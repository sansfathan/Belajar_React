import React from "react";
import Input from "../komponen baru/input";
import Button from "../komponen baru/button";
import axios from "axios";
import Select from "../komponen baru/select";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
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
      const response = await axios.post(
        'https://belajar-react.smkmadinatulquran.sch.id/api/users/create',
        users
      );
      setIsLoading(false);
      return navigate("/users");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className="bg-red-700">Tambah User</h1>
      <form onSubmit={handleSubmit}>
        <Input
          value={users.username}
          label={"username :"}
          placeholder={"userName"}
          name={"username"}
          onChange={handleChange}
        />
        <Input
          value={users.name}
          label={"name :"}
          placeholder={"name"}
          name={"name"}
          onChange={handleChange}
        />

        <Input
          value={users.email}
          label={"email :"}
          placeholder={"email"}
          name={"email"}
          onChange={handleChange}
        />
        
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
        <Input
          value={users.password_confirmation}
          label={"Konfirmasi password :"}
          placeholder={"Confirm Password"}
          name={"password_confirmation"}
          onChange={handleChange}
        />
        <Button title={isLoading ? "sedang menyimpan" : "simpan"} />
        
      </form>
    </div>
  );
}
