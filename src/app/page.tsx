import Image from "next/image"
import banner from '@/assets/banner.png'

const Home=()=>{
  return(
    <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto my-30">
      <div  className="space-y-5">
        <p className="text-[10px] text-[#d0fd42]">WORKOUT LIBRARY</p>
        <h1 className="text-5xl">TRAIN WITH INTENT. LOG EVERY SET.</h1>
        <p className="text-sm">Fitlog is a dark, no-nonsense gym companion: pick a lift, lock it into todays plan and watch the weeks work add up.</p>
        <button className="bg-[#d0fd42] text-[10px] text-black font-bold pb-2 pt-3 px-5 rounded">BROWSE WORKOUTS</button>
      </div>
      <div className="flex justify-center">
        <Image src={banner} alt="banner"/>
      </div>
    </div>
  )
}
export default Home