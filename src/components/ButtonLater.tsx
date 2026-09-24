import { IItemType } from '@/types/AllTypes';
import React from 'react';

const ButtonLater = ({item}:{item:IItemType}) => {
  return (
    <button className='py-2 px-4 border'>
      Save for later
    </button>
  );
};

export default ButtonLater;