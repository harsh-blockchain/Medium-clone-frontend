import React from 'react'
import Image from 'next/image'
import Medium from '../static/banner.png'
import { motion } from "framer-motion"

const Banner = () => {
    return (
        <div className='bg-[#FCC017] pb-20 border-black border-b-2 border-t-2 sm:p-4'>
            <div className=' flex flex-1 max-w-7xl  mx-auto pt-6 items-center justify-between h-max-[10rem]  '>
                <div className='space-y-5' >
                    <h1 className=' text-[6rem] font-mediumSerif'>Stay Curious</h1>

                    <h3 className='text-2xl'>Discover stories, thinking, and expertise from writers on any topic.</h3>

                    <motion.button
                        initial={{
                            opacity: 0,
                            y: 500, scale: 0.5
                        }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8 }}

                        className='mt-4 bg-black text-white px-4 py-2 rounded-2xl hover:bg-purple-700 hover:scale-110 hover:shadow-2xl'>Start Reading</motion.button>
                </div>

                <motion.div className=''
                    initial={{
                        opacity: 0,
                        y: 500, scale: 0.5
                    }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <Image src={Medium} height={400} width={500} />
                </motion.div>

            </div>
        </div>
    )
}

export default Banner