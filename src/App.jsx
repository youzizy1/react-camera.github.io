import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Tem from './pages/Tem'
import Vedio from './pages/Vedio'
import Pic from './pages/Pic'
import Kd from './pages/Kd'
import Searchk from './pages/Searchk'
import Spmb from './pages/Tem/Spmb'


import Footer from './components/Footer'
import Header from './components/Header'


function App() {
  

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/temp" element={<Tem/>}></Route>
        <Route path="/pz" element={<Pic/>}></Route>
        {/* <Route path="/" element={<Pic/>}></Route> */}
        <Route path="/vedio" element={<Vedio/>}></Route>
        <Route path="/kd" element={<Kd/>}></Route>
        <Route path="/select" element={<Searchk/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
