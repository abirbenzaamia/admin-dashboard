import React from "react"
import {act ,screen, render, cleanup,waitForElement,waitFor} from '@testing-library/react'
import AMPProfile from './ATCProfileDetails'
import {BrowserRouter} from 'react-router-dom'
const user =[
  {  createdAt: "2022-04-13T22:01:11.087Z",
    email: "zlatan@gmail.com",
    id: 51,
    mdp: "eae02d00f909ce62035fe38b7d53f3b1961ecaf78166052afab46696f3e03505",
    nom: "Zlatan",
    num_tel: "0441939065",
    prenom: "Ibrahimovich",
    statut_utilisateur: null,
    type_utilisateur: "am",
    updatedAt: "2022-04-13T22:01:11.087Z"}];

it("displays the trending gifs received from Giphy API",  () => {
     
    const { getByAltText } = render(<AMPProfile user={user[0]}></AMPProfile>)
    

     //expect(screen.getByText(user[0].email)).toBeInTheDocument();
     //expect(screen.getByText(user[0].num_tel)).toBeInTheDocument();
    
     expect(screen.getByDisplayValue(user[0].nom)).toBeInTheDocument();
     expect(screen.getByDisplayValue(user[0].prenom)).toBeInTheDocument();
     
}
);