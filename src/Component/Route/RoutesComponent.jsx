import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Entry from '../Entry/Entry'
import Report from '../Report/Report'

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/entry' element={<Entry/>}/>
      <Route path='/report' element={<Report/>}/>
    </Routes>
  )
}

export default RoutesComponent