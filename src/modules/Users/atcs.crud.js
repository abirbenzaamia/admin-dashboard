import axios from "axios"
import { Services } from "../../services/crud.services"


export function getATCs() {
    return axios.get(Services.ATC_URL)
}

export function getATCInfo(id) {
    //console.log(Services.LOCATAIRE_URL+id)
    return axios.get(Services.ATC_URL+id)
}
export function addATC(nom,prenom,email,num_tel,mdp) {
    const data = {
            "nom" : nom,
            "prenom" : prenom ,
            "email" : email ,
            "num_tel" : num_tel,
            "mdp" : mdp
    };
    console.log(data);
    return axios.post(Services.ADD_ATC_URL, data)
        
}

