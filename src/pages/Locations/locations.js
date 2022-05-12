import { v4 as uuid } from 'uuid';

export const locations =  [
  {
      "idLocation": 1,
      "dateLocation": "2022-05-11T23:29:46.060Z",
      "longitudeDepart": 0,
      "latitudeDepart": 0,
      "longitudeArrivee": 0,
      "latitudeArrivee": 0,
      "terminee": true,
      "locataire": {
          "locataireId": 73,
          "adresseLocataire": "Mon adresse, chez moilmkdmlksqmlk",
          "photo": "https://autorun-profiles.s3.eu-west-3.amazonaws.com/e0ba42175f3a612a153bde5eddfd66a6.png",
          "pieceIdentite": "https://autorun-profiles.s3.eu-west-3.amazonaws.com/e0ba42175f3a612a153bde5eddfd66a6.png"
      },
      "vehicule": {
          "idVehicule": 1,
          "marque": "Audi",
          "matricule": "56789 120 16",
          "modele": "R8",
          "couleur": "Gris",
          "verrouillee": true,
          "enService": null,
          "amVehicule": 55
      }
  }
]