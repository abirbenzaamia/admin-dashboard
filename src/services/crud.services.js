import axios from 'axios';
const URL_ROOT="https://wyerkn74ia.execute-api.eu-west-3.amazonaws.com";
const URL_ROOT1 = "https://autorun-crud.herokuapp.com"

export const Services = {
    AUTH_ATC_URL: URL_ROOT+'/login/atc',
    LOCATAIRE_URL: URL_ROOT+'/locataire/',
    ATC_URL: URL_ROOT+'/atc/',
    ADD_ATC_URL: URL_ROOT+'/atc',
    AM_URL: URL_ROOT+'/am/',
    ADD_AM_URL: URL_ROOT+'/am',
    AUTH_DECIDEUR_URL: URL_ROOT+'/login/decideur',
    DECIDEUR_URL: URL_ROOT+'/decideur/',
    ADD_DECIDEUR_URL: URL_ROOT+'/decideur',
    VEHICLE_URL:URL_ROOT1+'/vehicule',
    LOCATION_URL:URL_ROOT1+'/location',
    DEMANDE_SUPPORT_URL:URL_ROOT1+'/demande-support',
    PANNE_URL:URL_ROOT1+'/anomalie', //une panne est une anomalie
    ANOMALIE_URL: URL_ROOT1+'/anomalie'
}

export const CrudService = {
  Put,
  Get,
  Post,
  Patch,
  Delete,
  setAuthHeader,
};

/**
 * Authentification using Bearer token -JWT ex-
 * @param store to get the token of the athentified user
 * @return axios configured to use the given token for the authentication of all requests
 **/

function setAuthHeader(authToken) {
  axios.interceptors.request.use(
    (config) => {
      if (authToken) {
        config.headers.auth = authToken;
      }
      return config;
    },
    (err) => Promise.reject(err)
  );
}

/****************************************  
    * Get request to call an get endPoint
    * @param url The relative path of the service
    * @param params Query params of the get request
    * @param headers Any costum headers needed
    * @return Axios reqeust with the given configuration
****************************************/

function Get(service, url, params = {}, headers = {}) {
  return axios.get(`${service}${url}`, {
    headers: headers,
    params: params,
  });
}

/**
 * @param url The relative path of the service
 * @param data Body of the get request
 * @param headers Any costum headers needed
 * @return Axios reqeust with the given configuration
 **/

function Put(service, url, data, headers) {
  return axios.put(`${service}${url}`, data, {
    headers: headers,
  });
}
function Post(service, url, data, headers) {
  return axios.post(`${service}${url}`, data, {
    headers: headers,
  });
}
function Patch(service, url, data, headers) {
  return axios.patch(`${service}${url}`, data, {
    headers: headers,
  });
}
function Delete(service, url, data, headers) {
  var config = {
    method: "delete",
    url: `${service}${url}`,
    headers: headers,
    data: data,
  };
  return axios(config);
}