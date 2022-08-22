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
              <p>{item?.Judul}</p>
              <p>{item?.Catatan}</p>
              <p>{item?.id}</p>
             
              <button value={item?.id} onClick={handleDelete}>Hapus</button>
              <button value={item?.id} onClick={handleDelete}>Arsipkan</button>

            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}
