import axios from "axios"
import { Services } from "../../services/crud.services"


export function getLocataires() {
    return axios.get(Services.LOCATAIRE_URL)
}

export function getLocataireInfo(id) {
    //console.log(Services.LOCATAIRE_URL+id)
    return axios.get(Services.LOCATAIRE_URL+id)
}
export function acceptLocataire(id,argument){
    console.log(id,argument);
    return axios.patch(Services.LOCATAIRE_URL+id,{ argument: argument },{ params: { status: "accepted" } })
}
export function refuseLocataire(id,argument){
    console.log(id,argument);
    return axios.patch(Services.LOCATAIRE_URL+id,{ argument: argument },{ params: { status: "refused" } })
}

