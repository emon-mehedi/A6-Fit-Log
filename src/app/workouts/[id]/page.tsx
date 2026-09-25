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
      <div className='grid grid-cols-1 px-5 md:px-0 md:grid-cols-2 gap-5 container mx-auto'>
        <Image className='w-full h-full object-cover rounded-2xl' src={item.image} height={500} width={400} alt='Item photo' />
        <div className='space-y-3'>
          <h2 className='text-2xl md:text-3xl font-bold'>{(item.name).toUpperCase()}</h2>
          <p className='text-sm md:text-md text-secondary'>{item.description}</p>
          <div className='flex flex-row gap-3'>
            {item.muscleGroups.map((muscle, index) => <p className='px-3 text-black text-xs md:text-sm bg-primary rounded-2xl' key={index}>{muscle}</p>)}
          </div>
          <div className=' border-gray-600 bg-base-100 rounded-xl p-3 space-y-1 md:space-y-4'>
            <div className='grid grid-cols-2'>
              <p className='text-sm md:text-md text-secondary'>EQUIPMENT</p>
              <p className='text-sm md:text-md text-gray-200'>{item.equipment}</p>
            </div>
            <div className='grid grid-cols-2'>
              <p className='text-sm md:text-md text-secondary'>DIFFICULTY</p>
              <p className='text-sm md:text-md text-gray-200'>{item.difficulty}</p>
            </div>
            <div className='grid grid-cols-2'>
              <p className='text-sm md:text-md text-secondary'>SETS</p>
              <p className='text-sm md:text-md text-gray-200'>{item.sets}</p>
            </div>
            <div className='grid grid-cols-2'>
              <p className='text-sm md:text-md text-secondary'>REPS</p>
              <p className='text-sm md:text-md text-gray-200'>{item.reps}</p>
            </div>
            <div className='grid grid-cols-2'>
              <p className='text-sm md:text-md text-secondary'>DURATION</p>
              <p className='text-sm md:text-md text-gray-200'>{item.duration}</p>
            </div>
            <div className='grid grid-cols-2'>
              <p className='text-sm md:text-md text-secondary'>CALORIES</p>
              <p className='text-sm md:text-md text-gray-200'>{item.caloriesBurned}</p>
            </div>
            <div className='grid grid-cols-2'>
              <p className='text-sm md:text-md text-secondary'>RATING</p>
              <p className='text-sm md:text-md text-gray-200'>{item.rating}</p>
            </div>
          </div>
          <div className='space-y-4'>
            <h3 className='text-xl md:text-2xl'>INSTRUCTIONS</h3>
            <ol className='list-decimal text-sm text-secondary space-y-2 pl-8'>
              {
                item.instructions.map((each,index) =><li key={index}>{each}</li>)
              }
            </ol>
          </div>
          <div className='flex flex-row gap-1 md:gap-2 justify-center md:justify-start'>
            <ButtonPlan item={item}/>
            <ButtonLater item={item}/>
          </div>

        </div>
      </div>
    );
  }
};

export default ItemDetails;