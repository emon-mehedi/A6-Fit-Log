import { ItemsContext } from '@/contexts/context';
import { IItemType } from '@/types/AllTypes';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { FaRegClock, FaRegStar } from "react-icons/fa";
import { LuFlame } from 'react-icons/lu';
import { IoMdCheckmark } from 'react-icons/io';
import { RxCross1 } from 'react-icons/rx';

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
    <div className='flex flex-row justify-between items-center bg-base-200'>
      <div className='flex flex-row gap-4'>
        <Image src={item.image} alt='workout photo' width={150} height={100} className='h-25 object-cover rounded-2xl'/>
        <div className='flex flex-col justify-center'>
          <h1 className='uppercase text-2xl'>{item.name}</h1>
          <p className='text-xs'>{item.equipment}</p>
          <div className='flex flex-row gap-4 mt-2'>
            <div className='flex flex-row items-center space-x-1'>
              <FaRegClock color='#d0fd42'/>
              <p className='text-sm'>{item.duration}</p>
            </div>
            <div className='flex flex-row items-center space-x-1'>
              <LuFlame color='#d0fd42'/>
              <p className='text-sm'>{item.caloriesBurned}</p>
            </div>
            <div className='flex flex-row items-center space-x-1'>
              <FaRegStar color='#d0fd42'/>
              <p className='text-sm'>{item.rating}</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-row gap-2'>
        <Link href={`/workouts/${item.id}`}><button className='text-xs py-1 px-3 border border-white rounded-2xl'>View Details</button></Link>
        <button onClick={()=>markDone(item)} className='flex flex-row gap-1 items-center text-xs py-1 px-3 border bg-[#d0fd42] text-black rounded-2xl'><IoMdCheckmark /><span>Mark as Done</span></button>
        <button onClick={()=>removeItem(item)}><RxCross1 /></button>
      </div>
    </div>
  );
};

export default PlanCard;