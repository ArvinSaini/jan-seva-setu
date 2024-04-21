import React, { useState } from 'react';
import TextField from '../components/TextField';
import Button from '../components/Button';
import { useAuth } from '../hooks/useAuth';

const Donate = () => {
    const [phone, setPhone] = useState('');
    const [pickupAddress, setPickupAddress] = useState('');
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');
    const [pickupDateAndTime, setPickupDateAndTime] = useState();
    const { donate } = useAuth();
    return (
        <div className='flex items-center justify-center flex-col h-100vh-h-12'>
            <p className='font-bold text-2xl'>Donate us</p>
            <p className=''>Please donate us to help the people in need.</p>
            <p className=''>You can donate us books, toys, clothes or any item by filling this form below or donate money by simply scanning the QR code below.</p>
            <div className='flex items-center justify-between w-2/3 m-4 bg-white rounded-2xl border p-12'>
                <div>
                    <form id="donateform" className='grid grid-cols-2 gap-2 items-center justify-center flex-col'>
                        <TextField type="text" placeholder="Phone" className="mb-5" onChange={(e) => setPhone(e.target.value)} />
                        <TextField type="text" placeholder="Pickup Address" className="mb-5" onChange={(e) => setPickupAddress(e.target.value)} />
                        <TextField type="text" placeholder="Item" className="mb-5" onChange={(e) => setItem(e.target.value)} />
                        <TextField type="text" placeholder="Quantity" className="mb-5" onChange={(e) => setQuantity(e.target.value)} />
                        <TextField type="text" placeholder="Description" className="mb-5" onChange={(e) => setDescription(e.target.value)} />
                        <TextField type="datetime-local" placeholder="Pickup Date and Time" className="mb-5" onChange={(e) => setPickupDateAndTime(e.target.value)} />

                    </form>
                    <Button onClick={() => {
                        donate({
                            phone,
                            pickupAddress,
                            item,
                            quantity,
                            description,
                            pickupDateAndTime
                        });
                        document.getElementById('donateform').reset();
                    }}>Donate</Button>
                    <p className='text-center text-secondary'>We will send our donation team to pick up items to be donated from your home or workplace.</p>
                </div>

                <div className='w-[3px] m-12 h-full bg-slate-400 rounded-3xl'></div>
                <div className='flex items-center justify-center flex-col'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Rickrolling_QR_code.png" alt="QR code" />
                    <p className='text-center text-secondary'>Scan this QR code to donate money.</p>
                </div>
            </div>
        </div >
    );
};

export default Donate;