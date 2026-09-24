import { ItemsContext } from '@/contexts/context';
import { IItemType } from '@/types/AllTypes';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const PlanCard = ({item}:{item:IItemType}) => {
  const {todaysPlan, setTodaysPlan}=useContext(ItemsContext);
  const markDone=(item:IItemType)=>{
    const newPlans=todaysPlan.filter(each=>each.id!==item.id);
    setTodaysPlan(newPlans);
    toast.success("Marked as Done")
  }
  const removeItem=(item:IItemType)=>{
    const newPlans=todaysPlan.filter(each=>each.id!==item.id);
    setTodaysPlan(newPlans);
    toast.success("Removed successfuly")
  }
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
        <Link href={`/workouts/${item.id}`}><button className='border border-white rounded-2xl'>View Details</button></Link>
        <button onClick={()=>markDone(item)} className='bg-[#d0fd42] text-black rounded-2xl'>Mark as Done</button>
        <button onClick={()=>removeItem(item)}>X</button>
      </div>
    </div>
  );
};

export default PlanCard;