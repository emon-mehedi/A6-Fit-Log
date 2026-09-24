import { logItemsPromise } from '@/app/page';
import ButtonLater from '@/components/ButtonLater';
import ButtonPlan from '@/components/ButtonPlan';
import { IItemType } from '@/types/AllTypes';
import Image from 'next/image';
import React from 'react';

const logItems = await logItemsPromise() as IItemType[];

interface IItemDetailsType {
  params: {
    id: number
  }
}
const ItemDetails = ({ params }: IItemDetailsType) => {
  const { id } = params;
  const item = logItems.find(each => Number(each.id) === Number(id));
  if (!item) {
    return (
      <div>Item not found</div>
    )
  } else {

    return (
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <Image src={item.image} alt='Item photo' />
        <div>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <div>
            {item.muscleGroups.map((muscle, index) => <p className='py-2 px-3 text-black bg-[#d0fd42] rounded-2xl' key={index}>{muscle}</p>)}
          </div>
          <div className='border rounded'>
            <div className='flex flex-row justify-between items-center'>
              <p>EQUIPMENT</p>
              <p>{item.equipment}</p>
            </div>
            <div className='flex flex-row justify-between items-center'>
              <p>DIFFICULTY</p>
              <p>{item.difficulty}</p>
            </div>
            <div className='flex flex-row justify-between items-center'>
              <p>SETS</p>
              <p>{item.sets}</p>
            </div>
            <div className='flex flex-row justify-between items-center'>
              <p>REPS</p>
              <p>{item.reps}</p>
            </div>
            <div className='flex flex-row justify-between items-center'>
              <p>DURATION</p>
              <p>{item.duration}</p>
            </div>
            <div className='flex flex-row justify-between items-center'>
              <p>CALORIES</p>
              <p>{item.caloriesBurned}</p>
            </div>
            <div className='flex flex-row justify-between items-center'>
              <p>RATING</p>
              <p>{item.rating}</p>
            </div>
          </div>
          <div>
            <h3>INSTRUCTIONS</h3>
            <div>
              {
                item.instructions.map((each, index) =><p key={index}>{index+1}. {each}</p>)
              }
            </div>
          </div>
          <div>
            <ButtonPlan item={item}/>
            <ButtonLater item={item}/>
          </div>

        </div>
      </div>
    );
  }
};

export default ItemDetails;