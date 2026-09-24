'use client'
import { ItemsContext } from '@/contexts/context';
import { IItemType } from '@/types/AllTypes';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';


const ButtonPlan = ({item}:{item:IItemType}) => {
const {todaysPlan, setTodaysPlan}=useContext(ItemsContext)
const handlePlan=(item:IItemType)=>{
    const exists = todaysPlan.find(each=>each.id===item.id);
    if (exists){
      toast.error("Already exists in todays plan");
      return
    } else {
      setTodaysPlan([...todaysPlan, item]);
      toast.success("Added to todays plan")
    }
  }


  return (
    <button className='text-black bg-[#d0fd42] py-2 px-4' onClick={()=>handlePlan(item)}>
      Add to todays plan
    </button>
  );
};

export default ButtonPlan;