import { useState, lazy} from 'react'
import { Routes, Route, Link,Navigate } from 'react-router-dom'  

import Tem from '../pages/Tem'
// const Tem => import('../pages/Tem')
const Vedio = lazy(() => import('../pages/Vedio'))
const Pic = lazy(() => import('../pages/Pic'))
const Kd = lazy(() => import('../pages/Kd'))
const Searchk = lazy(() => import('../pages/Searchk'))
const Tpmb = lazy(() => import('../pages/Tem/Tpmb'))
const Spmb= lazy(() => import('../pages/Tem/Spmb'))
const Login = lazy(() => import('../components/Login'))
const Shop = lazy(() => import('../components/Shop'))  
const Geren = lazy(() => import('../components/Geren'))
// const Shopstar = lazy(() => import('../components/Shop/Shopstar'))
const Tpmbdetail = lazy(() => import('../pages/Tem/Tpmbdetail'))
const Spmbdetail = lazy(() => import('@/pages/Tem/Spmbdetail'))

// import Spmb from '../pages/Tem/Spmb'  

const RouteConfig =() =>{
    return (
        <Routes>
        <Route path="/" element={<Navigate to ='/temp'/>} />
        <Route path="/temp" element={<Tem/>}>
           {/* 二级路由  */}   
            <Route path="/temp/tpmb" element={<Tpmb/>}></Route>
            <Route path="/temp/spmb" element={<Spmb/>}></Route>
        </Route>
        <Route path="/pz" element={<Pic/>}></Route>
        <Route path="/vedio" element={<Vedio/>}></Route>
        <Route path="/kd" element={<Kd/>}></Route>
        <Route path="/select" element={<Searchk/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/geren" element={<Geren/>} />
        <Route path="/shop" element={<Shop/>} >
            {/* 二级路由 */}
            {/* <Route path="/shop/star" element={<Shopstar/>} />
            <Route path="/shop/tuijian" element={<Shopstar/>} />
            <Route path="/shop/vip" element={<Shopstar/>} />
            <Route path="/shop/fugu" element={<Shopstar/>} />
            <Route path="/shop/plog" element={<Shopstar/>} />
            <Route path="/shop/fes" element={<Shopstar/>} />
            <Route path="/shop/zazhi" element={<Shopstar/>} /> */}
        </Route>
        <Route path="/tpmbdetail/:id" element={<Tpmbdetail/>} />
        <Route path="/spmbdetail/:id" element={<Spmbdetail/>} />
      </Routes>
    )
}

export default RouteConfig