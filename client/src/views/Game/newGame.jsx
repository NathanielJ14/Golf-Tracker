import React from 'react';
import Navbar from '../../components/navbar';
import NewGameForm from '../../components/createNewForm';

const NewGame = () => {
    return (
        <>
            <Navbar />
            <NewGameForm />
        </>
    );
};

export default NewGame;