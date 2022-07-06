import React from 'react';
import Button from './Button';

const Header = ({ title }) => {
    const onAdd = () => {
        console.log('click!!');
    };
    console.log(title);
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button text="Add" onAdd={onAdd} />
        </header>
    );
};

export default Header;
