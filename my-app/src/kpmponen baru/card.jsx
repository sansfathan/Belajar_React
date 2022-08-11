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
                border: "1px solid black",
                backgroundColor: "whitesmoke",
                padding: "20px",
                marginTop: "20px",
                borderRadius: "10px",
              }}
            >
              <p>Id : {item?.id}</p>
              <p>Username : {item?.username}</p>
              <p>Email : {item?.email}</p>
              <p>Password : {item?.password}</p>
              <p>confirmPassword : {item?.confirmPassword}</p>
              <button value={item?.id} onClick={handleDelete}>Hapus</button>

            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}
