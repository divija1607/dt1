import { useState, useEffect } from "react"
import Loader from "./components/Loader"
import DroneTaxi from "./components/DroneTaxi";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import "./App.css";
import Labs from "./components/Labs"
import StudentLife from "./components/StudentLife"
import Chatbot from "./components/Chatbot"
import TransportationPod from "./components/TransportationPod";

import { Routes, Route } from "react-router-dom"

function App() {

  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])

  if(loading){
    return <Loader/>
  }

  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/labs" element={<Labs/>}/>
        <Route path="/life" element={<StudentLife/>}/>
        <Route path="/drone" element={<DroneTaxi />} />
        <Route path="/pod" element={<TransportationPod />} />
      </Routes>

      <Chatbot/>
    </>
  )
}

export default App

