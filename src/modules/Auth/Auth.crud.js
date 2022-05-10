import axios from "axios";
import { authUrls } from "./Auth.constants";



export function loginATC(email,mdp) {
  const data = {
      "email" : email ,
      "mdp" : mdp
};
console.log(data);
return axios.post(authUrls.LOGIN_ATC_URL, data)
}
export function loginDecideur(email,mdp) {
  const data = {
      "email" : email ,
      "mdp" : mdp
};
console.log(data);
return axios.post(authUrls.LOGIN_DECIDEUR_URL, data)
}