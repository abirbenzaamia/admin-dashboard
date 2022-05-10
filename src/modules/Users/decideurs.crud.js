import axios from "axios"
import { Services } from "../../services/crud.services"


export function getDecideurs() {
    return axios.get(Services.DECIDEUR_URL)
}

export function getDecideurInfo(id) {
    //console.log(Services.LOCATAIRE_URL+id)
    return axios.get(Services.DECIDEUR_URL+id)
}
export function addDecideur(nom,prenom,email,num_tel,mdp) {
    const data = {
            "nom" : nom,
            "prenom" : prenom ,
            "email" : email ,
            "num_tel" : num_tel,
            "mdp" : mdp
    };
    return axios.post(Services.ADD_Decideur_URL, data)
        
}
export function modifyInfoDecideur(id,nom,prenom,email,num_tel) {
    const data = {
            "nom" : nom,
            "prenom" : prenom ,
            "email" : email ,
            "num_tel" : num_tel,
    };
    console.log(data)
    return axios.put(Services.Decideur_URL+id, data)    
}

