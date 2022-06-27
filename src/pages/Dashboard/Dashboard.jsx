import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import WelcomeBanner from '../../components/Dashboard/WelcomeBanner';
import RequestsTable from '../../components/Dashboard/Tables/Requests/RequestsTable'
import Map from '../../components/Dashboard/Map/Map'
import  { useState , useEffect } from 'react';
import { getLocataires } from '../../modules/Users/locataires.crud';
const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [locataires,setLocataires] = useState();
    useEffect(() => {
      getLocataires().then(({ data }) => {
        var acceptedLocataire = [];
        data.forEach(row => {
          if (row.Statut.val_statut==="demandé" && row.Locataire!==null) {
            acceptedLocataire.push(row);
          }
        });
        setLocataires( acceptedLocataire);
      })
      .catch(err => {
        console.log(err)
      })
    }, [])
    return ( 
      <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
  
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              {/* Welcome banner */}
              <WelcomeBanner />
            </div>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              {/* Welcome banner */}
               <Map/> 
            </div>
         
            {locataires && <RequestsTable locatairesList={locataires}/>}
  
      </main>

      </div>
      </div>
      </div>
     );
}
 
export default Dashboard;