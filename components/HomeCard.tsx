import { cn } from '@/lib/utils';
import Image from 'next/image'
import React from 'react'


/* 
Specifying types of all the prop.
*/
interface HomeCardsProps{
    img : string,
    className : string,
    title : string,
    description : string,
    handleClick : () => void,
}

const HomeCard = ({img, className, title, description, handleClick} : HomeCardsProps) => {
  return (
 
    <div 
        className={cn('bg-orange-1 px-4 py-6 min-h-[260px] xl:max-w-[270px] rounded-lg cursor-pointer w-full flex flex-col justify-between', className)}
        onClick={handleClick} 
    >       
    {/* Here as soon as we add the onclick we got an error because adding the client interactions likes hooks, events listeners etc makes it client side component.*/}
        <div className='glassmorphism size-12 flex items-center justify-center rounded-[10px]'>
            <Image 
                src={img}
                width={27}
                height={27}
                alt='add meet'
            />
        </div>

        <div className='flex flex-col gap-1'>
            <h1 className='font-bold text-2xl'>
                {title}
            </h1>
            <p className='font-medium text-lg'>
                {description}
            </p>
        </div>
    </div>
  );
}

export default HomeCard