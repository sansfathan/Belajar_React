/* eslint-disable eqeqeq */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Input from "../../komponen baru/input";
import Button from "../../komponen baru/button";
import { useNavigate, useParams } from "react-router-dom";
import { detailArtikel, updateArtikel } from "../../ApI/artikel";

export default function UpdateArtikel() {
  let { id } = useParams();
  let { slug } = useParams();
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const [payload, setPayload] = React.useState({
    judul: "",
    thumbnail: "",
    artikel: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(payload);
    try {
      setIsLoading(true)
      const response = await updateArtikel(payload);
      let data = response?.data
      console.log(data)
      if (data?.status == 'fail') {
        return alert(data?.message)
      }
      console.log('response =>',response)
      return navigate("/artikel", {replace : true});
      alert("Berhasil")
    } catch (err) {
      console(err)
      alert("Terjadi error di backEnd")
    } finally {
      alert("Gagal")
      setIsLoading(false)
    }
  };
  const getDetailArticle = async () => {
    try {
      const response = await detailArtikel(slug);
      const dataArtikel = response.data.data;
      console.log(dataArtikel);
      setPayload((payload) => {
        return {
          ...payload,
          id: dataArtikel?.id,
          judul: dataArtikel?.judul,
          thumbnail: dataArtikel?.thumbnail,
          artikel: dataArtikel?.artikel,
          imagePreview: dataArtikel?.thumbnail,
        };
      });
    } catch (error) {}
  };

  React.useEffect(() => {
    getDetailArticle();
  }, []);

  return (
    <div>
      <h1 className="bg-red-700 w-40 h-40">Update Artikel dari : {slug}</h1>
      <form style={{ margin: "auto" }} onSubmit={handleSubmit}>
        <Input
          value={payload.judul}
          label={"judul :"}
          placeholder={"judul"}
          name={"judul"}
          onChange={handleChange}
        />

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

        <img
          src={payload.thumbnail}
          alt="hanya Sekedar gambar"
          style={{ widht: "50px", height: "50px" }}
        />


        <Button title={isLoading ? "sedang memperbarui" : "perbarui"} />
        <Button
          title={"back"}
          onClick={() => {
            return navigate("/artikel", { replace: true });
          }}
        />
      </form>
    </div>
  );
}
