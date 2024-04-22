import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import React, { ReactNode } from 'react'

const HomeLayout = ({children} : {children : ReactNode}) => {
  return (
    <main className='relative'> 
      <Navbar /> 

      <div className='flex'>
        <Sidebar />

        <section className='flex min-h-screen flex-col flex-1 px-6 pb-6 pt-28 max-md:pb-14 sm:px-14'>
          <div className='w-full'>
            {children}
          </div>
        </section>
      </div>
        
    </main>
  )
}

/* 
A layout.tsx file must require a page.tsx file to put its layout on it. Withput a page,tsx file, layout.tsx file will give an error because as it won't have any page to apply layout on.
*/

export default HomeLayout;