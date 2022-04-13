import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import WelcomeBanner from '../../components/Dashboard/WelcomeBanner';
import RequestsTable from '../../components/Dashboard/Tables/RequestsTable'
import React, { useState } from 'react';
const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return ( 
        <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              {/* Welcome banner */}
              <WelcomeBanner />
            </div>
           
            <RequestsTable />
  
      </main>

      </div>
    </div>
     );
}
 
export default Dashboard;