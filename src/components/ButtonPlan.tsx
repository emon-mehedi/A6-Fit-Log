'use client'
import { ItemsContext } from '@/contexts/context';
import { IItemType } from '@/types/AllTypes';
import React, { useContext } from 'react';
import { MdAddCard } from 'react-icons/md';
import { toast } from 'react-toastify';


const ButtonPlan = ({ item }: { item: IItemType }) => {
  const { todaysPlan, setTodaysPlan } = useContext(ItemsContext)
  const handlePlan = (item: IItemType) => {
    const exists = todaysPlan.find(each => each.id === item.id);
    if (exists) {
      toast.error("Already exists in todays plan");
      return
    } else if (todaysPlan.length < 5) {
      setTodaysPlan([...todaysPlan, item]);
      toast.success("Added to todays plan")
    } else {
      toast.error("List if full, finish to add more")
    }
  }


  return (
    <button className='flex flex-row gap-2 items-center rounded-2xl text-sm text-black bg-[#ccff00] py-2 px-4' onClick={() => handlePlan(item)}>
      <MdAddCard /><span>Add to todays plan</span>
    </button>
  );
};

export default ButtonPlan;