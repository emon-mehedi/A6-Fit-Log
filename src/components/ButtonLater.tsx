'use client'
import { ItemsContext } from '@/contexts/context';
import { IItemType } from '@/types/AllTypes';
import React, { useContext } from 'react';
import { IoBookmarkOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';

const ButtonLater = ({item}:{item:IItemType}) => {

  const {saved, setSaved}=useContext(ItemsContext);
  const handleSave=(item:IItemType)=>{
    const exists=saved.find(each=>each.id===item.id);
    if(exists){
      toast.error("Already exists in saved list");
      return
    } else if(saved.length<5){
      setSaved([...saved,item]);
      toast.success("Saved for later")
    } else {
      toast.error("List if full, finish to add more")
    }
  }
  return (
    <button className='flex flex-row gap-2 items-center rounded-2xl text-xs md:text-sm border py-1 md:py-2 px-2 md:px-4' onClick={()=>handleSave(item)}><IoBookmarkOutline /><span>Save for later</span>
    </button>
  );
};

export default ButtonLater;