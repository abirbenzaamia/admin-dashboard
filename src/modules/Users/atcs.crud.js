import axios from "axios"
import { Services } from "../../services/crud.services"


export function getATCs() {
    return axios.get(Services.ATC_URL)
}

export function getATCInfo(id) {
    //console.log(Services.LOCATAIRE_URL+id)
    return axios.get(Services.ATC_URL+id)
}

