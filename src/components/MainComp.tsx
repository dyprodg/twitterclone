
'use client'

import { BsChat, BsDot, BsThreeDots } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineRetweet} from 'react-icons/ai';
import { IoStatsChart, IoShareOutline } from 'react-icons/io5';

const timeline = () => {
  return (
    <main className='ml-[75px] 800:ml-[25%] flex w-[650px] 1600:w-[750px] 1800:w-[850px] h-full min-h-screen flex-col border-l-[0.5px] border-r border-gray-600 mr-12'>
          <h1 className='text-2xl font-bold px-4 py-2 my-4 backdrop-blur bg-black/10 sticky top-0 z-20'>Home</h1>
          <div className='border-t-[0.5px] border-b-[0.5px] px-4 flex items-stretch space-x-2 py-4 border-gray-600 relative'>
            <div className='w-10 h-10 bg-slate-400 rounded-full flex-none'></div>
            <div className='flex flex-col w-full'>
              <input 
                type='text' 
                placeholder="What's happening" 
                className='w-full h-full bg-transparent py-4 border-b-[0.5px] border-gray-600 outline-none border-none placeholder:text-2xl '/>
              <div className='w-full justify-between items-center flex'>
                <div>

                </div>
                <div className='w-full max-w-[100px]'>
                  <button className='rounded-full bg-primary px-4 py-2 w-full text-lg text-center hover:bg-opacity-70 transition duration-200 font-bold'>Tweet</button>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col'>
            {
              Array.from({length:5}).map((_,i)=> (
                <div key={i} className=' py-4 px-6 border-b-[0.5px] border-gray-600 flex space-x-4'>
                  <div>
                    <div className='w-10 h-10 bg-slate-200 rounded-full'/>
                  </div>
                  <div className='flex flex-col'>
                    <div className='flex items-center justify-between w-full'>
                      <div className='flex items-center space-x-1 w-full'>
                        <div className='font-bold'>Dennis Diepolder</div>
                        <div className='text-gray-500'>@dyprodg</div>
                        <div className='text-gray-500'> <BsDot /></div>
                        <div className='text-gray-500'>1 hour ago</div>
                      </div>
                      <div><BsThreeDots /></div>
                    </div>
                    <div className='text-white text-lg mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A et animi quae veniam odio expedita tempore ratione reprehenderit neque suscipit? Ex totam culpa fuga voluptates commodi fugiat excepturi nesciunt vel expedita? Veritatis perferendis dignissimos iste veniam reprehenderit quaerat delectus ea.</div>
                    <div className='bg-slate-400 aspect-square w-full h-96 rounded-xl mt-3'>
                      Media
                    </div>
                    <div className='flex items-center justify-evenly w-full mt-4'>
                      <div className='rounded-full hover:bg-white/20 transition duration-100 p-2 curser-pointer'><BsChat /></div>
                      <div className='rounded-full hover:bg-white/20 transition duration-100 p-2 curser-pointer'><AiOutlineRetweet /></div>
                      <div className='rounded-full hover:bg-white/20 transition duration-100 p-2 curser-pointer'><AiOutlineHeart /></div>
                      <div className='rounded-full hover:bg-white/20 transition duration-100 p-2 curser-pointer'><IoStatsChart /></div>
                      <div className='rounded-full hover:bg-white/20 transition duration-100 p-2 curser-pointer'><IoShareOutline /></div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </main>
  )
}

export default timeline