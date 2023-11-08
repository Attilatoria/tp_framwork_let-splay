import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { find } from "../controllers/user";


const UserTable = () => {

    const navigate = useNavigate();
    const [firstLoad, setFirstLoad] = useState(true);
    const [users, setUsers] = useState([]);

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




    const GoToGame = () => {
        navigate('/game');
    }
    const handleLogout = () => {
        sessionStorage.clear();
        navigate('/');
    }

    return (
        <div className='container'>
            <div className='btn-jouer'>
                <button className="btnjouer" onClick={GoToGame}>JOUER</button>
            </div>
            <div className="btn-logout">
                <button className="btnlogout" onClick={handleLogout}>Logout</button>
            </div>
            <Link className="btn-me" to='/me'>My info's</Link>

            <table className='tableUser-user'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(
                            user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.email}</td>
                                    <td>{user.username}</td>
                                    <td>{user.score}</td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>


        </div>
    );
};

export default UserTable;
