import React, { useState } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import { findme, deleteMe } from '../controllers/me';

const UserProfile = () => {

    const [me, setMe] = useState([]);
    const [isload, setLoad] = useState(true);
    const nav = useNavigate();


    const handleViewUserProfile = async () => {
        try {
            const mes = await findme();

            setMe(mes)
            console.log(mes);
        } catch (error) {
            console.log(error);
        }
    };

    const handleModifyUserProfile = () => {

    };

    const handleDeleteUser = async () => {
        try {
            nav('../')
            console.log(await deleteMe());

        } catch (error) {
            console.log(error)
        }
    };

    if (isload) {
        handleViewUserProfile();
        setLoad(false);
    }

    return (
        <div>

            <div className="card-me">
                <h2>Utilisateur</h2>
                <div className="card">
                    <div className="card-body">
                        <h4>Username : </h4>
                        <h5 className="card-title">{me.username}</h5>
                        <h4>Email : </h4>
                        <p className="card-text">{me.email}</p>
                        <h4>Score : </h4>
                        <p className="card-text">{me.score}</p>
                        <button onClick={handleDeleteUser} className="btn btn-back">Supprimer</button>
                    </div>
                </div>
            </div>
            <Link className="btn-back-user" to='/users'>Back to the users list</Link>

        </div>
    );
};

export default UserProfile;
