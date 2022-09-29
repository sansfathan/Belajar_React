import axios from "./baseUrl";


export async function getAllUser(pageSize = 1){
    return axios.get(`/users/${pageSize}`)
}



export async function createUser(payload){
    return axios.post("/users/create",payload)
}



export async function detailUser(app){
    return axios.get(`/users/detail/${app}`)
}

export async function updateUsers(id,payload){
    return axios.put(`/users/update/${id}`,payload )
}

export async function DeleteUser(id){
    return axios.put(`/users/hapus/${id}`)
}
