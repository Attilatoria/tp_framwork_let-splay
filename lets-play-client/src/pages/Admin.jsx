import React, { useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { find } from '../controllers/user';
import { deleteUserById } from '../controllers/user';

const UserTable = () => {
    const navigate = useNavigate();
    const [firstLoad, setFirstLoad] = useState(true);
    const [users, setUsers] = useState([]);
    const id = useParams();

    const handlOnUpdate = () => {
        navigate('/modify')

    }
    const fetchData = async () => {
        try {
            const response = await find();
            setUsers(response);
        } catch (error) {
            console.log("error")
        }
    }


    if (firstLoad === true) {
        setFirstLoad(false);
        fetchData();
    }
    const handleDeleteClick = async (id) => {
        try {
            console.log(await deleteUserById(id));
            alert('user deleted successfuly');

        } catch (error) {
            console.log(error)
        }
    };

    const handleLogout = () => {
        sessionStorage.clear();
        navigate('/');
    }

    return (
        <div className='container-admin'>
            <div className="btn-logout-admin">
                <button className="btnlogout-admin" onClick={handleLogout}>Logout</button>
            </div>
            <div className='tableContainer'>
                <table className='tableUser-admin'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Score</th>
                            <th>Modifier</th>
                            <th>Supprimer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td>{user.score}</td>
                                <td><button className='btn-admin' onClick={handlOnUpdate}>Modifier</button></td>
                                <td><button className='btn-admin' onClick={() => handleDeleteClick(user.id)}>Supprimer</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default UserTable;
