import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import Link from 'next/link';

// const Nav = () => {
//   return (
//     <div className='shadow'>
//       <nav>
//         <aside>

//         </aside>
//         <div className='flex flex-row justify-center md:justify-between items-center container mx-auto py-3'>
//           <div className='flex flex-row gap-3'>
//             <Image src={logo} alt='logo'></Image>
//             <p className='text-xl font-bold'>FITLOG</p>
//           </div>
//           <ul className='md:flex flex-row gap-3 hidden'>
//             <Link href={'/workouts'}><li>Workouts</li></Link>
//             <Link href={'/myPlan'}><li>My plan</li></Link>
//           </ul>
//           <ul className='md:flex flex-row gap-3 hidden'>
//             <Link href={'/myplan'}><li>Plan</li></Link>
//             <Link href={'/myplan'}><li>Saved</li></Link>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// };

const Nav = () => {
  return (
    <div>
      <div className="navbar shadow-sm container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-3">
              <Link href={'/'}><li>Workouts</li></Link>
              <Link href={'/myPlan'}><li>My Plan</li></Link>
            </ul>
          </div>
          <div className='flex flex-row'>
            <Image src={logo} alt='logo'/>
            <a className="btn btn-ghost text-xl">FITLOG</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">
            <Link href={'/'}><li>Workouts</li></Link>
            <Link href={'/myPlan'}><li>My Plan</li></Link>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href={'/myplan'} className="btn">Plan</Link>
          <Link href={'/myplan'} className="btn">Saved</Link>
        </div>
      </div>
    </div>
  )
}
export default Nav;