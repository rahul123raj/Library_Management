
import Navbar from '../Navbar'
import { Route, Routes } from 'react-router'
import Home from '../Home'
import Books from '../Books'
import ReadBooks from '../ReadBooks'
import AddBooks from './AddBooks'
import Users from '../user/Users'
import AddUsers from '../user/AddUsers'
import Contact from '../Contact'

const AdminPortal = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/books' element={<Books />}></Route>
      <Route path='/readbook/:id' element={<ReadBooks />} />
      <Route path='/addbooks' element={<AddBooks />} />
      <Route path='/addusers' element={<AddUsers />} />
      <Route path='/users' element={<Users />} />
      <Route path='/contacts' element={<Contact />} />
    </Routes>
    </>
  )
}



export default AdminPortal