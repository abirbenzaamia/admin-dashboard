import axios from "axios"
import { Services } from "../../services/crud.services"


export function getAMs() {
    return axios.get(Services.AM_URL)
}

export function getAMInfo(id) {
    //console.log(Services.LOCATAIRE_URL+id)
    return axios.get(Services.AM_URL+id)
}
export function addAM(nom,prenom,email,num_tel,mdp) {
    //console.log(Services.LOCATAIRE_URL+id)
    const data = {
            "nom" : nom,
            "prenom" : prenom ,
            "email" : email ,
            "num_tel" : num_tel,
            "mdp" : mdp
    };
    console.log(data);
    return axios.post(Services.ADD_AM_URL, data)
        
}


