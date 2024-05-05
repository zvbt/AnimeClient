import { useState } from 'react';
import Image from 'next/image';
import { Icons } from './ui/icons';
import Link from 'next/link';

const close = () => {
window.close();
};


const Navbar = () => {
    return (
        <nav className='flex justify-center items-center fixed top-10 w-full h-11 mb-10 bg-ctp-crust shadow-md z-50 shadow-ctp-base' style={{ WebkitAppRegion: 'drag' } as React.CSSProperties}>
            <Image src={"/assets/logo.png"} width={100} height={100} alt='logo' quality={100} className='flex-shrink-0 rounded-full'></Image>
            <a href="#" onClick={close} style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties} className='absolute top-1/2 mr-5 right-0 transform -translate-y-1/2 h-5 w-5'><Icons.close className='fill-current text-ctp-text hover:text-ctp-red'/></a>
        </nav>

    );
};


export default Navbar;