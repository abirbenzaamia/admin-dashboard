import axios from "axios"
import { Services } from "../../services/crud.services"


export function getATCs() {
    return axios.get(Services.ATC_URL)
}

export function getLocataireInfo(id) {
    //console.log(Services.LOCATAIRE_URL+id)
    return axios.get(Services.LOCATAIRE_URL+id)
}

