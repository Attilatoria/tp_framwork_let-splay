import React from 'react';

const Input = (props) => {
    const showAlert = () => {
        return <div className='input-error'>Ceci est une erreur</div>
    }

    return (
        <div>
            <input
                type={props.type}
                placeholder={props.placeholder}
                className='input-form'
                value={props.value}
                onChange={props.setValue}
            />
        </div>
    );
};

export default Input;
