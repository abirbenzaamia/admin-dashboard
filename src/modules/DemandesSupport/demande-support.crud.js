import axios from "axios"
import { Services } from "../../services/crud.services"


export function getDemandesSupport() {
    return axios.get(Services.DEMANDE_SUPPORT_URL)
}
export function repondreDemandeSupport(id,message){
    return axios.patch(Services.DEMANDE_SUPPORT_URL+'/'+id,{ contenuReponse: message })
}
