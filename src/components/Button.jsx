import React from 'react';

const Button = ({ children, className, onClick, ...props }) => {
    return (
        <button onClick={onClick} className={className + ' bg-primary hover:bg-opacity-80 transition duration-150 text-background py-2 px-4 rounded'} {...props}>
            {children}
        </button>
    );
};

export default Button;