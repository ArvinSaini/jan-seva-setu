import React, { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Navbar = () => {
    const { user, logout } = useAuth();
    const [loginned, setLoginned] = useState();
    useEffect(() => {
        if (!user) {
            setLoginned(false);
        }
        else {
            setLoginned(true);
        }
    });
    const links = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'NGOs',
            path: '/ngos'
        },
        {
            name: 'Gallery',
            path: '/gallery'
        },
        {
            name: 'FAQ',
            path: '/faq'
        },
        {
            name: 'Donate',
            path: '/donate'
        }
    ];
    return (
        <>
            <nav className={'sticky top-0 z-50 px-8 flex items-center justify-center w-full bg-background rounded-b-3xl h-16'}>
                <div className='flex items-center justify-start flex-1'>
                    <p className='p-4'>Jan Seva Setu</p>
                    <p className='select-none'>|</p>
                    <p className='p-4'>जन सेवा सेतु</p>
                </div>
                <div className='flex items-center justify-center flex-1'>
                    {links.map((link, index) => {
                        return <Link key={index} to={link.path}><p className='p-4 hover:text-secondary transition duration-150'>{link.name}</p></Link>;
                    })}

                </div>
                <div className='flex items-center justify-end flex-1'>
                    {loginned ? <p onClick={() => logout()} className='p-4 hover:text-secondary transition duration-150'>Logout</p> : <Link to={'/login'}><p className='p-4 hover:text-secondary transition duration-150'>Login/Register</p></Link>}
                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default Navbar;