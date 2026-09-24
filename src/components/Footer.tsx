import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png'

const Footer = () => {
  return (
    <footer className='shadow py-25'>
      <div className='flex flex-row justify-between items-center container mx-auto'>
        <div className='flex flex-row gap-2 justify-center items-center'>
          <Image src={logo} alt='logo' className='h-5'/>
          <p>FITLOG</p>
        </div>
        <p>2026 FitLog - Workout Library. Train hard, log honest.</p>
      </div>
    </footer>
  );
};

export default Footer;