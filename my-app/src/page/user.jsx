import axios from "axios";
import React from "react";

export default function User() {
  const [users, setUsers] = React.useState([]);
  const [page, setPage] = React.useState(1);

  const getUserHandle = async () => {
    try {
      const response = await axios.get(`
      https://equran.id/api/surat`);
      console.log("response =>", response.data);
      setUsers(response.data);
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
      <h1>List Surat</h1>
      <button onClick={getUserHandle}>List Surat</button>
      <table className="table-auto">
        <thead>
          <tr className="text-left border">
            <h1>nomor</h1>
            <h1>Nama</h1>
            <h1>Nama Latin</h1>
            <h1>Jumlah ayat</h1>
            <h1>Tempat Turun</h1>
            <h1>Arti</h1>
            <h1>Deskripsi</h1>
            
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index} className="border">
                <td>{index + 1}</td>
                {/* <td>{user.nomor}</td> */}
                <td>{user.nama}</td>
                <td>{user.nama_latin}</td>
                <td>{}</td>
                <td>{user.jumlah_ayat}</td>
                <td>{user.turun_ayat}</td>
                <td>{user.arti}</td>
                <td>
                  <img
                    className="rounded-full h-5 w-5"
                    // src={user.de}
                    // alt={user.audio}
                  />
                </td>
                <td>detail</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>saat ini di page {page}</p>
      <div className="flex items-center justify-center">
        <button
          onclick={() => {
            setPage(page - 1);
          }}
        >
          Previos
        </button>
        <button
          onclick={() => {
            setPage(page + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
