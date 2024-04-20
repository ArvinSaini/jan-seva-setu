import React from 'react';
import TextField from '../components/TextField';
import Button from '../components/Button';

const Donate = () => {
    return (
        <div className='flex items-center justify-center flex-col h-100vh-h-12'>
            <p className='font-bold text-2xl'>Donate us</p>
            <p className=''>Please donate us to help the people in need.</p>
            <p className=''>You can donate us books, toys, clothes or any item by filling this form below or donate money by simply scanning the QR code below.</p>
            <div className='flex items-center justify-between w-2/3 m-4 bg-white rounded-2xl border p-12'>
                <div>
                    <form className='grid grid-cols-2 gap-2 items-center justify-center flex-col'>
                        <TextField type="text" placeholder="Name" className="mb-5" />
                        <TextField type="tel" placeholder="Phone" className="mb-5" />
                        <TextField type="text" placeholder="Pickup Address" className="mb-5" />
                        <TextField type="text" placeholder="Item" className="mb-5" />
                        <TextField type="number" placeholder="Quantity" className="mb-5" />
                        <TextField type="text" placeholder="Description" className="mb-5" />
                        <TextField type="date" placeholder="Pickup Date" className="mb-5" />
                        <TextField type="time" placeholder="Pickup Time" className="mb-5" />
                        <Button>Donate</Button>
                    </form>
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