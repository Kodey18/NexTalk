import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, SignIn, UserButton } from '@clerk/nextjs'
import { Variable } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='fixed flex-between flex justify-between items-center z-50 w-full bg-dark-1 px-6 py-3 lg:px-10'>
      <Link
        href={`/`}
        className='flex items-center gap-1 text-white'
      >
        <Image 
          src="/icons/logo.svg"
          alt='NexTalk'
          width={36}
          height={36}
          className='max-sm:size-10'
        />
        <p className='max-sm:hidden font-extrabold text-[22px]'>NexTalk</p>
      </Link>

      <div className='flex-between gap-5'>
        {/*Clerk user-management*/}
        <SignedIn>
          <UserButton
           appearance={{
            variables:{
              // colorPrimary : "#fff",
              colorText : "#fff"
            }
           }
          }
          />
        </SignedIn>
        
        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar