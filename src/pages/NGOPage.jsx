import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Button from '../components/Button';
import TextField from '../components/TextField';
import { useAuth } from '../hooks/useAuth';

const NGOPage = () => {
    const [selectedNGO, setSelectedNGO] = useState(null);
    const [message, setMessage] = useState();
    const [address, setAddress] = useState();
    const { id } = useParams();
    const { reachout } = useAuth();
    useEffect(() => {
        fetch(`https://jan-seva-setu-backend.vercel.app/ngos/`)
            .then(res => res.json())
            .then(data => {
                setSelectedNGO(data.find(ngo => ngo._id === id));
            })
            .catch(err => {
                console.log(err);
            });
    }, [id]);
    // State to store selected image file
    const [imageFile, setImageFile] = useState(null);

    // Function to handle image file selection
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImageFile(file);
    };

    if (selectedNGO) {
        return (
            <div className='flex items-center justify-between w-full h-100vh-h-12'>
                <div className='w-2/3 flex items-start justify-center flex-col p-24'>
                    <p className='font-bold text-2xl'>
                        {selectedNGO.ngoName}
                    </p>
                    <p className=''>{selectedNGO.ngoDescription}</p>
                    <p><span className='font-bold'>Address:</span> {selectedNGO.ngoAddress}</p>
                    <p><span className='font-bold'>Phone:</span> {selectedNGO.ngoPhone}</p>
                </div>
                <div className='w-1/3 flex items-center justify-center flex-col'>
                    <p className='font-bold mb-4'>Reach out to this NGO</p>
                    <div className='p-6 bg-white border rounded-2xl'>
                        <div className='flex items-start justify-center flex-col'>
                            <TextField onChange={(e) => setAddress(e.target.value)} type="text" placeholder="Address" className="mb-5" />
                            <TextField onChange={(e) => setMessage(e.target.value)} type="text" placeholder="Message" className="mb-5" />
                            {/* <input type="file" accept="image/*" id="imageInput" name="imageInput" onChange={handleImageChange} />
                            {imageFile && (
                                <div>
                                    <p className='mt-4'>Image Preview:</p>
                                    <img src={URL.createObjectURL(imageFile)} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px', marginTop: '10px' }} />
                                </div>
                            )} */}
                            <Button onClick={() =>
                                reachout({
                                    id: selectedNGO._id, message, address
                                })
                            } className="mt-5">Submit</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className='flex items-center justify-center flex-col h-100vh-h-12'>
            <p className='font-bold text-2xl'>
                NGO Not Found
            </p>
            <p className=''>Check the URL again.</p>
        </div>
    );
};

export default NGOPage;
