import axios from "axios"
import { Services } from "../../services/crud.services"


export function getATCs() {
    return axios.get(Services.ATC_URL)
}

