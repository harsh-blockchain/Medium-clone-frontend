import Image from 'next/image'
import { AiFillPlayCircle } from 'react-icons/ai'
import { IoLogoTwitter } from 'react-icons/io'
import { FaFacebook } from 'react-icons/fa'
import { GrLinkedin } from 'react-icons/gr'
import { HiOutlineLink } from 'react-icons/hi'
import { BiBookmarks } from 'react-icons/bi'
import { FiMoreHorizontal } from 'react-icons/fi'

import Author from '../static/harsh.jpg'
import hero from '../static/hero.jpg'
import banner from '../static/banner.png'

const ArticleEdit = () => {
    return (
        <div className='flex items-center justify-center flex-[3] border-l border-r'>
            <div className='h-screen scrollbar-hide  overflow-scroll p-[2rem]'>


                <div className='flex justify-between items-center mt-[2.2rem] mb-[1.2rem]'>
                    <div className='flex gap-[1rem]'>
                        <div className='h-[3rem] w-[3rem] grid center rounded-full overflow-hidden'>
                            <Image className='object-cover' src={Author} width={100} height={100} />
                        </div>

                        <div className='flex-1 flex flex-col justify-center'>
                            <div>
                                Harsh Bardhan
                            </div>

                            <div className='flex gap-[1.2rem] text-[#787878]'>
                                <span>
                                    June 15 • 7 min read   </span> <span className=' cursor-pointer hover:scale-150 flex items-center gap-[.2rem] text-[#1A8917]'><AiFillPlayCircle /> Listen
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-[1rem] text-[#787878]'>
                        <IoLogoTwitter className=' cursor-pointer hover:scale-150 text-xl' />
                        <FaFacebook className=' cursor-pointer hover:scale-150 text-xl' />
                        <GrLinkedin className=' cursor-pointer hover:scale-150 text-xl' />
                        <HiOutlineLink className=' cursor-pointer hover:scale-150 text-xl' />
                        <div className='w-[.5rem]' />
                        <BiBookmarks className=' cursor-pointer hover:scale-150 text-xl' />
                        <FiMoreHorizontal className=' cursor-pointer hover:scale-150 text-xl' />
                    </div>


                </div>

                <div className='flex flex-col gap-[1rem]'>
                    <div className='h-[24rem] w-full grid center overflow-hidden mb-[2rem]'>
                        <Image src={hero} />
                    </div>
                    <h1 className='font-bold text-3xl'>7 Free Tools to help your digital precence more impresive in 2022</h1>
                    <h4 className='font-mediumSerifItalic text-[1.4rem] text-[#292929]'>
                        <div>
                            Harsh Bardhan, June 15, 2022
                        </div>
                        <div className='font-mediumSerifItalic text-[1.4rem] text-[#292929]'>
                            Brief: Productivity is a skill that can be learned
                        </div>

                    </h4>

                    <div className='font-mediumSerif text-[1.4rem] text-[#292929]'>
                        Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleEdit