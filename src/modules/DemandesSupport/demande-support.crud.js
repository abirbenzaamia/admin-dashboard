import axios from "axios"
import { Services } from "../../services/crud.services"


export function getDemandesSupport() {
    return axios.get(Services.DEMANDE_SUPPORT_URL)
}
