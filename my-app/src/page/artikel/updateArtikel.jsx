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
      const response = await updateArtikel(id);
      return navigate("/artikel");
    } catch (err) {
      console(err)
      alert("Terjadi error di backEnd")
    } finally {
    }
  };
  const getDetailArticle = async () => {
    try {
      const response = await detailArtikel(slug);
      const dataArtikel = response.data.data;
      console.log(dataArtikel);
      setPayload(() => {
        return {
          judul: dataArtikel.judul,
          thumbnail: dataArtikel.thumbnail,
          artikel: dataArtikel.artikel,
          imagePreview: null,
        };
      });
    } catch (error) {}
  };

  React.useEffect(() => {
    getDetailArticle();
  }, []);

  return (
    <div>
      <h1 className="bg-red-700">Update Artikel dengan {slug}</h1>
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

        <img
          src={payload.thumbnail}
          alt="gambar"
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
