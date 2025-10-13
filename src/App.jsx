import React, { useState } from 'react';
import RoleSelection from './components/RoleSelection/RoleSelection';
import StudentLogin from './components/StudentLogin/StudentLogin';
import AdminLogin from './components//AdminLogin/AdminLogin';
import PasswordRecovery from './components/PasswordRecovery/PasswordRecovery';
import StudentDashboard from './components/StudentDashboard/StudentDashboard';
import Messages from './components//Messages/Messages';
import AcademicRecords from './components/AcademicRecords/AcademicRecords';
import ClassSchedule from './components/ClassSchedule/ClassSchedule';
import ProfessorDashboard from './components/Professor/ProfessorDashboard/ProfessorDashboard';
import MessagesProfessor from './components/Professor/MessagesProfessor/MessagesProfessor';
import ClassesRecords from './components/Professor/ClassesRecords/ClassesRecords';
import Schedule from './components/Schedule/Schedule';
import ProfessorUser from './components/Professor/ProfessorUser/ProfessorUser';
import ClassManagementProfessor from './components/Professor/ClassManagementProfessor/ClassManagementProfessor';

import StudentUser from './components/Student/StudentUser/StudentUser';
import ClassManagement from './components/Student/ClassManagement/ClassManagement';

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
      {currentView === 'professor-dashboard' && <ProfessorDashboard setCurrentView={setCurrentView} />}
      {currentView === 'messages-professor' && <MessagesProfessor setCurrentView={setCurrentView} />}
      {currentView === 'classes-records' && <ClassesRecords setCurrentView={setCurrentView} />}
      {currentView === 'schedule' && <Schedule setCurrentView={setCurrentView} />}
      {currentView === 'professor-user' && <ProfessorUser setCurrentView={setCurrentView} />}
      {currentView === 'class-management-professor' && <ClassManagementProfessor setCurrentView={setCurrentView} />}
      {currentView === 'student-user' && <StudentUser setCurrentView={setCurrentView} />}
      {currentView === 'class-management' && <ClassManagement setCurrentView={setCurrentView} />}
    </div>
  );
};

export default App;