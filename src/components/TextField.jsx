import React from 'react';

const TextField = ({ type = "text", placeholder, className, onChange, ...props }) => {
    return (
        <div>
            <input onChange={onChange} type={type} placeholder={placeholder} className={className + " border-2 border-gray-300 p-2 rounded-lg"} {...props} />
        </div>
    );
};

export default TextField;