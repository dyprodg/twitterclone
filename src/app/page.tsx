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
          <h1 className='text-2xl font-bold p-5'>Home</h1>
        </main>
        {/* Right Section for Recommandtations and Trendings */}
        <section></section>
      </div>
    </div>
  )
}
