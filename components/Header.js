import React from 'react'
import Image from 'next/image'
import logo from '../static/logo.png'
import { motion } from "framer-motion"

const Header = () => {
    return (
        <div className='py-3 border-gray-300 bg-[#FCC017]'>
            <div className='flex flex-1 items-center justify-between max-w-7xl mx-auto'>

                <motion.div className='  cursor-pointer rounded-xl py-2 hover:bg-yellow-300 hover:scale-110 hover:snap-x ' id='logo'
                    initial={{
                        opacity: 0,
                        x: -500, scale: 0.5
                    }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.8 }}

                >
                    <Image src={logo} height={45} width={200} />
                </motion.div>

                <motion.div id='banner'
                    initial={{
                        opacity: 0,
                        x: 500, scale: 0.5
                    }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.8 }}

                    className='items-center flex space-x-6'
                >
                    <div className=' hover:scale-110 hover:bg-slate-200 hover:rounded-2xl hover:py-2 hover:px-4 cursor-pointer text-bold text-xl'>Our Story</div>
                    <div className='hover:scale-110 hover:bg-slate-200 hover:rounded-2xl hover:py-2 hover:px-4 cursor-pointer text-bold text-xl' >Membership</div>
                    <div className='hover:scale-110 hover:bg-slate-200 hover:rounded-2xl hover:py-2 hover:px-4 cursor-pointer text-bold text-xl'>Sign in</div>
                    <div className=' bg-gray-800 text-white rounded-3xl cursor-pointer hover:scale-110 px-4 py-2 items-center'>Get Started</div>
                </motion.div>

            </div>
        </div>
    )
}

export default Header