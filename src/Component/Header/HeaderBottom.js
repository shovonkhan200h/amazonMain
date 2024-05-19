import React, { useEffect, useRef, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from "framer-motion"

import SideNavContent from './SideNavContent';

const HeaderBottom = () => {
    const [sideBar, setSideBar] = useState(false)
    const ref =useRef()
    useEffect(()=>{
        document.body.addEventListener('click',(e)=>{
            if(e.target.contains(ref.current)){
                setSideBar(false)
            }
        })
    },[ref,sideBar])
    return (
        <div className='w-full px-4 h-[36px] bg-amazon_light text-white flex items-center'>
            <ul className='flex items-center gap-2 text-sm tracking-wide'>
                <li className='headerHover flex gap-1' onClick={() => setSideBar(true)}><MenuIcon />All</li>
                <li className='headerHover hidden md:inline-flex'>Today Deals</li>
                <li className='headerHover hidden md:inline-flex'>Customer Service</li>
                <li className='headerHover hidden md:inline-flex'>Gift Cards</li>
                <li className='headerHover hidden md:inline-flex'>Registry</li>
                <li className='headerHover hidden md:inline-flex'>Sell</li>
            </ul>

            {
                sideBar &&
                (<div className='w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50'>
                    <div className='w-full h-full relative'>
                        <motion.div ref={ref} initial={{ x: -500, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ x: 0, opacity: 1 }} className='w-[350px] h-full bg-white border broder-black'>
                            <div className='w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4'>
                                <AccountCircleIcon />
                                <h3>Hello Sign In</h3>
                            </div>

                            <SideNavContent
                                title='Digital Content & Devices'
                                one='Amazon Music'
                                two='Kindle E-reades & Books'
                                three='Amazon AppStore'
                            />

                            <SideNavContent
                                title='Shop By Department'
                                one='Electronics'
                                two='Computers'
                                three='Smart Home'
                            />

                            <SideNavContent
                                title='Programs and Features'
                                one='Gift Cards'
                                two='Amazon Live'
                                three='Conact Us'
                            />

                            <SideNavContent
                                title='Help & Settings'
                                one='Your Account'
                                two='Customer Services'
                                three='Contact us'
                            />

                            <span className='curson-pointer absolute top-0 left-[360px] w-10 h-10 text-black flex items-center justify-center border bg-grey-200 hover:bg-red-500 hover:text-white duration-300'>
                                <CloseIcon onClick={() => setSideBar(false)} />
                            </span>
                        </motion.div>

                    </div>
                </div>)
            }
        </div>
    );
};

export default HeaderBottom;