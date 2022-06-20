import axios from "axios"
import { Services } from "../../services/crud.services"


export function getLocations() {
    return axios.get(Services.LOCATION_URL)
}
export function getLocationInfo(id){
    return axios.get(Services.LOCATION_URL+'/'+id)
}