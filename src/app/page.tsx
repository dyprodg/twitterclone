import LeftSidebar from '@/components/LeftSidebar';
import Link from 'next/link';


export default function Home() {
  return (
    <div className='w-full h-full flex justify-center items-center relative bg-black'>
      <div className='max-w-screen-xl w-full h-full flex relative'>
        {/* Left Sidebar Navbar */}
        <LeftSidebar />


        {/* Main Section for Blog*/}
        <main className='ml-[320px] flex w-[700px] h-full min-h-screen flex-col border-l-[0.5px] border-r border-gray-600'>
          <h1 className='text-2xl font-bold px-4 py-2 my-4'>Home</h1>
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
        </main>
        {/* Right Section for Recommandtations and Trendings */}
        <section></section>
      </div>
    </div>
  )
}
