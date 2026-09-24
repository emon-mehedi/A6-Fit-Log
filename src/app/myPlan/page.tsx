'use client'
import PlanCard from '@/components/PlanCard';
import SaveCard from '@/components/SaveCard';
import { ItemsContext } from '@/contexts/context';
import React, { useContext, useState } from 'react';
const MyPlan = () => {

  const { todaysPlan, saved } = useContext(ItemsContext);
  const [tab, setTab] = useState<"plan" | "saved">("plan");
  return (
    <div className='container mx-auto min-h-dvh space-y-5'>
      <div>
        <h2 className='text-3xl'> MY PLAN</h2>
        <p className='text-sm'>Cap of five lifts for today. Finish them, then add more</p>

        <div className='grid grid-cols-3 bg-base-200 p-3'>
          <div className='flex flex-col'>
            <p className='text-xs'>Exercises</p>
            <h2 className='text-[#d0fd42] text-3xl'>{tab === "plan" ? todaysPlan.length : saved.length}</h2>
          </div>
          <div className='flex flex-col'>
            <p className='text-xs'>Minutes</p>
            <h2 className='text-3xl'>{tab === "plan" ? todaysPlan.reduce((sum, item) => sum + item.duration, 0) : saved.reduce((sum, item) => sum + item.duration, 0)}</h2>
          </div>
          <div className='flex flex-col'>
            <p className='text-xs'>Calories</p>
            <h2 className='text-3xl'>{tab === "plan" ? todaysPlan.reduce((sum, item) => sum + item.caloriesBurned, 0) : saved.reduce((sum, item) => sum + item.caloriesBurned, 0)}</h2>
          </div>

        </div>
      </div>

      <div className='flex flex-row justify-between items-center'>
        <div className='space-x-3 bg-base-200 rounded-2xl p-1'>
          <button onClick={() => setTab("plan")} className={`${tab === "plan" ? "text-[#d0fd42] bg-black rounded-l-2xl" : ""} py-2 px-4`}>Todays Plan</button>
          <button onClick={() => setTab("saved")} className={`${tab === "saved" ? "text-[#d0fd42] bg-black rounded-r-2xl" : ""} py-2 px-4`}>Saved</button>
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
            ?<h1 className='text-4xl text-center mt-50'>List is empty</h1>
            :todaysPlan.map(item=><PlanCard key={item.id} item={item}/>)
          
          : saved.length===0
            ?<h1 className='text-4xl text-center mt-50'>List is empty</h1>
            :saved.map(item=><SaveCard key={item.id} item={item}/>)
        }
      </div>
    </div>
  );
};

export default MyPlan;