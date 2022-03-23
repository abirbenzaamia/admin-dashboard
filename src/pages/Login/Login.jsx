import LogoAutoRun from '../../assets/Logos/AutoRun_logo.svg'
import Illusration from '../../assets/illusrations/illustration_login.svg';
import React, { useState } from 'react';
import { data } from 'autoprefixer';


 async function loginATC(credentials) {
   console.log(JSON.stringify(credentials));
  return fetch('https://wyerkn74ia.execute-api.eu-west-3.amazonaws.com/login/atc', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json());
 }
const Login = () => {
  //const classes = useStyles();
  const [email, setEmail] = useState();
  const [mdp, setMdp] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginATC({
      email,
      mdp
    });
    console.log(email);
    console.log(mdp);
    console.log(response);
     if ('user' in response) {
         localStorage.setItem('accessToken', response['accessToken']);
         localStorage.setItem('user', JSON.stringify(response['user']));
         window.location.href = "/dashboard";
     } else {
       console.log(response.message);
     }
  }
  
    return (         
            <>
              {}
 <div className="context flex items-center justify-center h-screen  " >
 <div className="container px-4 mx-auto">
     <div className="flex flex-wrap">
     <div className="w-full px-4 flex-1">
     <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-indigo-700">Bienvenue 👋 </h2>
                  <div>
                    <img
                      className="mx-auto h-40 w-auto"
                      src={LogoAutoRun}
                      alt="logo AutoRun"
                    />
                  </div>
                  <form className="mt-8 space-y-6" action="#" noValidate onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                      <div>
                        <label htmlFor="email-address" className="sr-only">
                        Email address
                        </label>
                        <input
                          id="email-address"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Email"
                          onChange={e => setEmail(e.target.value)}
                        />
                      </div>
                      <div>
                        <label htmlFor="password" className="sr-only">
                          Password
                        </label>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Mot de passe"
                          onChange={e => setMdp(e.target.value)}
                        />
                      </div>
                    </div>
        
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                          sauvegarder ma session
                        </label>
                      </div>
        
                    </div>
        
                    <div>
                      <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                          {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                        </span>
                       Se connecter
                      </button>
                    </div>
                  </form>
                </div>
              </div>
    </div>
    <div className="w-full px-4 flex-1">
    <img
                      className="mx-auto h-1200 w-auto"
                      src={Illusration}
                      alt="illustration"
                    />
    </div>
   
  </div>
</div>
              </div>
              
             
            </>
     );
}
 
export default Login;