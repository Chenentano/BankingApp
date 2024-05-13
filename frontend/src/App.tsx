import { Routes, Route } from "react-router-dom";
import './App.css'

import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import Home from "./pages/Home.tsx";
import WelcomePage from "./pages/WelcomePage.tsx";

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<WelcomePage/>}/>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
    </>
  )
}

export default App
