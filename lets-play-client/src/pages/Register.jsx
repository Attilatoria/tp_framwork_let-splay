import React, { useState } from 'react'
import Input from '../component/input';
import { Link, useNavigate } from "react-router-dom";
import { findUserEmail } from '../controllers/user';
import { register } from '../controllers/auth';

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsename] = useState('');

    const handleEmailOnChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordOnChange = (e) => {
        setPassword(e.target.value);
    };
    const handleUsernameOnChange = (e) => {
        setUsename(e.target.value);
    }

    const handleSubmit = async (e, res) => {
        e.preventDefault();
        const isGood = await register(username, email, password)
        if (isGood) {
            //redirige a /user
            navigate('/users')

        } else {
            alert('please feel all the required fields')
            console.log('visuel  erreur')
        }
    }

    return (
        <div className='container'>
            <div className='form'>
                <h1><u>Inscription</u></h1>
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
                    <Input
                        placeholder="votre nom d'utilisateur"
                        type='text'
                        value={username}
                        setValue={handleUsernameOnChange}
                        id='username'
                    />
                    <br />
                    <button className='btn' type='submit'>
                        Enregistrer
                    </button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link className="btn" to='/'>Connexion</Link>

                </form><br />
            </div>
        </div>
    )
}

export default Register