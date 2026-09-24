import { IItemType } from '@/types/AllTypes';
import React from 'react';

const ButtonPlan = ({item}:{item:IItemType}) => {
  return (
    <button className='text-black bg-[#d0fd42] py-2 px-4'>
      Add to todays plan
    </button>
  );
};

export default ButtonPlan;