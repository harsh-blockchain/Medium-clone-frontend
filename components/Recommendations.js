import Image from 'next/image'
import { useContext } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdMarkEmailUnread } from 'react-icons/md'
import ReplitLogo from '../static/replit.png'
import TutorialImg from '../static/tutorial.jpg'
import CPLogo from '../static/cp.png'
import harsh from '../static/harsh.jpg'
import JSLogo from '../static/jsLogo.png'



const Recommendations = () => {
    return (
        <div className='h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]'>
            <div className=' hover:scale-110 hover:bg-orange-400 cursor-pointer flex items-center justify-center text-sm bg-black text-white my-[2rem] py-[0.6rem] rounded-full'>
                Get Unlimited Access
            </div>

            <div className='flex items-center gap-[0.6rem] h-[2.6rem] border px-[1rem] rounded-full'>
                <AiOutlineSearch />
                <input className='border-none w-full outline-none bg-none'
                    placeholder='Search Medium'
                    type='text' />
            </div>

            <div className='my-[2rem]'>
                <div className='h-[5rem] w-[5rem] overflow-hidden rounded-full'>
                    <Image src={harsh} height={100} width={100} />
                </div>

                <div className='font-semibold mb-[.2rem] mt-[1rem] '>
                    Harsh Bardhan
                </div>

                <div className='text-[#787878]'>
                    1M Followers
                </div>

                <div className='flex space-x-4 my-[1rem]'>
                    <button className='bg-[#1A8917] text-white hover:bg-slate-200 hover:scale-125 hover:text-black px-4 py-2 rounded-full'>
                        Follow

                    </button>
                    <button className='bg-[#1A8917] text-white hover:bg-slate-200 hover:scale-125 hover:text-black px-3 py-3 rounded-full'>
                        <MdMarkEmailUnread />
                    </button>
                </div>
            </div>





            <div className='flex flex-col'>


                <div className='my-[2rem] text-xl font-bold'>
                    More From Medium
                </div>



                <div className='flex flex-col justify-between '>



                    {recommendedPosts.map(post => (


                        <div className='flex justify-between hover:bg-slate-200 p-5 hover:scale-110 rounded-lg  '>

                            <div className=' space-y-3 mr-2 flex-col  '>
                                <div className='flex space-x-2'>

                                    <div className=' items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]'>
                                        <Image src={post.author.image} height={100} width={100} />

                                    </div>
                                    <div className='text-sm text-center items-center max-w-[15rem]'>
                                        {post.author.name}
                                    </div>

                                </div>

                                <div className='font-bold max-w-[250px]'>
                                    {(post.title)}
                                </div>
                            </div>



                            <div className='flex  items-center justify-center h-[4rem] w-[4rem]'>
                                <Image src={JSLogo} height={100} width={100} className='object-cover' />
                            </div>




                        </div>

                    ))}




                </div>


            </div>


        </div>
    )
}

export default Recommendations


const recommendedPosts = [
    {
        title: 'What can you do with Replit?',
        image: ReplitLogo,
        author: {
            name: 'Clever Programmer',
            image: CPLogo,
        },
    },
    {
        title: 'The Ultimate JavaScript Course for Beginners by Clever Programmer',
        image: TutorialImg,
        author: {
            name: 'Harsh Bardhan',
            image: harsh,
        },
    },
    {
        title: 'How to Become a Developer in 2022?',
        image: JSLogo,
        author: {
            name: 'Clever Programmer',
            image: CPLogo,
        },
    },
]