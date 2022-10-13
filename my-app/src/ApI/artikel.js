import axios from "./baseUrl2";



export async function getAllArtikel(){
    return axios.get(`/artikel`)
}
export async function createArtikel(payload){
    console.log("payload akan di kirim", payload)
    
    const formData = new FormData()
    formData.append('judul', payload.judul)
    formData.append('artikel', payload.artikel)
    formData.append('thumbnail', payload.thumbnail)

    return axios.post("/artikel", formData)
}

export async function detailArtikel(slug) {
    return axios.get(`/artikel/${slug}`)
}

export async function deleteArtikel(id){
    return axios.put(`api/artikel/delete/${id}`)
}

export async function updateArtikel(slug,payload){
     return axios.put('/artikel/updateArtikel/${slug}',payload)
} 
