import { IItemType } from '@/types/AllTypes';
import Image from 'next/image';
import React from 'react';

const SaveCard = ({item}:{item:IItemType}) => {
  return (
    <div className='flex flex-row justify-between items-center'>
      <div className='flex flex-row'>
        <Image src={item.image} alt='workout photo' width={200} height={100} className='h-20'/>
        <div>
          <h1 className='uppercase text-2xl'>{item.name}</h1>
          <p>{item.equipment}</p>
          <div className='flex flex-row gap-2'>
            <p>{item.duration}</p>
            <p>{item.caloriesBurned}</p>
            <p>{item.rating}</p>
          </div>
        </div>
      </div>

      <div className='flex flex-row gap-2'>
        <button className='border border-white rounded-2xl'>View Details</button>
        <button className='bg-[#d0fd42] text-black'>Mark as Done</button>
        <button >X</button>
      </div>
    </div>
  );
};

export default SaveCard;