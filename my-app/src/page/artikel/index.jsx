/* eslint-disable no-unused-vars */
import React from "react";
import Button from "../../komponen baru/button";
import { Link, useNavigate,useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { getAllArtikel,deleteArtikel } from "../../ApI/artikel";
import Skeleton from "react-loading-skeleton";
import Swal from "sweetalert2";

export default function Artikel() {
  let {id} = useParams()
  const [listArtikel, setListArtikel] = React.useState([]);
  const [isFatchArtikel, setIsFatchArtikel] = React.useState(false);

  const navigate = useNavigate();

  

  const deleteArtikelHandle = (id) => {
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
         const response = await deleteArtikel(id)
          //delete
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
         getListArtikelHandle();
        } catch (err) {
          Swal.fire("Gagal!", "User tidak di temukan.", "error");
        }
      }
    });
    console.log("berhasil di delete", id);
  }

  const getListArtikelHandle = async () => {
    try {
      setIsFatchArtikel(true);
      const response = await getAllArtikel();
      console.log("response =>", response.data.data);
      console.log("jalan lagi");
      setListArtikel(response.data.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsFatchArtikel(false);
    }
  };
  console.log(listArtikel);
  React.useEffect(() => {
    getListArtikelHandle();
  }, []);
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100%",
        height: "70%",
        color: "black",
        border: "2px solid black",
      }}
    >
      <Link style={{border:"3px solid black", widht:"50px"}} className="mt-10" to="/artikel/createArtikel">Tambah Artikel</Link>
      <table className="table-auto w-[1000px]">
        <thead>
          <tr  className="text-left border">
            <th>No</th>
            <th>Judul</th>
            <th>Thumbnail</th>
            <th>Artikel</th>
            <th>Penulis</th>
            <th>di buat</th>
            <th>di update</th>
            <th>Aksi</th>
          </tr>
        </thead>

        <tbody>
          {isFatchArtikel ? (
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
            listArtikel.map((artikel, index) => {
              return (
                <tr key={index} className="border">
                  <td>{index + 1}</td>
                  <td>{artikel?.judul}</td>
                  <td>
                    <img
                      src={artikel?.thumbail}
                      style={{ width: "10px", height: "10px" }}
                      alt='gambar'
                    />
                  </td>
                  <td>{artikel?.artikel}</td>
                  <td>{artikel?.username}</td>
                  <td>{artikel?.create_at}</td>
                  <td>{artikel?.update_at}</td>
                  <td>
                    {""}
                    <Button
                      onClick={() => {
                        return navigate(`/artikel/updateArtikel/${artikel.slug}`);
                      }}
                      color="blue"
                      title={"Edit"}
                     
                    />
                    <Button
                      onClick={() => {
                        console.log("delete jalan");
                        
                      }}
                      color="red"
                      title={"Delete"}
                    ></Button>
                    <Button color="green" title={"View"} onClick={()=> {
                      return navigate(`/artikel/detailArtikel/${artikel.slug}`, {replace : true});
                    }}/>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      <p style={{ marginTop: "100px" }}>Ini Page Artikel</p>

      <Button
        onClick={() => {
          Cookies.remove("myapps_token");
          return navigate("/user", { replace: true });
        }}
        title={"Back"}
      />
    </div>
  );
}
