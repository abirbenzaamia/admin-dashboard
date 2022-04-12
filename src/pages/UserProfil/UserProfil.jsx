import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import React, { useState } from 'react';
import AccountProfileDetails  from '../../components/UserProfile/UserProfileDetails';
const UserProfil = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    return ( 
        <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main>
          
  <AccountProfileDetails />
      </main>

      </div>
    </div>
     );
}
 
export default UserProfil;