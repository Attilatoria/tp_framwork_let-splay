import React, { useState } from 'react';

const Game = () => {
    const [nombre, setNombre] = useState(0);
    const [userScore, setUserScore] = useState(0);

    const addNumber = () => {
        setNombre(nombre + 1);
        document.getElementById('Result').innerHTML = nombre + 1;
        updateScore(nombre + 1);
    };

    const removeNumber = () => {
        setNombre(nombre - 1);
        document.getElementById('Result').innerHTML = nombre - 1;
        updateScore(nombre - 1);
    };

    const resetNumber = () => {
        setNombre(0);
        document.getElementById('Result').innerHTML = '0';
    };

    const updateScore = (currentScore) => {
        setUserScore(currentScore);
    };

    return (
        <div className='container'>
            <p><a href="/users" className='btn-me'>Back to the users table</a></p>
            <div className='container-game'>
                <p id='Result'>Ici sera afficher le resultat</p>

                <button id='btn-moins' onClick={removeNumber}>-</button>
                <button id='btn-plus' onClick={addNumber}>+</button>
                <button id='btn-reset' onClick={resetNumber}>Reset</button>
            </div>
        </div>
    );
};

export default Game;
