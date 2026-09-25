'use client'
import PlanCard from '@/components/PlanCard';
import SaveCard from '@/components/SaveCard';
import { ItemsContext } from '@/contexts/context';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
const MyPlan = () => {

  const { todaysPlan, saved } = useContext(ItemsContext);
  const [tab, setTab] = useState<"plan" | "saved">("plan");
  return (
    <div className='container mx-auto min-h-dvh space-y-5 px-5'>
      <div>
        <h2 className='text-2xl md:text-3xl'> MY PLAN</h2>
        <p className='text-xs md:text-sm text-secondary'>Cap of five lifts for today. Finish them, then add more</p>

        <div className='grid grid-cols-3 bg-base-200 p-3'>
          <div className='flex flex-col'>
            <p className='text-xs text-secondary'>Exercises</p>
            <h2 className='text-primary text-xl md:text-3xl'>{tab === "plan" ? todaysPlan.length : saved.length}</h2>
          </div>
          <div className='flex flex-col'>
            <p className='text-xs text-secondary'>Minutes</p>
            <h2 className='text-xl md:text-3xl'>{tab === "plan" ? todaysPlan.reduce((sum, item) => sum + item.duration, 0) : saved.reduce((sum, item) => sum + item.duration, 0)}</h2>
          </div>
          <div className='flex flex-col'>
            <p className='text-xs text-secondary'>Calories</p>
            <h2 className='text-xl md:text-3xl'>{tab === "plan" ? todaysPlan.reduce((sum, item) => sum + item.caloriesBurned, 0) : saved.reduce((sum, item) => sum + item.caloriesBurned, 0)}</h2>
          </div>

        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-between items-center'>
        <div className='space-x-3 bg-base-200 rounded-2xl p-1'>
          <button onClick={() => setTab("plan")} className={`${tab === "plan" ? "text-primary bg-black rounded-l-2xl" : "text-secondary"} text-sm md:text-md py-2 px-4`}>Todays Plan</button>
          <button onClick={() => setTab("saved")} className={`${tab === "saved" ? "text-primary bg-black rounded-r-2xl" : "text-secondary"} text-sm md:text-md py-2 px-4`}>Saved</button>
        </div>
        <div>
          <p>Sort by</p>
          <select>
            <option value={"duration"}>Duration</option>
            <option value={"Calories"}>Calories</option>
            <option value={"Rating"}>Rating</option>
          </select>
        </div>
      </div>

      <div className='flex flex-col gap-3'>
        {
          tab==="plan"
          ? todaysPlan.length===0
            ?<div className='flex flex-col justify-center items-center mt-20 space-y-2'>
              <h1 className='text-xl md:text-4xl'>Nothing here yet</h1>
              <p className='text-xs md:text-md text-secondary'>Browse the library and add a lift to get today moving.</p>
              <Link href={'/'} className='bg-primary py-1 md:py-2 px-7 mt-5 rounded-2xl text-black text-sm md:text-md'>Go to workouts</Link>
            </div>
            :todaysPlan.map(item=><PlanCard key={item.id} item={item}/>)
          
          : saved.length===0
            ?<div className='flex flex-col justify-center items-center mt-20 space-y-2'>
              <h1 className='text-xl md:text-4xl'>Nothing here yet</h1>
              <p className='text-xs md:text-md text-secondary'>Browse the library and add a lift to get today moving.</p>
              <Link href={'/'} className='bg-primary py-1 md:py-2 px-7 mt-5 rounded-2xl text-black text-sm md:text-md'>Go to workouts</Link>
            </div>
            :saved.map(item=><SaveCard key={item.id} item={item}/>)
        }
      </div>
    </div>
  );
};

export default MyPlan;