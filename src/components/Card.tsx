import { IItemType } from '@/types/AllTypes';
import Image from 'next/image';
import React from 'react';

interface ICardType{
  item:IItemType
}
const Card = ({item}:ICardType) => {
  return (
    <div>
      <Image src={item.image} alt='Item image'/>
      <div>
        <div>
          {item.muscleGroups.map((muscle,index)=><p className='py-2 px-3 text-black bg-[#d0fd42] rounded-2xl' key={index}>{muscle}</p>)}
        </div>
        <h2 className='text-3xl'>{item.name}</h2>
        <p>{item.equipment}</p>
        <div className='flex flex-row justify-start gap-3'>
          <p>{item.duration}</p>
          <p>{item.caloriesBurned}</p>
          <p>{item.rating}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;