import react from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import PostCard from '../components/PostCard'
import Head from 'next/head'
import { AiFillHeart } from 'react-icons/ai'


export default function Home() {
  return (

    <div className='scrollbar-hide overflow-scroll'>
      <Head><title>Medium-Firebase</title></Head>



      <div className='mx-auto scrollbar-hide overflow-scroll'>
        <Header />
        <Banner />

        <div className='flex justify-center'>

          <div className='max-w-7xl flex-1 '>
            <div className='flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap-6
        md:p-6 lg:grid-cols-3 space-y-3'>
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
          </div>
        </div>
        <div>
          <footer className='flex items-center space-x-3 justify-end pr-24 text-2xl p-3'>
            <div>Made with </div>

            <span className=''> <AiFillHeart className='text-red-500' /> </span>
            <div>by</div>
            <div className=' uppercase'>Harsh Bardhan</div>


          </footer>
        </div>

      </div>
    </div>

  )
}
