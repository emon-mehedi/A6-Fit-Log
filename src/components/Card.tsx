import { IItemType } from '@/types/AllTypes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ICardType {
  item: IItemType
}
const Card = ({ item }: ICardType) => {
  return (
    <Link href={`/workouts/${item.id}`}>
      <div className='space-y-2 rounded-2xl shadow border border-gray-600'>
        <Image className='w-full h-50 object-cover rounded-t-2xl' src={item.image} width={500} height={300} alt='Item image' />
        <div className='space-y-2 p-5'>
          <div className='flex flex-row gap-2'>
            {item.muscleGroups.map((muscle, index) => <p className='px-3 text-black bg-primary rounded-2xl' key={index}>{muscle}</p>)}
          </div>
          <h2 className='text-xl'>{(item.name).toUpperCase()}</h2>
          <p>{item.equipment}</p>
          <div className='flex flex-row justify-start gap-3'>
            <p>{item.duration}</p>
            <p>{item.caloriesBurned}</p>
            <p>{item.rating}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;