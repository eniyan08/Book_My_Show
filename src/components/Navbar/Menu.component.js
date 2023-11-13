import { useState } from 'react'
import { AiOutlineBell, AiOutlineRight } from 'react-icons/ai';
import { RiYoutubeLine } from 'react-icons/ri';
import { IoTicket, IoSettingsOutline, IoGiftOutline } from 'react-icons/io5';
import { BsCreditCard2Back, BsChatDots, BsCartCheck } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx'
import { useEffect, useRef } from "react";

const Menu = (props) => {
    const onTrigger = () => {
        props.parentCallback()
    }
    
    const ref = useRef(null);
    const { onClickOutside } = props;

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (ref.current && !ref.current.contains(event.target)) {
              onClickOutside();
              
         }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
        document.removeEventListener('click', handleClickOutside);
        };
    }, [ onClickOutside ]);

    if(!props.show){
       return null;
    }
    return (
        <>
        <div ref={ref}>
            <div style={{visibility : props.show ? "active" : "inactive"}}
               className='fixed top-0 right-0 bottom-0 z-20'>
                <div className='flex flex-col'>
                    <div className='flex bg-navColor-800 text-white text-lg font-bold w-full px-3 py-4'>
                        <h>Hey!</h>
                        <button onClick={onTrigger}> 
                          <RxCross2  className='absolute right-2 top-5 w-5 h-5 text-white'/>
                        </button>  
                    </div>
                    <div className='flex bg-white px-3 py-3 '>
                        <img src='https://in.bmscdn.com/webin/movies/superstar/rewards_login.png'
                             className='rounded-full w-10 h-10 mt-1'/>
                        <div className='flex flex-col px-3'>
                          <h className='text-gray-900'>Unlock special offers &</h>
                          <h className='text-gray-900'>great benefits</h>
                        </div>
                        <div className='mt-2 px-2' >
                          <button className='border rounded-md border-red-600 text-sm text-red-600 px-2 pt-1 pb-2'>Login / Register</button>
                        </div>
                    </div>
                    <hr/>
                    <div className='flex bg-slate-50 px-3 pt-2 pb-3'>
                        <AiOutlineBell className=' w-5 h-5 mt-2'/>
                        <h className='text-gray-900 mt-1 px-3'>Notifications</h>
                        <AiOutlineRight className='absolute right-4 w-3 h-3 text-gray-600 mt-3 hover:text-red-600 cursor-pointer ' />
                    </div>
                    <hr/>
                    <div className='flex bg-slate-50 px-3 pt-2 pb-3'>
                        <BsCartCheck className=' w-5 h-5 mt-3' />
                        <div className='flex flex-col px-3'>
                          <h className='text-gray-900'>Your Orders</h>
                          <h className='text-gray-800 text-xs'>View all your bookings and purchases</h>
                        </div>
                        <AiOutlineRight className='absolute right-4 w-3 h-3 text-gray-600 mt-3 hover:text-red-600 cursor-pointer' />
                    </div>
                    <hr/>
                    <div className='flex bg-slate-50 px-3 pt-2 pb-3'>
                        <RiYoutubeLine className=' w-5 h-5 mt-3' />
                        <div className='flex flex-col px-3'>
                          <h className='text-gray-900'>Stream Library</h>
                          <h className='text-gray-800 text-xs'>Rented & Purchased Movies</h>
                        </div>
                        <AiOutlineRight className='absolute right-4 w-3 h-3 text-gray-600 mt-3 hover:text-red-600 cursor-pointer' />
                    </div>
                    <hr/>
                    <div className='flex bg-slate-50 px-3 pt-2 pb-3'>
                        <BsCreditCard2Back className=' w-5 h-5 mt-3' />
                        <div className='flex flex-col px-3'>
                          <h className='text-gray-900'>Play Credit Card</h>
                          <h className='text-gray-800 text-xs'>View your Play Credit Card details and offers</h>
                        </div>
                        <AiOutlineRight className='absolute right-4 w-3 h-3 text-gray-600 mt-3 hover:text-red-600 cursor-pointer ' />
                    </div>
                    <hr/>
                    <div className='flex bg-slate-50 px-3 pt-2 pb-3'>
                        <BsChatDots className=' w-5 h-5 mt-3' />
                        <div className='flex flex-col px-3'>
                          <h className='text-gray-900'>Help & Support</h>
                          <h className='text-gray-800 text-xs'>View commonly asked queries and Chats</h>
                        </div>
                        <AiOutlineRight className='absolute right-4 w-3 h-3 text-gray-600 mt-3 hover:text-red-600 cursor-pointer ' />
                    </div>
                    <hr/>
                    <div className='flex bg-slate-50 px-3 pt-2 pb-3'>
                        <IoSettingsOutline className=' w-5 h-5 mt-3' />
                        <div className='flex flex-col px-3'>
                          <h className='text-gray-900'>Account & Settings</h>
                          <h className='text-gray-800 text-xs'>Location, Payments, Permissions & More</h>
                        </div>
                        <AiOutlineRight className='absolute right-4 w-3 h-3 text-gray-600 mt-3 hover:text-red-600 cursor-pointer ' />
                    </div>
                    <hr/>
                    <div className='flex bg-slate-50 px-3 pt-2 pb-3'>
                        <IoGiftOutline className=' w-5 h-5 mt-3' />
                        <div className='flex flex-col px-3'>
                          <h className='text-gray-900'>Rewards</h>
                          <h className='text-gray-800 text-xs'>View your rewards and unlock new ones</h>
                        </div>
                        <AiOutlineRight className='absolute right-4 w-3 h-3 text-gray-600 mt-3 hover:text-red-600 cursor-pointer ' />
                    </div>
                    <hr/>
                    <div className='flex bg-slate-50 px-3 pt-2 pb-3'>
                        <IoTicket className=' w-5 h-5 mt-2' />
                        <h className='text-gray-800 mt-1 px-3'>Book a smile</h>
                        <AiOutlineRight className='absolute right-4 w-3 h-3 text-gray-600 mt-3 hover:text-red-600 cursor-pointer' />
                    </div>
                    <hr/>
                    
                    <div className='bg-slate-50 py-20'>
                      <a>    </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Menu