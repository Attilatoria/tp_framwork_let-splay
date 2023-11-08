import React, { useState } from 'react';
import Input from '../component/input';
import { Link, useNavigate } from "react-router-dom";
import { login } from '../controllers/auth';


const App = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isadmin, setAdmin] = useState()

    const nav = useNavigate();

    const handleEmailOnChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordOnChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(email, password);
            setAdmin(sessionStorage.getItem('isAdmin'))
            console.log(response)
            if (response) {
                nav('./admin');
            } else if (response == false) {
                nav('./users');
            }
            if (response === null) {
                alert('probleme de connexion');
            }

        } catch (error) {
            console.error('Error logging in:', error);
        }
    };





    return (
        <div className='container'>
            <div className='form'>
                <h1><u>Bienvenue</u></h1>
                <form action="#" onSubmit={handleSubmit}>
                    <Input
                        placeholder='votre couriel'
                        type='text'
                        value={email}
                        setValue={handleEmailOnChange}
                        id='email'
                    />
                    <br />
                    <Input
                        placeholder='votre mot de passe'
                        type='password'
                        value={password}
                        setValue={handlePasswordOnChange}
                        id='password'
                    />
                    <br />
                    <button className='btn' type='submit'>
                        Connexion
                    </button>&nbsp;&nbsp;&nbsp;&nbsp;


                    <Link className="btn" to='/auth-register'>Inscription</Link>
                </form><br />
            </div>
        </div>
    );
};

export default App;
