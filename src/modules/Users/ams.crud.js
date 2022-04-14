import axios from "axios"
import { Services } from "../../services/crud.services"


export function getAMs() {
    return axios.get(Services.AM_URL)
}

export function getAMInfo(id) {
    //console.log(Services.LOCATAIRE_URL+id)
    return axios.get(Services.AM_URL+id)
}

