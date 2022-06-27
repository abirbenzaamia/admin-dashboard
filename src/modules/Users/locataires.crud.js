import axios from "axios"
import { Services } from "../../services/crud.services"
import { fDate , fDateMonth, fDateWeek } from "../../utils/formatTime"


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

/* ------------------------------------------------------------- */
/* -------------------------Statistiques------------------------ */
export async function getNbAccepted(){
    let accepted =0 ;
    try {
       let res = await axios({
            url: Services.LOCATAIRE_URL,
            method: 'get',
            timeout: 8000,
            headers: {
                'Content-Type': 'application/json',
            }
        })   
        // Don't forget to return something   
        const array = res.data;
        console.log(array.length)
                for (let i = 0; i < array.length; i++) {
                    //console.log(array[i].Statut.val_statut);
                     if (array[i].Statut.val_statut == "accepté") {
                         accepted++;
                      }     
                }
        //console.log(pannes);
        return accepted;
    }
    catch (err) {
        console.error(err);
    }
}
export async function getNbRefused(){
    let refused =0 ;
    try {
       let res = await axios({
            url: Services.LOCATAIRE_URL,
            method: 'get',
            timeout: 8000,
            headers: {
                'Content-Type': 'application/json',
            }
        })   
        // Don't forget to return something   
        const array = res.data;
        //console.log(array)
                for (let i = 0; i < array.length; i++) {
                    //console.log(array[i].Statut.val_statut);
                     if (array[i].Statut.val_statut == "refusé") {
                         refused++;
                      }     
                }
        //console.log(pannes);
        return refused;
    }
    catch (err) {
        console.error(err);
    }
}
export async function getNbInDemand(){
    let inDemand =0 ;
    try {
       let res = await axios({
            url: Services.LOCATAIRE_URL,
            method: 'get',
            timeout: 8000,
            headers: {
                'Content-Type': 'application/json',
            }
        })   
        // Don't forget to return something   
        const array = res.data;
        //console.log(array)
                for (let i = 0; i < array.length; i++) {
                    //console.log(array[i].Statut.val_statut);
                     if (array[i].Statut.val_statut == "demandé") {
                        inDemand++;
                      }     
                }
        //console.log(pannes);
        return inDemand;
    }
    catch (err) {
        console.error(err);
    }
}
export async function getNbAcceptedPerMonth(){

    const accepted = [0,0,0,0,0,0,0,0,0,0,0,0]
    try {
       let res = await axios({
            url: Services.LOCATAIRE_URL,
            method: 'get',
            timeout: 8000,
            headers: {
                'Content-Type': 'application/json',
            }
        })  
        // Don't forget to return something   
        const array = res.data;
                for (let i = 0; i < array.length; i++) {
                    if (array[i].Statut.val_statut == "accepté") {
                        const month = parseInt(fDateMonth(array[i].updatedAt));
                        accepted[month-1]++;
                     } 
                }
        console.log(accepted);
        return accepted;
    }
    catch (err) {
        console.error(err);
    }
}
export async function getNbRefusedPerMonth(){
    const refused = [0,0,0,0,0,0,0,0,0,0,0,0]
    try {
       let res = await axios({
            url: Services.LOCATAIRE_URL,
            method: 'get',
            timeout: 8000,
            headers: {
                'Content-Type': 'application/json',
            }
        })  
        // Don't forget to return something   
        const array = res.data;
                for (let i = 0; i < array.length; i++) {
                    if (array[i].Statut.val_statut == "refusé") {
                        const month = parseInt(fDateMonth(array[i].updatedAt));
                        refused[month-1]++;
                     } 
                }
        console.log(refused);
        return refused;
    }
    catch (err) {
        console.error(err);
    }
}
export async function getNbAcceptedPerWeek(){
    var accepted = new Array(52);
    for (let i = 0; i < accepted.length; i++) {
        accepted[i] = 0;
     }

    try {
       let res = await axios({
            url: Services.LOCATAIRE_URL,
            method: 'get',
            timeout: 8000,
            headers: {
                'Content-Type': 'application/json',
            }
        })  
        // Don't forget to return something   
        const array = res.data;
                for (let i = 0; i < array.length; i++) {
                    if (array[i].Statut.val_statut == "accepté") {
                        const week = parseInt(fDateWeek(array[i].updatedAt))
                        accepted[week-1]++;
                     } 
                }
        console.log(accepted);
        return accepted;
    }
    catch (err) {
        console.error(err);
    }
}
export async function getNbRefusedPerWeek(){
    var refused = new Array(52);
    for (let i = 0; i < refused.length; i++) {
        refused[i] = 0;
     }
    try {
       let res = await axios({
            url: Services.LOCATAIRE_URL,
            method: 'get',
            timeout: 8000,
            headers: {
                'Content-Type': 'application/json',
            }
        })  
        // Don't forget to return something   
        const array = res.data;
                for (let i = 0; i < array.length; i++) {
                    if (array[i].Statut.val_statut == "refusé") {
                        const week = parseInt(fDateWeek(array[i].updatedAt))
                        refused[week-1]++;
                     } 
                }
        console.log(refused);
        return refused;
    }
    catch (err) {
        console.error(err);
    }
}
export async function getNbInscriptionPerMonth(){

    const nb = [0,0,0,0,0,0,0,0,0,0,0,0]
    try {
       let res = await axios({
            url: Services.LOCATAIRE_URL,
            method: 'get',
            timeout: 8000,
            headers: {
                'Content-Type': 'application/json',
            }
        })  
        // Don't forget to return something   
        const array = res.data;
                for (let i = 0; i < array.length; i++) {
                        const month = parseInt(fDateMonth(array[i].createdAt));
                        nb[month-1]++;
                }
        console.log(nb);
        return nb;
    }
    catch (err) {
        console.error(err);
    }
}
export async function getNbInscriptionPerWeek(){
    var nb = new Array(52);
    for (let i = 0; i < nb.length; i++) {
        nb[i] = 0;
     }
    try {
       let res = await axios({
            url: Services.LOCATAIRE_URL,
            method: 'get',
            timeout: 8000,
            headers: {
                'Content-Type': 'application/json',
            }
        })  
        // Don't forget to return something   
        const array = res.data;
                for (let i = 0; i < array.length; i++) {
                        const week = parseInt(fDateWeek(array[i].updatedAt))
                        nb[week-1]++;
                }
        console.log(nb);
        return nb;
    }
    catch (err) {
        console.error(err);
    }
}