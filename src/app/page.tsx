import Image from "next/image"
import banner from '@/assets/banner.png'
import { IItemType } from "@/types/AllTypes";
import Card from "@/components/Card";
import Link from "next/link";


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
    <div className="container mx-auto px-5 md:px-0">

      {/* Banner */}
      <div className="flex flex-col md:flex-row mt-15 mb-5 md:my-30 lg:my-50 ">
        <div className="space-y-5 flex-55">
          <p className="text-sm  text-primary">WORKOUT LIBRARY</p>
          <h1 className="text-4xl md:text-6xl uppercase font-bold font-oswald">TRAIN WITH INTENT. LOG EVERY SET.</h1>
          <p className="text-sm md:text-md text-secondary">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into todays plan and watch the weeks work add up.</p>
          <Link href='#library'><button className="bg-primary text-xs md:text-sm text-black font-bold pb-2 pt-3 px-5 rounded">BROWSE WORKOUTS</button></Link>
        </div>
        <div className="flex justify-center flex-45 mt-10 md:mt-0">
          <Image src={banner} alt="banner" />
        </div>
      </div>

      {/* Fetched data cards */}
      <div className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-oswald font-bold" id="library">THE LIBRARY</h2>
        <p className="text-xs md:text-sm text-secondary">Twelve lifts covering every major muscle group</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10" >
          {
            logItems.map(item=><Card key={item.id} item={item}/>)
          }
        </div>
      </div>

    </div>
  )
}
export default Home