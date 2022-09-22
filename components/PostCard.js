import React from 'react'
import Image from 'next/image'
import logo from '../static/harsh.jpg'
import js from '../static/jsLogo.png'
import { FiBookmark } from 'react-icons/fi'

import Link from 'next/link'

const PostCard = () => {
    return (
        <Link href={'/post/123'}>
            <div>
                <div className='max-w-[46rem] h-[10rem] flex items-center gap-[1rem] cursor-pointer hover:bg-gray-200 hover:scale-110 p-6 py-24 hover:rounded-xl'>
                    <div className='flex-[2.5] flex flex-col'>
                        <div className='flex gap-[0.4rem]'>
                            <div className=' grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]'>
                                <Image className='object-cover' src={logo} width={40} height={40} />

                            </div>

                            <div className='font-semibold'>Harsh Bardhan</div>
                        </div>
                        <h1 className='font-bold text-2xl'>7 Free Tools That Will Make You More Productive in 2022</h1>
                        <div className='text-[#787878] flex items-center justify-between my-2 text-[1.2rem]'>Productivity is a skill that can be learned.</div>
                        <div className='flex justify-between items-center'>
                            <span className='text-[#302f2f]' >Jun 15 • 5 min read • <span className=' bg-slate-100 rounded-2xl px-1.5 py-1'>productivity</span> </span>
                            <span className='cursor-pointer' >
                                <FiBookmark className=' h-5 w-5' />
                            </span>



                        </div>
                    </div>

                    <div>
                        <Image height={100} width={100} src={js} className='rounded-md' />

                    </div>
                </div>




            </div>

        </Link>
    )
}

export default PostCard