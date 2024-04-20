import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const NGOs = () => {
    const navigate = useNavigate();
    const [ngos, setNgos] = useState();
    useEffect(() => {
        fetch('http://localhost:3000/ngos')
            .then(res => res.json())
            .then(data => {
                setNgos(data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    return (
        <div className='flex flex-col items-center justify-between w-full h-100vh-h-12 mt-4'>
            <div className='font-bold text-2xl'>Find NGOs</div>
            < div className='flex flex-col w-full items-center justify-center' >
                {ngos &&
                    ngos.map(ngo => (
                        <div key={ngo._id} className='flex items-center justify-between w-2/3 m-4 bg-white rounded-2xl border p-12'>
                            <div>
                                <p className='font-bold'>{ngo.ngoName}</p>
                                <p>{ngo.ngoDescription}</p>
                            </div>
                            <div>
                                <Button onClick={() => navigate(`/ngos/${ngo._id}`)}>View</Button>
                            </div>
                        </div>
                    ))
                }
            </ div>
        </div >
    );
};

export default NGOs;