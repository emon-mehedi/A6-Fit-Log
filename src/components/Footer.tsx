import React from 'react';
import { FaDumbbell } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className='shadow py-25'>
      <div className='flex flex-row justify-between items-center container mx-auto'>
        <div className='flex flex-row gap-2 justify-center items-center'>
          <FaDumbbell color='#ccff00' size={30}/>
          <p>FITLOG</p>
        </div>
        <p>© 2026 FitLog - Workout Library. Train hard, log honest.</p>
      </div>
    </footer>
  );
};

export default Footer;