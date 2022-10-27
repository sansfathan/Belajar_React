import React from "react";
import Button from "../komponen baru/button";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Skeleton from "react-loading-skeleton";
import { getAllUser, DeleteUser } from "../ApI/user";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
// import {increment,decrement} from "../redux";

export default function User() {
  let navigate = useNavigate();
  const [users, setUsers] = React.useState([]);
  const [page, setPage] = React.useState(100);
  const [isFatchUser, setIsFatchUser] = React.useState(false);
  // const store = useSelector((state) => state);
  // const count = useSelector((state) => state.count);
  // const dispatch = useDispatch()

  // console.log("store =>", store);
  // console.log("count =>", count);


  const getUserHandle = async () => {
    try {
      setIsFatchUser(true);
      const response = await getAllUser(page);
      console.log("response =>", response.data);
      setUsers(response.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsFatchUser(false);
    }
  };

  const deleteUSerHandle = (id) => {
    console.log("button delete berjalan", id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await DeleteUser(id);
          //delete
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          getUserHandle();
        } catch (err) {
          Swal.fire("Gagal!", "User tidak di temukan.", "error");
        }
      }
    });
    console.log("berhasil di delete", id);
  };

  console.log("user =>", users);
  console.log("page =>", page);

  React.useEffect(() => {
    getUserHandle();
  }, [page]);

  return (
    <div>
      <Link to="/artikel">Artikel</Link>
      <div></div>
      <Link color="red" to="/user/create">
        Tambah users
      </Link>
      <div></div>

      <Button
        title={"Log Out"}
        onClick={() => {
          Cookies.remove("myapps_token");
          return navigate("/login", { replace: true });
        }}
      />
      <table className="table-auto w-[1000px]">
        <thead>
          <tr className="text-left border">
            <th>id</th>
            <th>username</th>
            <th>email</th>
            <th>jenis kelamin</th>
            <th>di buat</th>
            <th>di update</th>
            <th>Aksi</th>
          </tr>
        </thead>

        <tbody>
          {isFatchUser ? (
            <tr>
              <td>
                <Skeleton
                  width={500}
                  duration={2000}
                  baseColor="grey"
                  highlightColor="blue"
                  count={9}
                />
              </td>
            </tr>
          ) : (
            users.map((user, index) => {
              return (
                <tr key={index} className="border">
                  <td>{index + 1}</td>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.jenis_kelamin}</td>
                  <td>{user.store_at}</td>
                  <td>{user.update_at}</td>
                  <td>
                    <Button
                      onClick={() => {
                        return navigate(`/user/update/${user.id}`);
                      }}
                      color="blue"
                      title={"Edit"}
                    />

                    <Button
                      onClick={() => {
                        deleteUSerHandle(user.id);
                      }}
                      color="red"
                      title={"Delete"}
                    ></Button>
                    <Button
                      title={"view"}
                      onClick={() => {
                        return navigate("/DetailUser", { replace: true });
                      }}
                    ></Button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      <p>saat ini di page {page}</p>
      <div className="flex items-center justify-center">
        <Button
          title={"Previos"}
          onClick={() => {
            setPage(page - 1);
          }}
        ></Button>
        <Button
          color="blue"
          title={"Next"}
          onClick={() => {
            setPage(page + 1);
          }}
        >

        </Button>
      </div>
      {/* <div className="border mt-3 grid grid-cols-1 gap-4 ">
        <p>status:{count.status}</p>
        <p>value: :{count.value}</p>
        <Button title={'Tambah'} onClick={() => {
          dispatch(increment());
        }}/>
        <Button title={'Kurang'} color='blue' onClick={() => {
           dispatch(decrement());
        }}/>
        <Button color="green" title={"Green"} onClick={() => {
           dispatch(decrement());
        }}/>
        <Button color="yellow" title={"Yellow"}/>
      </div> */}
    </div>
  );
}
