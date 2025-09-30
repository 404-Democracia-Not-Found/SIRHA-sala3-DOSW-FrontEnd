import React, { useState } from 'react';
import RoleSelection from './components/RoleSelection/RoleSelection';
import StudentLogin from './components/StudentLogin/StudentLogin';
import AdminLogin from './components//AdminLogin/AdminLogin';
import PasswordRecovery from './components/PasswordRecovery/PasswordRecovery';
import StudentDashboard from './components/StudentDashboard/StudentDashboard';
import Messages from './components//Messages/Messages';
import AcademicRecords from './components/AcademicRecords/AcademicRecords';
import ClassSchedule from './components/ClassSchedule/ClassSchedule';

const App = () => {
  const [currentView, setCurrentView] = useState('role-selection');

  return (
    <div className="min-h-screen bg-gray-100">
      {currentView === 'role-selection' && <RoleSelection setCurrentView={setCurrentView} />}
      {currentView === 'student-login' && <StudentLogin setCurrentView={setCurrentView} />}
      {currentView === 'admin-login' && <AdminLogin setCurrentView={setCurrentView} />}
      {currentView === 'password-recovery' && <PasswordRecovery setCurrentView={setCurrentView} />}
      {currentView === 'student-dashboard' && <StudentDashboard setCurrentView={setCurrentView} />}
      {currentView === 'messages' && <Messages setCurrentView={setCurrentView} />}
      {currentView === 'academic-records' && <AcademicRecords setCurrentView={setCurrentView} />}
      {currentView === 'class-schedule' && <ClassSchedule setCurrentView={setCurrentView} />}
    </div>
  );
};

export default App;