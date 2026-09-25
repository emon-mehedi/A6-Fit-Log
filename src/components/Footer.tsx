import React from 'react';
import { FaDumbbell } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className='shadow py-10 md:py-25 px-5 md:px-0'>
      <div className='flex flex-col md:flex-row justify-between items-center container mx-auto'>
        <div className='flex flex-row gap-2 justify-center items-center'>
          <FaDumbbell color='#ccff00' size={30}/>
          <p>FITLOG</p>
        </div>
        <p className='text-xs md:text-sm text-center md:text-start text-secondary'>© 2026 FitLog - Workout Library. Train hard, log honest.</p>
      </div>
    </footer>
  );
};

export default Footer;