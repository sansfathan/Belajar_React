import axios from "axios";
import React from "react";
import Button from "../komponen baru/button";
import { Link, useNavigate } from "react-router-dom";



export default function User() {
  let navigate = useNavigate();
  const [users, setUsers] = React.useState([]);
  const [page, setPage] = React.useState(100);

  const getUserHandle = async () => {
    try {
      const response = await axios.get(`
      https://belajar-react.smkmadinatulquran.sch.id/api/users/${page}`);
      console.log("response =>", response.data);
      setUsers(response.data.data);
      setPage(response.data.page);
    } catch (err) {}
  };
  console.log("user =>", users);
  console.log("page =>", page);

  React.useEffect(() => {
    getUserHandle();
  }, [page]);

  return (
    <div>
  
      <Link to="/user/create">Tambah users</Link>
      <table className="table-auto w-[1000px]">
        <thead>
          <tr className="text-left border">
            <h1>id</h1>
            <h1>username</h1>
            <h1>email</h1>
            <h1>jenis kelamin</h1>
            <h1>di buat</h1>
            <h1>di update</h1>
            <h1>Aksi</h1>
           
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index} className="border">
                <td>{index + 1}</td>
                {/* <td>{user.nomor}</td> */}
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.jenis_kelamin}</td>
                <td>{user.store_at}</td>
                <td>{user.update_at}</td>
                <td><Button onClick={() => {
                  return navigate(`/user/update/${user.id}`)
                }} title={'Edit'}/>
                <button title={'Delete'}></button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>saat ini di page {page}</p>
      <div className="flex items-center justify-center">
        <button
          onClick={() => {
            setPage(page - 1);
          }}
        >
          Previos
        </button>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
