import React from 'react'
import { BsSearch }from 'react-icons/bs'




const RideSidebar = () => {
  return (
    <section className='fixed right-0  flex-col max-w-[30%] items-stretch h-screen px-6 hidden 1400:block'>
          {/* Search Box */}
          <div className='mt-2'>
            <div className='relative w-full h-full group' >
            <input 
              id='searchBox' 
              type='text' 
              placeholder='Search Twitter' 
              className='outline-none peer focus:border-primary border border-black placeholder:px-2 bg-neutral-800/90 w-full h-full rounded-full py-4 px-8' />
            <label htmlFor='searchBox' className='absolute top-0 left-0 h-full flex items-center justify-center px-3 text-gray-500 peer-focus:text-primary'>
              <BsSearch className='w-5 h-5' />
            </label>
            </div>
          </div>
          {/* Trending */}
          <div className='flex flex-col rounded-xl bg-neutral-800 my-3'>
            <h3 className='font-bold text-xl my-2 py-2 px-4'>Whats happening</h3>
            <div>
              {
                Array.from({length: 5}).map((_,i)=>(
                  <div key={i} className='hover:bg-white/10 transition duration-100 p-4'>
                    <div className='font-bold text-lg'>#trending ${i+1}</div>
                    <div className='text-xs text-neutral-400'>35.5k</div>
                  </div>
                ))
              }
            </div>
          </div>

          {/* Follow Rec */}
          <div className='flex flex-col rounded-xl bg-neutral-800 my-3'>
            <h3 className='font-bold text-xl my-2 py-2 px-4'>Who to follow</h3>
            <div>
              {
                Array.from({length: 3}).map((_,i)=>(
                  <div key={i} className='flex justify-between items-center'>

                    <div  className='flex hover:bg-white/10 transition duration-100 p-4 space-x-3 items-center'>
                      <div className='w-10 h-10 bg-neutral-600 rounded-full'></div>
                      <div className='flex flex-col'>
                        <div className='font-bold text-white'>Other User</div>
                        <div className='text-neutral-400'>@otheruser1234</div>
                      </div>
                    </div>
                    
                    <div>
                      <button className='rounded-full px-6 py-2 mx-4 bg-white text-black'>Follow</button>
                    </div>

                  </div>
                ))
              }
            </div>
          </div>



        </section>
  )
}

export default RideSidebar