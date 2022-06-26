import axios from "axios"
import { Services } from "../../services/crud.services"
import { fDate , fDateMonth, fDateWeek } from "../../utils/formatTime"
import { getIdAssociatedAM} from "../Vehicles/vehicles.crud"
//statistiques générales
export function getAllPannes() {
    return axios.get(Services.PANNE_URL)
}
export async function getDonePannes() {
    const pannes = []
    try {
       let res = await axios({
            url: Services.PANNE_URL,
            method: 'get',
            timeout: 8000,
            headers: {
                'Content-Type': 'application/json',
            }
        })   
        // Don't forget to return something   
        const array = res.data;
                for (let i = 0; i < array.length; i++) {
                 if (array[i].anomalieTraitee ===true) {
                    pannes.push(array[i]);
                 }      
                }
        //console.log(pannes);
        return pannes;
    }
    catch (err) {
        console.error(err);
    }
}
//statistiques par mois
//Toutes les pannes
export async function getAllPannesPerMonth(){
    const pannes = [0,0,0,0,0,0,0,0,0,0,0,0]
    try {
       let res = await axios({
            url: Services.PANNE_URL,
            method: 'get',
            timeout: 8000,
            headers: {
                'Content-Type': 'application/json',
            }
        })  
        // Don't forget to return something   
        const array = res.data;
                for (let i = 0; i < array.length; i++) {
                    const month = parseInt(fDateMonth(array[i].dataDeclenchement))
                 //console.log(fDateMonth(array[i].dataDeclenchement))  
                 //console.log(pannes[month-1]);
                 pannes[month-1]++;
                }
        //console.log(pannes);
        return pannes;
    }
    catch (err) {
        console.error(err);
    }
}
export async function getDonePannesPerMonth(){
    const pannes = [0,0,0,0,0,0,0,0,0,0,0,0]
    try {
       let res = await axios({
            url: Services.PANNE_URL,
            method: 'get',
            timeout: 8000,
            headers: {
                'Content-Type': 'application/json',
            }
        })  
        // Don't forget to return something   
        const array = res.data;
                for (let i = 0; i < array.length; i++) {
                    if (array[i].anomalieTraitee === true) {
                        const month = parseInt(fDateMonth(array[i].dataDeclenchement))
                        pannes[month-1]++;
                     } 
                }
        //console.log(pannes);
        return pannes;
    }
    catch (err) {
        console.error(err);
    }
}
export async function getOngoingPannesPerMonth(){
    const pannes = [0,0,0,0,0,0,0,0,0,0,0,0]
    try {
       let res = await axios({
            url: Services.PANNE_URL,
            method: 'get',
            timeout: 8000,
            headers: {
                'Content-Type': 'application/json',
            }
        })  
        // Don't forget to return something   
        const array = res.data;
                for (let i = 0; i < array.length; i++) {
                    if (array[i].anomalieTraitee === false) {
                        const month = parseInt(fDateMonth(array[i].dataDeclenchement))
                        pannes[month-1]++;
                     } 
                }
        //console.log(pannes);
        return pannes;
    }
    catch (err) {
        console.error(err);
    }
}

//statistiques par mois
//Pannes par am 
export async function getAllPannesPerMonthParAm(id){
    const pannes = [0,0,0,0,0,0,0,0,0,0,0,0]
    try {
       let res = await axios({
            url: Services.PANNE_URL,
            method: 'get',
            timeout: 8000,
            headers: {
                'Content-Type': 'application/json',
            }
        })  
        // Don't forget to return something   
        const array = res.data;
        console.log()
                for (let i = 0; i < array.length; i++) {
                    //get id vehicule 
                    const carId = array[i].vehicule.idVehicule;
                    //get the am associated 
                    const amId =  await getIdAssociatedAM(carId);  
                    if (amId == id) {
                        const month = parseInt(fDateMonth(array[i].dataDeclenchement))
                        pannes[month-1]++;
                    }
                }
                console.log(pannes);
        return pannes;
    }
    catch (err) {
        console.error(err);
    }
}
export async function getDonePannesPerMonthParAm(id){
    const pannes = [0,0,0,0,0,0,0,0,0,0,0,0]
    try {
       let res = await axios({
            url: Services.PANNE_URL,
            method: 'get',
            timeout: 8000,
            headers: {
                'Content-Type': 'application/json',
            }
        })  
        // Don't forget to return something   
        const array = res.data;
        console.log()
                for (let i = 0; i < array.length; i++) {
                    if (array[i].anomalieTraitee === true) {
                    //get id vehicule 
                    const carId = array[i].vehicule.idVehicule;
                    //get the am associated 
                    let amId =  await getIdAssociatedAM(carId);
                    if (amId == id) {
                        const month = parseInt(fDateMonth(array[i].dataDeclenchement))
                        pannes[month-1]++;
                    }
                }
            }
        return pannes;
    }
    catch (err) {
        console.error(err);
    }
}
export async function getOngoingPannesPerMonthParAm(id){
    const pannes = [0,0,0,0,0,0,0,0,0,0,0,0]
    try {
       let res = await axios({
            url: Services.PANNE_URL,
            method: 'get',
            timeout: 8000,
            headers: {
                'Content-Type': 'application/json',
            }
        })  
        // Don't forget to return something   
        const array = res.data;
                for (let i = 0; i < array.length; i++) {
                    if (array[i].anomalieTraitee === false) {
                    //get id vehicule 
                    const carId = array[i].vehicule.idVehicule;
                    //get the am associated 
                    let amId =  await getIdAssociatedAM(carId);
                    if (amId == id) {
                        const month = parseInt(fDateMonth(array[i].dataDeclenchement))
                        pannes[month-1]++;
                    }
                }
            }
        return pannes;
    }
    catch (err) {
        console.error(err);
    }
}
/*------------------------------------------------------*/
//statistiques par semaine 
//Toutes les pannes
export async function getAllPannePerWeek(){
    var pannes = new Array(52);
    for (let i = 0; i < pannes.length; i++) {
        pannes[i] = 0;
     }
    
    try {
        let res = await axios({
             url: Services.PANNE_URL,
             method: 'get',
             timeout: 8000,
             headers: {
                 'Content-Type': 'application/json',
             }
         })  
         // Don't forget to return something   
         const array = res.data;
                 for (let i = 0; i < array.length; i++) {
                    const week = parseInt(fDateWeek(array[i].dataDeclenchement))
                    pannes[week-1]++;
                 }
         console.log(pannes);
         return pannes;
     }
     catch (err) {
         console.error(err);
     }
}
export async function getDonePannePerWeek(){
    var pannes = new Array(52);
    for (let i = 0; i < pannes.length; i++) {
        pannes[i] = 0;
     }
    
    try {
        let res = await axios({
             url: Services.PANNE_URL,
             method: 'get',
             timeout: 8000,
             headers: {
                 'Content-Type': 'application/json',
             }
         })  
         // Don't forget to return something   
         const array = res.data;
                 for (let i = 0; i < array.length; i++) {
                    if (array[i].anomalieTraitee === true) {
                    const week = parseInt(fDateWeek(array[i].dataDeclenchement))
                    pannes[week-1]++;
                    }
                 }
         console.log(pannes);
         return pannes;
     }
     catch (err) {
         console.error(err);
     }
}
export async function getOngoingPannePerWeek(){
    var pannes = new Array(52);
    for (let i = 0; i < pannes.length; i++) {
        pannes[i] = 0;
     }
    
    try {
        let res = await axios({
             url: Services.PANNE_URL,
             method: 'get',
             timeout: 8000,
             headers: {
                 'Content-Type': 'application/json',
             }
         })  
         // Don't forget to return something   
         const array = res.data;
                 for (let i = 0; i < array.length; i++) {
                    if (array[i].anomalieTraitee === false) {
                    const week = parseInt(fDateWeek(array[i].dataDeclenchement))
                    pannes[week-1]++;
                    }
                 }
         console.log(pannes);
         return pannes;
     }
     catch (err) {
         console.error(err);
     }
}

/*------------------------------------------------------*/
//statistiques par semaine 
//Pannes par am

export async function getAllPannesPerWeekParAm(id){
    var pannes = new Array(52);
    for (let i = 0; i < pannes.length; i++) {
        pannes[i] = 0;
     }
    
    try {
        let res = await axios({
             url: Services.PANNE_URL,
             method: 'get',
             timeout: 8000,
             headers: {
                 'Content-Type': 'application/json',
             }
         })  
         // Don't forget to return something   
         const array = res.data;
                 for (let i = 0; i < array.length; i++) {         
                     //get id vehicule 
                     const carId = array[i].vehicule.idVehicule;
                     //get the am associated 
                     let amId =  await getIdAssociatedAM(carId);
                     if (amId == id) {
                        const week = parseInt(fDateWeek(array[i].dataDeclenchement))
                        pannes[week-1]++;
                     }
                 }
                 console.log(pannes+'hhhhhhhhh');
                          return pannes;
     }
     catch (err) {
         console.error(err);
     }
}
export async function getDonePannesPerWeekParAm(id){
    var pannes = new Array(52);
    for (let i = 0; i < pannes.length; i++) {
        pannes[i] = 0;
     }
    
    try {
        let res = await axios({
             url: Services.PANNE_URL,
             method: 'get',
             timeout: 8000,
             headers: {
                 'Content-Type': 'application/json',
             }
         })  
         // Don't forget to return something   
         const array = res.data;
                 for (let i = 0; i < array.length; i++) {
                    if (array[i].anomalieTraitee === true) {
                        const carId = array[i].vehicule.idVehicule;
                        //get the am associated 
                        let amId =  await getIdAssociatedAM(carId);
                        if (amId == id) {
                           const week = parseInt(fDateWeek(array[i].dataDeclenchement))
                           pannes[week-1]++;
                        }
                    }
                 }
         console.log(pannes+'hhhhhhhhh');
         return pannes;
     }
     catch (err) {
         console.error(err);
     }
}
export async function getOngoingPannesPerWeekParAm(id){
    var pannes = new Array(52);
    for (let i = 0; i < pannes.length; i++) {
        pannes[i] = 0;
     }
    
    try {
        let res = await axios({
             url: Services.PANNE_URL,
             method: 'get',
             timeout: 8000,
             headers: {
                 'Content-Type': 'application/json',
             }
         })  
         // Don't forget to return something   
         const array = res.data;
                 for (let i = 0; i < array.length; i++) {
                    if (array[i].anomalieTraitee === false) {
                        const carId = array[i].vehicule.idVehicule;
                        //get the am associated 
                        let amId =  await getIdAssociatedAM(carId);
                        if (amId == id) {
                           const week = parseInt(fDateWeek(array[i].dataDeclenchement))
                           pannes[week-1]++;
                        }
                    }
                 }
                 console.log(pannes+'hhhhhhhhh');
         return pannes;
     }
     catch (err) {
         console.error(err);
     }
}