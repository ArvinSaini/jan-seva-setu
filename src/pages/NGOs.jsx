import React from 'react';

const NGOs = () => {
    const ngos = [
        {
            id: 1,
            name: "NGO 1",
            description: "This is NGO 1",
            donation: 100
        },
        {
            id: 2,
            name: "NGO 2",
            description: "This is NGO 2",
            donation: 200
        },
        {
            id: 3,
            name: "NGO 3",
            description: "This is NGO 3",
            donation: 300
        }
    ];
    return (
        <div className='flex flex-col items-center justify-between w-full h-100vh-h-12'>
            <div className='font-bold text-2xl'>Find NGOs</div>
            < div className='flex flex-col w-full items-center justify-center' >
                {
                    ngos.map(ngo => (
                        <div key={ngo.id} className='flex items-center justify-between w-2/3 m-4 bg-white rounded-2xl border p-12'>
                            <div>
                                <p className='font-bold'>{ngo.name}</p>
                                <p>{ngo.description}</p>
                                <p>Donation: {ngo.donation}</p>
                            </div>
                            <div>
                                <button className='bg-primary text-white rounded-2xl p-2'>View</button>
                            </div>
                        </div>
                    ))
                }
            </ div>
        </div >
    );
};

export default NGOs;