import { IItemType } from '@/types/AllTypes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegClock, FaRegStar } from 'react-icons/fa';
import { LuFlame } from 'react-icons/lu';

interface ICardType {
  item: IItemType
}
const Card = ({ item }: ICardType) => {
  return (
    <Link href={`/workouts/${item.id}`}>
      <div className='space-y-2 rounded-2xl shadow bg-base-200'>
        <Image className='w-full h-50 object-cover rounded-t-2xl' src={item.image} width={500} height={300} alt='Item image' />
        <div className='space-y-2 p-5'>
          <div className='flex flex-row gap-2 text-sm font-bold uppercase'>
            {item.muscleGroups.map((muscle, index) => <p className='px-3 py-1 text-black text-xs bg-primary rounded-2xl' key={index}>{muscle}</p>)}
          </div>
          <h2 className='text-xl font-oswald font-bold'>{(item.name).toUpperCase()}</h2>
          <p className='text-secondary text-sm'>{item.equipment}</p>
          <div className='flex flex-row justify-start gap-3 text-sm text-secondary'>
            <p className='flex flex-row items-center gap-1'><FaRegClock/><span>{item.duration}</span></p>
            <p className='flex flex-row items-center gap-1'><LuFlame/><span>{item.caloriesBurned}</span></p>
            <p className='flex flex-row items-center gap-1'><FaRegStar/><span>{item.rating}</span></p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;