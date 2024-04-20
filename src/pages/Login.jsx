import React, { useState } from 'react';
import TextField from '../components/TextField';
import Button from '../components/Button';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (email, password) => {
        console.log(email, password);
    };
    return (
        <div className='flex items-center justify-center flex-col h-100vh-h-12'>
            <p className='font-bold mb-4 text-2xl'>Login</p>
            <TextField type="text" placeholder="Email" className="mb-5" onChange={(e) => setEmail(e.target.value)} />
            <TextField type="password" placeholder="Password" className="mb-5" onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={() => { handleSubmit(email, password); }}>Login</Button>
        </div>
    );
};

export default Login;