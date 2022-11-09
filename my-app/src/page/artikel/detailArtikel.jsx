/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { detailArtikel } from "../../ApI/artikel";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../../komponen baru/button";

export default function DetailArtikel() {
  let navigate = useNavigate();
  let { slug } = useParams();
  const [payload, setpPayload] = React.useState({
    judul: "",
    thumbnail: "",
    artikel: "",
    imagePreview: null,
  });
  const getDetailArticle = async () => {
    try {
      const response = await detailArtikel(slug);
      const dataArtikel = response.data.data;
      console.log(dataArtikel);
      setpPayload(() => {
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
    <React.Fragment>
      <div  className="grid grid-cols-2 ">
        <h1>halaman View dari : {slug}</h1>
        <div>
          <img src={payload.thumbnail} alt="gambar" style={{widht:"50px",height:"50px"}}/>
        </div>
        <div>
          <h1 style={{fontStyle:"italic"}}>Judul :</h1>
          <h3>{payload.judul}</h3>
          <h1 style={{fontStyle:"italic"}}>Artikel :</h1>
          <p style={{marginBottom:"10px"}}>{payload.artikel}</p>

          <Button
            onClick={() => {
              return navigate(`/artikel`);
            }}
            title={"Back"}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
