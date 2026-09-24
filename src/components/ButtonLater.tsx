'use client'
import { ItemsContext } from '@/contexts/context';
import { IItemType } from '@/types/AllTypes';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const ButtonLater = ({item}:{item:IItemType}) => {

  const {saved, setSaved}=useContext(ItemsContext);
  const handleSave=(item:IItemType)=>{
    const exists=saved.find(each=>each.id===item.id);
    if(exists){
      toast.error("Already exists in saved list");
      return
    } else {
      setSaved([...saved,item]);
      toast.success("Added to saved list")
    }
  }
  return (
    <button className='py-2 px-4 border' onClick={()=>handleSave(item)}>
      Save for later
    </button>
  );
};

export default ButtonLater;