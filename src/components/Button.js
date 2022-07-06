import React from 'react';

const Button = ({ text, onAdd }) => {
    return (
        <button onClick={onAdd} style={{ backgroundColor: 'green', color: 'yellow' }} className="btn">
            {text}
        </button>
    );
};

export default Button;
