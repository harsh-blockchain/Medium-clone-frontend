import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SmallLogo from '../static/smallLogo.png'
import { HiOutlineHome } from 'react-icons/hi'
import { FiBell } from 'react-icons/fi'
import { BiBookmarks } from 'react-icons/bi'
import { RiArticleLine } from 'react-icons/ri'
import { BsPencilSquare } from 'react-icons/bs'
import Harsh from '../static/harsh.jpg'


const styles = {
    wrapper: `w-[5rem] h-screen flex flex-col justify-between items-center p-[1rem]`,
    logoContainer: `cursor-pointer  hover:scale-125 hover:p-x-5 hover:rounded-xl`,
    iconsContainer: `flex-1 flex flex-col justify-center gap-[1.4rem] text-3xl text-[#787878] `,
    divider: `border-b`,
    profileImageContainer: `w-[2.4rem] h-[2.4rem] rounded-full overflow-hidden grid place-items-center `,
    profileImage: `object-cover hover:scale-150`,
}

const readersNav = () => {
    return (
        <div className={styles.wrapper}>
            <Link href='/'>
                <div className={styles.logoContainer}>
                    <Image src={SmallLogo} alt='medium small logo' />
                </div>
            </Link>
            <div className={styles.iconsContainer}>
                <HiOutlineHome className=' cursor-pointer hover:scale-150 ' />
                <FiBell className=' cursor-pointer hover:scale-150 ' />
                <BiBookmarks className=' cursor-pointer hover:scale-150 ' />
                <RiArticleLine className=' cursor-pointer hover:scale-150 ' />
                <div className={styles.divider} />
                <BsPencilSquare className=' cursor-pointer hover:scale-150 ' />
            </div>
            <div className={styles.profileImageContainer}>
                <Image
                    className={styles.profileImage}
                    src={Harsh}
                    alt='profile image icons'
                />
            </div>
        </div>
    )
}


export default readersNav