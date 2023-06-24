import axios from "axios"
import { Services } from "../../services/crud.services"


export function getVehicules() {
    return axios.get(Services.VEHICLE_URL)
}
export function getVehiculeParId(id){
    return axios.get(Services.VEHICLE_URL+'/'+id);
}
export async function getVehiculesParAm(id){
    const cars = []
    try {
       let res = await axios({
            url: Services.VEHICLE_URL,
            method: 'get',
            timeout: 8000,
            headers: {
                'Content-Type': 'application/json',
            }
        })
        // Don't forget to return something
        const array = res.data;
                for (let i = 0; i < array.length; i++) {
                 if (array[i].am.amId===id) {
                    cars.push(array[i]);
                 }
                }
        //console.log(pannes);
        return cars;
    }
    catch (err) {
        console.error(err);
    }
}
export async function getIdAssociatedAM(id){
    try {
       let res = await axios({
            url: Services.VEHICLE_URL+'/'+id,
            method: 'get',
            timeout: 8000,
            headers: {
                'Content-Type': 'application/json',
            }
        })
        // Don't forget to return something
        return res.data.am.amId;      
    }
    catch (err) {
        console.error(err);
    }
}
