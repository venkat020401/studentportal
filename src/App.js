import "./App.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./sbadmin.css";
import TeachersDashboard from "./TeachersDashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentList from "./StudentList";
import Login from "./Login";
import Portal from "./Portal";
import CreateUser from "./CreateStudent";
import Createaccount from "./Createaccount";
import Studentview from "./StudentView";
import StudentEdit from "./StudentEdit";
import StudentDaseboard from "./StudentDaseboard";
import ViewScore from "./ViewScore";
import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";

function App() {

  const [isVisible, setVisible] = useState(true);

  useEffect(() => {

    const data = window.localStorage.getItem('visible');
    if (data !== null) setVisible(JSON.parse(data))

  }, []);

  useEffect(() => {

    window.localStorage.setItem('visible', JSON.stringify(isVisible));

  }, [isVisible]);

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Login setVisible={setVisible} />} />
        <Route path="create-account" element={<Createaccount />} />
        <Route path="/portal" element={<Portal isVisible={isVisible} />}>
          <Route path="dashboard" element={<Dashboard isVisible={isVisible} />} />
          <Route path="teachers-dashboard" element={<TeachersDashboard />} />
          <Route path="student-dashboard" element={<StudentDaseboard />} />
          <Route path="student-list" element={<StudentList isVisible={isVisible} />} />
          <Route path="create-user" element={<CreateUser />} />
          <Route path="student-view/:id" element={<Studentview isVisible={isVisible} />} />
          <Route path="student-edit/:userid" element={<StudentEdit />} />
          <Route path="view-score/:userid" element={<ViewScore isVisible={isVisible} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
