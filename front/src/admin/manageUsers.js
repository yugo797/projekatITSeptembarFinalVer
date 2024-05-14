
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const UserManager = ({token}) => {
    const [users, setUsers] = useState([]);
    const headers = {
        Authorization: `Bearer ${token}`,
    }

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    useEffect(() => {
        axios.get('http://localhost:7700/api/users', {headers:headers})
            .then((response) => {
                 setUsers(response.data);
        });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleEditUser = (userId) => {

    };

    const handleCreateUser = ()=>{

    }
    const handleUpdateUser = () => {

    };

    const handleDeleteUser = (userId) => {
        axios.delete(`http://localhost:7700/api/users/${userId}`, ).then(() => {
            const updatedUsers = users.filter((user) => user._id !== userId);
            setUsers(updatedUsers);
        });
    };

    return (
            <>
        {
         !token?("no"):
        (
         <>
             <div>
                 <h2>User Management</h2>

                 <h3>Create User</h3>
                 <input
                     type="text"
                     name="username"
                     placeholder="Username"
                     value={formData.username}
                     onChange={handleInputChange}
                 />
                 <input
                     type="email"
                     name="email"
                     placeholder="Email"
                     value={formData.email}
                     onChange={handleInputChange}
                 />
                 <input
                     type="password"
                     name="password"
                     placeholder="Password"
                     value={formData.password}
                     onChange={handleInputChange}
                 />
                 <button onClick={handleCreateUser}>Create</button>

                 <h3>Update User</h3>

                     <>
                         <input
                             type="text"
                             name="username"
                             value={formData.username}
                             onChange={handleInputChange}
                         />
                         <input
                             type="email"
                             name="email"
                             value={formData.email}
                             onChange={handleInputChange}
                         />
                         <input
                             type="password"
                             name="password"
                             value={formData.password}
                             onChange={handleInputChange}
                         />
                         <button onClick={handleUpdateUser}>Update</button>
                     </>

                     <p>Select a user to edit</p>


                 <h3>Users</h3>
                 <ul>
                     {users.map((user) => (
                         <li key={user._id}>
                             {user.username}
                             <button onClick={() => handleEditUser(user._id)}>Edit</button>
                             <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
                         </li>
                     ))}
                 </ul>
             </div>
         </>
        )
        }
            </>

    );
}

export default UserManager;