import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast";
import LandingPage from "./pages/LandingPage"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import Dashboard from "./pages/Dashboard"
import EditResume from "./components/EditResume"
import UserProvider from './context/userContext';
import About from './pages/aboutus';
import Forgot from './pages/Forgot';
const App = () => {
  return (
    <UserProvider>
      <div>
        <Routes>
          {/* Default Route */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/about" element={<About/>} />
          <Route path="/resume/:resumeId" element={<EditResume />} />
          <Route path="/forgot" element={<Forgot />} />
        </Routes>
      </div>
      <Toaster toastOptions={{
        className: "",
        style: {
          fontSize: "13px"
        },
      }}>
      </Toaster>
    </UserProvider>
  )
}

export default App
