'use client';

import React from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from 'next/image';
import Link from 'next/link';
import { sideBarLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';


const MobileNav = () => {
  const pathName = usePathname();
  
  return (
    <div>
      {/*Here sheet is used as a hamburger menu for small devices*/}
      <Sheet>
        <SheetTrigger asChild>
          <Image 
            src = "/icons/hamburger.svg"
            width={36}
            height={36}
            alt='hamburger'
            className='cursor-pointer sm:hidden'
          />
        </SheetTrigger>
        <SheetContent side={'left'} className='bg-dark-1 border-none'>
          <Link
            href={`/`}
            className='flex items-center gap-1 text-white'
          >
            <Image 
              src="/icons/logo.svg"
              alt='NexTalk'
              width={38}
              height={38}
              className='max-sm:size-10'
            />
            <p className='font-extrabold text-[26px]'>NexTalk</p>
          </Link>

          <div className='flex h-[calc(100vh-72px)] flex-col gap-[20px] text-white py-[50px] overflow-y-auto'>
            {sideBarLinks.map((link, index) => {
                  let isActive = link.route === pathName;

                  return(
                      <SheetClose asChild key={link.label}>
                        <Link
                          href={link.route}
                          key={index}
                          /*
                          here cn stands for classNames which is used for adding multiple and dynamic tailwind css classes.
                          */
                          className={cn('flex gap-4 items-center p-4 rounded-lg w-full', {
                              'bg-blue-700': isActive,
                          })}
                        >
                            <Image 
                                src={link.iconUrl}
                                alt={link.label}
                                width={20}
                                height={20}
                            />
                            <p className='text-lg font-semibold'>
                                {link.label}
                            </p>
                        </Link>
                      </SheetClose>
                  );
              })}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav