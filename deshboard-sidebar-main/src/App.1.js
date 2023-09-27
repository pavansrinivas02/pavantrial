import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Attendance from './pages/Attendance.jsx';
import Timesheet from './pages/Timesheet.jsx';
import Task from './pages/Task.jsx';
import Approval from './pages/Approval.jsx';
import Payroll from './pages/Payroll.jsx';
import Profilesetting from './pages/Profilesetting.jsx';

export const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Attendance" element={<Attendance />} />
          <Route path="/Task" element={<Task />} />
          <Route path="/Timesheet" element={<Timesheet />} />
          <Route path="/Approval" element={<Approval />} />
          <Route path="/Payroll" element={<Payroll />} />
          <Route path="/Profilesetting" element={< Profilesetting/>} />

        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};
