import React from 'react';
import { useState, useEffect }  from 'react';
import { getLocataires} from '../../../modules/Users/users.crud'

//const access_token  = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhVmFsdWVzIjp7ImlkIjoxMCwibm9tIjoiQWRtaW4iLCJwcmVub20iOiJBZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwibnVtX3RlbCI6IjA1NTgzOTQ1NjUiLCJtZHAiOiIzNzM4ODIxNzFlMzY5ZGVmY2JjNGNjODAxMjk4Zjc5YTgzMDI4ZDJmOTgxMDhjMzEyYzkwNmJhY2Y1ZGRjOTQ2IiwidHlwZV91dGlsaXNhdGV1ciI6ImF0YyIsInN0YXR1dF91dGlsaXNhdGV1ciI6MywiY3JlYXRlZEF0IjoiMjAyMi0wMy0yMlQyMzoxMDoyOS44OTZaIiwidXBkYXRlZEF0IjoiMjAyMi0wMy0yM1QwMToxMDoyOS4zNjNaIn0sIl9wcmV2aW91c0RhdGFWYWx1ZXMiOnsiaWQiOjEwLCJub20iOiJBZG1pbiIsInByZW5vbSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJudW1fdGVsIjoiMDU1ODM5NDU2NSIsIm1kcCI6IjM3Mzg4MjE3MWUzNjlkZWZjYmM0Y2M4MDEyOThmNzlhODMwMjhkMmY5ODEwOGMzMTJjOTA2YmFjZjVkZGM5NDYiLCJ0eXBlX3V0aWxpc2F0ZXVyIjoiYXRjIiwic3RhdHV0X3V0aWxpc2F0ZXVyIjozLCJjcmVhdGVkQXQiOiIyMDIyLTAzLTIyVDIzOjEwOjI5Ljg5NloiLCJ1cGRhdGVkQXQiOiIyMDIyLTAzLTIzVDAxOjEwOjI5LjM2M1oifSwidW5pcW5vIjoxLCJfY2hhbmdlZCI6e30sIl9vcHRpb25zIjp7ImlzTmV3UmVjb3JkIjpmYWxzZSwiX3NjaGVtYSI6bnVsbCwiX3NjaGVtYURlbGltaXRlciI6IiIsInJhdyI6dHJ1ZSwiYXR0cmlidXRlcyI6WyJpZCIsIm5vbSIsInByZW5vbSIsImVtYWlsIiwibnVtX3RlbCIsIm1kcCIsInR5cGVfdXRpbGlzYXRldXIiLCJzdGF0dXRfdXRpbGlzYXRldXIiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiXX0sImlzTmV3UmVjb3JkIjpmYWxzZSwiaWF0IjoxNjQ4MDU3Njk5LCJleHAiOjE2NDgwNjg0OTksImF1ZCI6ImF0YyJ9.DzxHdTkdrMHlAvcPP5wCjsBAwW8Pk6aAqSMdqruriR0" ;
// async function getlocataireatairesRequests() {
//    return fetch('https://wyerkn74ia.execute-api.eu-west-3.amazonaws.com/locataireataire/', {
//      method: 'GET',
//      headers: {
//      }
//    })
//      .then(data => data.json());
//   }
function RequestsTable() {
    const [locataireataires, setlocataireataires] = useState([])
    useEffect(() => {
        getLocataires().then(({ data }) => {
          console.log(data)
          setlocataireataires(data)
        })
        .catch(err => {
          console.log(err)
        })
      }, [])
    
  

  return (
      <>
          <div className="col-span-full  bg-white shadow-lg rounded-sm border border-slate-200">
          <header className="px-5 py-4 border-b border-slate-100">
              <h2 className="font-semibold text-slate-800">Demandes d'inscription des locataireataires</h2>
          </header>
          <div className="p-10">

              {/* Table */}
              <div className="overflow-x-auto">
                  <table className="table-auto w-full">
                      {/* Table header */}
                      <thead className="text-xs font-semibold uppercase text-slate-400 bg-slate-50">
                          <tr>
                              <th className="p-2 whitespace-nowrap">
                                  <div className="font-semibold text-left">ID</div>
                              </th>
                              <th className="p-2 whitespace-nowrap">
                                  <div className="font-semibold text-left">IMAGE</div>
                              </th>
                              <th className="p-2 whitespace-nowrap">
                                  <div className="font-semibold text-left">NOM</div>
                              </th>
                              <th className="p-2 whitespace-nowrap">
                                  <div className="font-semibold text-left">PRÉNOM</div>
                              </th>
                              <th className="p-2 whitespace-nowrap">
                                  <div className="font-semibold text-center">EMAIL</div>
                              </th>
                              <th className="p-2 whitespace-nowrap">
                                  <div className="font-semibold text-center">TELEPHONE</div>
                              </th>
                           
                          </tr>
                      </thead>
                      {/* Table body */}
                      <tbody className="text-sm divide-y divide-slate-100">
                          {locataireataires.map(locataire => {
                              return (
                                  <tr key={locataire.id}>
                                      <td className="p-2 whitespace-nowrap">
                                          <div className="text-left">{locataire.id}</div>
                                      </td>
                                      <td className="p-2 whitespace-nowrap">
                                          <div className="flex items-center">
                                              <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                                                  <img className="rounded-full" src={locataire.image} width="40" height="40" alt={locataire.name} />
                                              </div>
                                              
                                          </div>
                                      </td>
                                      <td className="p-2 whitespace-nowrap">
                                          <div className="text-left">{locataire.nom}</div>
                                      </td>
                                      <td className="p-2 whitespace-nowrap">
                                          <div className="text-left">{locataire.prenom}</div>
                                      </td>
                                      <td className="p-2 whitespace-nowrap">
                                          <div className="text-left">{locataire.email}</div>
                                      </td>
                                      <td className="p-2 whitespace-nowrap">
                                          <div className="text-left font-medium text-green-500">{locataire.num_tel}</div>
                                      </td>
                                      <td className="p-2 whitespace-nowrap">
                                          <div className="text-lg text-center">{}</div>
                                      </td>
                                  </tr>
                              );
                          })}
                      </tbody>
                  </table>

              </div>

          </div>
      </div></>
  );
}

export default RequestsTable ;
