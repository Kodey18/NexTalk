import React from 'react'

const Home = () => {
  const now = new Date();

  const time =now.toLocaleTimeString('en-US', {
    hour : '2-digit', minute : '2-digit',
  });

  const date =(new Intl.DateTimeFormat('en-US', {dateStyle : 'full'})).format(now);

  return (
    <section className='flex size-full flex-col text-white'>
      <div className='h-[280px] w-full rounded-lg bg-hero bg-cover'>

        <div 
          className='flex flex-col h-full justify-between w-full max-md:px-10 max-md:py-8 md:p-8 lg:p-11'
        >
          <h2 
            className='font-semibold glassmorphism p-1 px-3 rounded-lg max-w-[350px] text-center'
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
    </section>
  )
}

export default Home;