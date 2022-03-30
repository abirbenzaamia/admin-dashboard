import axios from "axios";
import { authUrls } from "./auth.constants";
export function loginATC(email, mdp) {
  return axios.post(authUrls.LOGIN_ATC_URL, { email, mdp });
}
