import React, { useState } from 'react';
import TextField from '../components/TextField';
import Button from '../components/Button';
import { useAuth } from '../hooks/useAuth';

const Register = () => {
    const { register } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='flex items-center justify-center flex-col h-100vh-h-12'>
            <p className='font-bold mb-4 text-2xl'>Register</p>
            <TextField type="text" placeholder="Name" className="mb-5" onChange={(e) => setName(e.target.value)} />
            <TextField type="text" placeholder="Email" className="mb-5" onChange={(e) => setEmail(e.target.value)} />
            <TextField type="password" placeholder="Password" className="mb-5" onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={() => {
                register({
                    name,
                    email,
                    password,
                });
            }}>Register</Button>
        </div>
    );
};

export default Register;