import axios from "axios";
import React from "react";

export default function User() {
  const [users, setUsers] = React.useState([]);
  const [page, setPage] = React.useState(1);

  const getUserHandle = async () => {
    try {
      const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
      console.log("response =>", response.data);
      setUsers(response.data.data);
      setPage(response.data.page);
      
     }  
    catch (err) {}
  };
  console.log("user =>", users);
  console.log("page =>", page);

  React.useEffect(() => {
    getUserHandle();
  }, [page]); 

  return (
    <div>
      <h1>table user</h1>
      <button onClick={getUserHandle}>List Users</button>
      <table className="table-auto">
        <thead>
          <tr className="text-left border">
            <h1>id</h1>
            <h1>email</h1>
            <h1>First Name</h1>
            <h1>Last Name</h1>
            <h1>Avatar</h1>
            <h1>Detail</h1>
          </tr>
        </thead>
        
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index} className="border">
                <td>{index + 1}</td>
                <td>{user.email}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>
                  <img
                    className="rounded-full h-5 w-5"
                    src={user.avatar}
                    alt={user.avatar}
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
        <button onclick= {() => {
            setPage(page - 1)
        }}>Previos</button>
        <button onclick= {() => {
            setPage(page + 1)
        }}>Next</button>
      </div>
    </div>
  );
}
