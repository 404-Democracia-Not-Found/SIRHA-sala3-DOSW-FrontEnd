import React, { useState } from 'react';
import RoleSelection from './components/RoleSelection';
import StudentLogin from './components/StudentLogin';
import AdminLogin from './components/AdminLogin';
import PasswordRecovery from './components/PasswordRecovery';


const App = () => {
  const [currentView, setCurrentView] = useState('role-selection');

  return (
    <div className="min-h-screen bg-gray-100">
      {currentView === 'role-selection' && <RoleSelection setCurrentView={setCurrentView} />}
      {currentView === 'student-login' && <StudentLogin setCurrentView={setCurrentView} />}
      {currentView === 'admin-login' && <AdminLogin setCurrentView={setCurrentView} />}
      {currentView === 'password-recovery' && <PasswordRecovery setCurrentView={setCurrentView} />}
    </div>
  );
};

export default App;