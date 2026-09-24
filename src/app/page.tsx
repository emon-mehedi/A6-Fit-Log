import Image from "next/image"
import banner from '@/assets/banner.png'
import { IItemType } from "@/types/AllTypes";
import Card from "@/components/Card";


export const logItemsPromise = async () => {
  try {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    return res.json()
  } catch (error) {
    console.log(error);
    return []
  }
}


const Home = async () => {

  const logItems = await logItemsPromise() as IItemType[]
  
  return (
    <div className="container mx-auto">

      {/* Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 my-30">
        <div className="space-y-5">
          <p className="text-[10px] text-[#d0fd42]">WORKOUT LIBRARY</p>
          <h1 className="text-5xl">TRAIN WITH INTENT. LOG EVERY SET.</h1>
          <p className="text-sm">Fitlog is a dark, no-nonsense gym companion: pick a lift, lock it into todays plan and watch the weeks work add up.</p>
          <button className="bg-[#d0fd42] text-[10px] text-black font-bold pb-2 pt-3 px-5 rounded">BROWSE WORKOUTS</button>
        </div>
        <div className="flex justify-center">
          <Image src={banner} alt="banner" />
        </div>
      </div>

      {/* Fetched data cards */}
      <div>
        <h2 className="text-3xl">THE LIBRARY</h2>
        <p className="text-sm">Twelve lifts covering every major muscle group</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {
            logItems.map(item=><Card key={item.id} item={item}/>)
          }
        </div>
      </div>

    </div>
  )
}
export default Home