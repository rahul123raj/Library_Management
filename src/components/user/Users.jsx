import axios from "axios";
import { useEffect, useState } from "react";
import '../../assets/style/users.css';
import { useLocation } from "react-router";

const Users = () => {
  let location = useLocation()
  let path = location.pathname
  let bool = path.startsWith('/adminportal')

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/users')
      .then((resp) => {
        setUsers(resp.data);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleDelete = (index) => {
    const userToDelete = users[index];

    fetch(`http://localhost:4000/users/${userToDelete.id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          alert("Item deleted successfully");
          // Update the state to remove the deleted item from the UI
          setUsers(users.filter((_, i) => i !== index));
        } else {
          alert("Failed to delete the item");
        }
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="users-data">
      <table>
        <thead>

          {
            bool ?
            <tr>
            <th>Sr.no</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Password</th>
            <th>DOB</th>
            <th>Age</th>
            <th>Place</th>
            <th>Delete</th>
          </tr>
            :
            <tr>
            <th>Sr.no</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Contact</th>
            {/* <th>Email</th> */}
            {/* <th>Password</th> */}
            {/* <th>DOB</th> */}
            <th>Age</th>
            <th>Place</th>
            {/* <th>Delete</th> */}
          </tr>
          }
          
        </thead>
        <tbody>
          {
            users.map((elem, index) => {
              const { fname, lname, contact, email, password, dob, place } = elem;

              const calculateAge = () => {
                const dateobj = new Date();
                return dateobj.getFullYear() - Number(dob.slice(0, 4));
              };

              const age = calculateAge();
              return (
                <>
                  {
                    bool ?
                    <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{fname}</td>
                    <td>{lname}</td>
                    <td>{contact}</td>
                    <td>{email}</td>
                    <td>{password}</td>
                    <td>{dob}</td>
                    <td>{age}</td>
                    <td>{place}</td>
                    <td>
                      <button onClick={() => handleDelete(index)}>Delete</button>
                    </td>
                  </tr>
                     :
                    <tr>
                     <td>{index + 1}</td>
                    <td>{fname}</td>
                    <td>{lname}</td>
                    <td>{contact}</td>
                    {/* <td>{email}</td> */}
                    {/* <td>{password}</td> */}
                    {/* <td>{dob}</td> */}
                    <td>{age}</td>
                    <td>{place}</td>
                    </tr>
                     
                  }
                </>
                
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default Users;
