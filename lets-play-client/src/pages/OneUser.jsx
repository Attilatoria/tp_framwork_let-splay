import React, { useState, useEffect } from 'react'
import Input from '../component/input';
import { Link, useNavigate, useParams } from "react-router-dom";
import { findById } from '../controllers/user';

const OneUser = async () => {
    const id = useParams();
    const [isLoad, setLoad] = useState(true);
    const navigate = useNavigate();

    const [user, setUser] = useState([]);



    const onView = async () => {
        try {
            console.log(id)
            setUser(await findById(id));

            console.log('');
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        if (isLoad) {
            onView();
            setLoad(false);
        }
    }, []);


    return (
        <div className='container'>

        </div>
    )
}

export default OneUser