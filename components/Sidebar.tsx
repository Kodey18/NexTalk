'use client'

import { sideBarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Sidebar = () => {
    /*
    Here usePathname hook is used to get the pathname of current page which will be different for every user on their own devices. so thatswhy we have to use the "usePathname" hook that relies on the users device. Thatswhy this component has to be rendered on client side (CSR).
    */

    const pathName = usePathname();

  return (
    <div className='sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]'>

        <div className='flex flex-1 flex-col gap-6'>

            {sideBarLinks.map((link, index) => {
                let isActive = link.route === pathName;

                return(
                    <Link
                        href={link.route}
                        key={index}
                        /*
                        here cn stands for classNames which is used for adding multiple and dynamic tailwind css classes.
                        */
                        className={cn('flex gap-4 items-center p-4 rounded-lg justify-start', {
                            'bg-blue-700': isActive,
                        })}
                    >
                        <Image 
                            src={link.iconUrl}
                            alt={link.label}
                            width={24}
                            height={24}
                        />
                        <p className='text-lg font-semibold max-lg:hidden'>
                            {link.label}
                        </p>
                    </Link>
                );
            })}

        </div>

    </div>
  )
}

export default Sidebar