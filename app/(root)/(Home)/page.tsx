import MeetingTypeList from '@/components/MeetingTypeList';
import React from 'react'

const Home = () => {
  const now = new Date();

  const time =now.toLocaleTimeString('en-US', {
    hour : '2-digit', minute : '2-digit',
  });

  const date =(new Intl.DateTimeFormat('en-US', {dateStyle : 'full'})).format(now);

  return (
    <section className='flex size-full flex-col text-white'>
      {/* Below is the hero image */}
      <div className='h-[300px] w-full rounded-lg bg-hero bg-cover mb-10'>

        <div 
          className='flex flex-col h-full justify-between w-full max-md:px-10 max-md:py-8 md:p-8 lg:p-11'
        >
          <h2 
            className='font-semibold glassmorphism text-xl p-1 px-3 rounded-lg max-w-[350px] text-center'
          >
            Upcoming Meeting at 12:30 PM
          </h2>

          <div className='flex flex-col gap-2'>
            <h1 className='font-[1000] text-6xl'>
              {time}
            </h1>
            <p className='text-lg font-medium'>
              {date}
            </p>
          </div>

        </div>

      </div>

    {/* 
    Reason we are directly not coding our meeting type list page directly in the  homepage is because meeting type age will be rendered on the client side therefore ned to use "use client" but other than that pur homepage is not required to be rendered on client side so we can't use "use client" directly in the home page.
    */}
      <MeetingTypeList />
    </section>
  )
}

export default Home;