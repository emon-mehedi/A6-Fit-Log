'use client'
import logo from '@/assets/logo.png'
import { ItemsContext } from '@/contexts/context';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';


const Nav = () => {
  const { todaysPlan, saved } = useContext(ItemsContext);
  const [tab, setTab] = useState<"workouts" | "myPlan">("workouts")
  return (
    <div>
      <div className="navbar shadow-sm container mx-auto">
        <div className="navbar-start lg:hidden">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-3">
              <Link href={'/'}><li onClick={() => setTab("workouts")} className={`${tab === "workouts" ? "text-primary" : "text-secondary"}`}>Workouts</li></Link>
              <Link href={'/myPlan'}><li onClick={() => setTab("myPlan")} className={`${tab === "myPlan" ? "text-primary" : "text-secondary"}`}>My Plan</li></Link>
            </ul>
          </div>
        </div>
          <div className='flex flex-row lg:navbar-start'>
            <Link href={'/'} className='flex flex-row items-center justify-center'>
              <Image src={logo} alt='logo' />
              <p className="btn btn-ghost text-xl font-oswald">FITLOG</p>
            </Link>
          </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">
            <Link href={'/'}><li onClick={() => setTab("workouts")} className={`${tab === "workouts" ? "text-primary" : "text-secondary"}`}>Workouts</li></Link>
            <Link href={'/myPlan'}><li onClick={() => setTab("myPlan")} className={`${tab === "myPlan" ? "text-primary" : "text-secondary"}`}>My Plan</li></Link>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href={'/myPlan'} onClick={() => setTab("myPlan")} className="btn"><span>Plan</span><span className='bg-primary py-1 px-3 rounded-xl text-black'>{todaysPlan.length}</span></Link>
          <Link href={'/myPlan'} onClick={() => setTab("myPlan")} className="btn"><span>Saved</span><span className='border py-1 px-3 rounded-xl'>{saved.length}</span></Link>
        </div>
      </div>
    </div>
  )
}
export default Nav;