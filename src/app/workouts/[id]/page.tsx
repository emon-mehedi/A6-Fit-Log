import { logItemsPromise } from '@/app/page';
import ButtonLater from '@/components/ButtonLater';
import ButtonPlan from '@/components/ButtonPlan';
import { IItemType } from '@/types/AllTypes';
import Image from 'next/image';
import React from 'react';


interface IItemDetailsType {
  params: {
    id: number
  }
}

const logItems=await logItemsPromise() as IItemType[];

const ItemDetails = async({ params }: IItemDetailsType) => {
  const { id } = await params;
  const item=logItems.find(each=>Number(each.id)===Number(id));
  if (!item) {
    return (
      <div>Item not found</div>
    )
  } else {

    return (
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 container mx-auto'>
        <Image className='w-full h-full object-cover rounded-2xl' src={item.image} height={500} width={400} alt='Item photo' />
        <div className='space-y-3'>
          <h2 className='text-3xl font-bold'>{(item.name).toUpperCase()}</h2>
          <p>{item.description}</p>
          <div className='flex flex-row gap-3'>
            {item.muscleGroups.map((muscle, index) => <p className='px-3 text-black text-sm bg-primary rounded-2xl' key={index}>{muscle}</p>)}
          </div>
          <div className=' border-gray-600 bg-base-100 rounded-xl p-3 space-y-4'>
            <div className='grid grid-cols-2'>
              <p>EQUIPMENT</p>
              <p>{item.equipment}</p>
            </div>
            <div className='grid grid-cols-2'>
              <p>DIFFICULTY</p>
              <p>{item.difficulty}</p>
            </div>
            <div className='grid grid-cols-2'>
              <p>SETS</p>
              <p>{item.sets}</p>
            </div>
            <div className='grid grid-cols-2'>
              <p>REPS</p>
              <p>{item.reps}</p>
            </div>
            <div className='grid grid-cols-2'>
              <p>DURATION</p>
              <p>{item.duration}</p>
            </div>
            <div className='grid grid-cols-2'>
              <p>CALORIES</p>
              <p>{item.caloriesBurned}</p>
            </div>
            <div className='grid grid-cols-2'>
              <p>RATING</p>
              <p>{item.rating}</p>
            </div>
          </div>
          <div className='space-y-4'>
            <h3 className='text-2xl'>INSTRUCTIONS</h3>
            <ol className='list-decimal text-sm space-y-2 pl-8'>
              {
                item.instructions.map((each,index) =><li key={index}>{each}</li>)
              }
            </ol>
          </div>
          <div className='flex flex-row gap-2'>
            <ButtonPlan item={item}/>
            <ButtonLater item={item}/>
          </div>

        </div>
      </div>
    );
  }
};

export default ItemDetails;