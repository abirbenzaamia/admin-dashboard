import axios from "axios"
import { Services } from "../../services/crud.services"


export function getLocataires() {
    return axios.get(Services.LOCATAIRE_URL)
}