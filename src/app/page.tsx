import LeftSidebar from '@/components/LeftSidebar';
import MainComp from '@/components/MainComp';
import RideSidebar from '@/components/RideSidebar';


export default function Home() {
  return (
    <div className='w-full h-full flex justify-center items-center relative bg-black'>
      <div className='max-w-screen-xl w-full h-full flex relative'>
        <LeftSidebar />
        <MainComp />
        <RideSidebar />



        
      </div>
    </div>
  )
}
 