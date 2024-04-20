import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import Button from '../components/Button';
import TextField from '../components/TextField';

const NGOPage = () => {
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
    const { id } = useParams();
    console.log(id);
    const selectedNGO = ngos.find(ngo => ngo.id === parseInt(id));

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
                <div className='w-2/3 flex items-center justify-center flex-col'>
                    <p className='font-bold text-2xl'>
                        {selectedNGO.name}
                    </p>
                    <p className=''>{selectedNGO.description}</p>
                    <p className=''>Donation: {selectedNGO.donation}</p>
                </div>
                <div className='w-1/3 flex items-center justify-center flex-col'>
                    <p className='font-bold mb-4'>Reach out to this NGO</p>
                    <div className='p-6 bg-white border rounded-2xl'>
                        <form className='flex items-start justify-center flex-col'>
                            <TextField type="text" placeholder="Address" className="mb-5" />
                            <TextField type="text" placeholder="Message" className="mb-5" />
                            <input type="file" accept="image/*" id="imageInput" name="imageInput" onChange={handleImageChange} />
                            {imageFile && (
                                <div>
                                    <p className='mt-4'>Image Preview:</p>
                                    <img src={URL.createObjectURL(imageFile)} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px', marginTop: '10px' }} />
                                </div>
                            )}
                            <Button className="mt-5">Submit</Button>
                        </form>
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
