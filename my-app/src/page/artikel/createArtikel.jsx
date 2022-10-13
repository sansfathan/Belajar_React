import React from "react";
import Input from "../../komponen baru/input";
import { useNavigate } from "react-router-dom";
import Button from "../../komponen baru/button";
import { createArtikel } from "../../ApI/artikel";

export default function CreateArtikel() {
  let navigate = useNavigate();
  const [error, setError] = React.useState({});
  const [isloading, setIsLoading] = React.useState();
  const [payload, setPayload] = React.useState({
    judul: "",
    thumbnail: "",
    artikel: "",
    files: "",
    iamgePriview: null,
  });
  const handleChange = (e) => {
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };
  const [isSubmiting, setIsSubmiting] = React.useState(false);
  const handleSubmit = async (e) => {
    console.log("ok jalan")
    try {
      e.preventDefault();
      const response = await createArtikel(payload);
      alert("berhasil");
      return navigate("/artikel", { replace: true });
    } catch (err) {
      console.log(err);
    } finally {
      setIsSubmiting(false);
    }
  };
  console.log("payload =>", payload);
  return (
    <React.Fragment>
      <h1 style={{ backgrounColor: "blue" }}>Ini page Create Artikel</h1>
      <form style={{ margin: "auto" }} onSubmit={handleSubmit}>
        <Input
          value={payload.judul}
          label={"judul :"}
          placeholder={"judul"}
          name={"judul"}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{error?.judul?.[0]}</p>
        <Input
          value={payload.artikel}
          label={"artikel :"}
          placeholder={"artikel"}
          name={"artikel"}
          onChange={handleChange}
        />

        <Input
          value={payload.thumbnail?.file}
          type={"file"}
          label={"thumbnail :"}
          placeholder={"thumbnail"}
          name={"thumbnail"}
          onChange={(e) => {
            console.log("event", e.target.files[0]);
            let file = e.target.files[0];
            if (file.size > 20000000) {
              return alert("ukuran lebih dari 100 Kb");
            }
            if (
              file.type === "image/jpeg" ||
              file.type === "image/png" ||
              file.type === "application/pdf" ||
              file.type === "image/gif"
            ) {
              let reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onloadend = () => {
                setPayload((payload) => {
                  return {
                    ...payload,
                    iamgePriview: reader.result,
                    thumbnail: file,
                  };
                });
              };
              console.log("code di sini");
            } else {
              return alert("image Harus image atau PDF");
            }
          }}
        />
          <Button title={isloading ? "sedang menyimpan" : "simpan"} />
        <img src={payload.iamgePriview} alt={payload.iamgePriview} />
      </form>
    
      <Button
        title={"back"}
        onClick={() => {
          return navigate("/artikel", { replace: true });
        }}
      />
    </React.Fragment>
  );
}
