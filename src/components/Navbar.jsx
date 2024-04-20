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
            name: 'About',
            path: '/about'
        }
    ];
    return (
        <>
            <nav className={'px-8 flex items-center justify-center sticky top-0 w-full bg-background rounded-b-3xl h-16'}>
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
                    {loginned ? <p onClick={() => logout()} className='p-4 hover:text-secondary transition duration-150'>Logout</p> : <Link to={'/login'}><p className='p-4 hover:text-secondary transition duration-150'>Login</p></Link>}
                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default Navbar;