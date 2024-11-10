// import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Landingpage from './components/Landingpage'
import './assets/style/landingpage.css'
import AdminPortal from './components/Admin/AdminPortal'
import UsersPortal from './components/Users/UsersPortal'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Landingpage />} path='/'></Route>
          <Route element={<AdminPortal />} path='/adminportal/*'></Route>
          <Route element={<UsersPortal />} path='/usersportal/*'></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App