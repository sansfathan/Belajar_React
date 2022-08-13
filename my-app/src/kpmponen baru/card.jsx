import React from "react";

export default function Card({ data, setData }) {
  console.log("data adalah", data);

  const handleDelete = (e) => {
    e.preventDefault();
    console.log(e.target.value);

    let filter = data.filter((item) => {
      return item.id !== parseFloat(e.target.value);

    });

    console.log(filter);
    setData(() => {
      return filter;

    });

    console.log("button delete click");
  };

  return (
    <React.Fragment>
      <div>

        {data?.map((item) => {
          return (
            <div
              style={{
                height:"300px",
                width:"400px",
                textAlign:"center",
                border: "5px solid black",
                backgroundColor: "whitesmoke",
                padding: "20px",
                marginTop: "20px",
                borderRadius: "10px",
              }}
            >
              <p>Id : {item?.id}</p>
              <p>Nama : {item?.username}</p>
              <p>Email : {item?.email}</p>
              <p>Tempat Lahir : {item?.tempatLahir}</p>
              <p>Tanggal Lahir : {item?.Date}</p>
              <p>Jenis Kelamin : {item?.Gender}</p>
              {/* <p>Password : {item?.password}</p> */}
              {/* <p>confirmPassword : {item?.confirmPassword}</p> */}
             
              <button style={{backgroundColor:"red", height:"40px", width:"150px",color:"white",border:"3px solid white",borderRadius:"10px",fontStyle:"italic" }} value={item?.id} onClick={handleDelete}>Hapus</button>
              <button style={{backgroundColor:"blueviolet", height:"40px", width:"150px",color:"white",border:"3px solid white",borderRadius:"10px",fontStyle:"italic" }} value={item?.id} onClick={handleDelete}>Update</button>
             

            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}
