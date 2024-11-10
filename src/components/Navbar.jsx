
import '../assets/style/navbar.css'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
  let location = useLocation()
  let path = location.pathname
  let bool = path.startsWith('/adminportal')

  return (
    <>
    <div className="navbar">
        <div className="logo">logo</div>
        <div className="links">
          {
                      bool 
                      ? 
                      <ul>
                        <li><NavLink to="/adminportal/">home</NavLink></li>
                        <li><NavLink to="/adminportal/books">books</NavLink></li>
                        <li><NavLink to="/adminportal/addbooks">add books</NavLink></li>
                        <li><NavLink to="/adminportal/users">users</NavLink></li>
                        <li><NavLink to="/adminportal/addusers">add users</NavLink></li>
                        <li><NavLink to="/adminportal/contacts">contact</NavLink></li>
                        <li><NavLink to="/">logout</NavLink></li>
                    </ul>
                    
                      :
            
                      <ul>
                      <li><NavLink to="/usersportal/">home</NavLink></li>
                      <li><NavLink to="/usersportal/books">books</NavLink></li>
                      <li><NavLink to="/usersportal/users">users</NavLink></li>
                      <li><NavLink to="/usersportal/contacts">contact</NavLink></li>
                      <li><NavLink to="/">logout</NavLink></li>
                      </ul>
          }
        
        </div>
    </div>
    </>
  )
}

export default Navbar