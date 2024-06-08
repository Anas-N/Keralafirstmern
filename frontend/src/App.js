import React from 'react'
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contactus from './components/Contactus'
import Register from './components/Register'
import Footer from './components/Footer'





import './style/Style.css'

const App = () => {
  return (
    <>
    <Router>
 <Navbar />
 
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Contactus" element={<Contactus/>}/>
      <Route path="/Register" element={<Register/>}/>
      
    </Routes>
    <Footer/>
   </Router>
    
    </>
  )
}

export default App

