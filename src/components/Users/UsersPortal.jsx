
import Books from '../Books'
import Home from '../Home'
import Navbar from '../Navbar'
import { Route, Routes } from 'react-router'
import Users from '../user/Users'
import Contact from '../Contact'

const UsersPortal = () => {
  return (
    <>
        <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books' element={<Books />} />
      <Route path='/users' element={<Users />} />
      <Route path='/contacts' element={<Contact />} />
    </Routes>
    </>
  )
}

export default UsersPortal