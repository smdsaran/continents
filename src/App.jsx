import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/Login'
import Home from './components/pages/Home';
import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
