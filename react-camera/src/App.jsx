import React,{ useState ,Suspense } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import RouteConfig from './routes'


function App() {
  

  return (
    <div className="App">
      <Header/>
      <Suspense fallback={<div>loading...</div>}>
      <RouteConfig/>
      </Suspense>
      <Footer/>
    </div>
  )
}

export default App
