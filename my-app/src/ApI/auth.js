import Cookies from "js-cookie";
import axios, { syncToken } from "./baseUrl2";

export async function loginProses(payload){
    return axios.post("/login", payload)
}
export async function registerProses(payload){
    return axios.post("/register",payload)
}
export async function authMeProcess() {
syncToken()
return axios.get("/authme",{
    headers:{
        Authorization:`Bearer ${Cookies.get("myapps_token")}`,
    }
})
}
