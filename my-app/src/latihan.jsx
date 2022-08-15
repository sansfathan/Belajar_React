import React from "react";

export default function Latihan({ color, setColor }) {
  //   const handleTambah = () => {
  //     setCount(count + 1);
  //   };
  //   const handleKurang = () => {
  //     setCount(count - 1);
  //   };

  const handleRed = () => {
    setColor((color = "red"));
  };

  const handleGreen = () => {
    setColor((color = "green"));
  };
  //   const angka = () => {
  //     if (count <= 10) {
  //     }
  //     if (count >= 10) {
  //     }
  //   };

  return (
    <React.Fragment>
      <p>ini Card</p>
      <div style={{ height: "150px", widht: "100", backgroundColor: color }}>
      
        <p>warna</p>
      </div>
      <button
        onClick={() => {
          setColor("red");
        }}
      >
        red
      </button>

      <button
        onClick={() => {
          setColor("yellow");
        }}
      >
        yellow
      </button>

      <button
        onClick={() => {
          setColor("green");
        }}
      >
        green
      </button>

      {/* <p>Angka : {count}</p>
      <p style={{ fontSize: "30px" }}>
        {count >= 10 ? "lebih dari sepuluh" : "Kurang dari sepuluh"}
      </p>
      <button onClick={handleTambah}>Tambah</button>
      <button onClick={handleKurang}>Kurang</button> */}
    </React.Fragment>
  );
}
