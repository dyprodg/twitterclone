import Link from 'next/link';
import {BiHomeCircle, BiUser } from 'react-icons/bi';
import {BsBell, BsBookmark, BsEnvelope, BsThreeDots, BsTwitter} from 'react-icons/bs';
import {HiOutlineHashtag} from 'react-icons/hi';


const NavigationItems = [
  {
    title: 'Twitter',
    icon: BsTwitter
  },
  {
    title: 'Home',
    icon: BiHomeCircle 
  },
  {
    title: 'Expolore',
    icon: HiOutlineHashtag
  },
  {
    title: 'Notifications',
    icon: BsBell
  },
  {
    title: 'Messages',
    icon: BsEnvelope
  },
  {
    title: 'Bookmarks',
    icon: BsBookmark
  },
  {
    title: 'Profile',
    icon: BiUser
  }
]

const LeftSidebar = () => {
  return (
    <section className='fixed  flex flex-col items-stretch h-screen'>
    <div className='flex flex-col items-stretch h-screen space-y-4 my-4'>
    {
      NavigationItems.map((item) => (
        <Link className='hover:bg-white/20 text-2xl transition duration-200 flex items-center justify-start space-x-2 rounded-full py-2 px-6' href={`/${item.title.toLocaleLowerCase()}`} key={item.title}>
          <div>
            <item.icon />
          </div>
          {item.title !== "Twitter" && <div className='hidden 800:block'>{item.title}</div>}
        </Link>
       ))}
       <button className='hidden 800:block w-[180px] lg:w-60 rounded-full m-4 bg-primary p-4 text-xl text-center hover:bg-opacity-70 transition duration-200'>Tweet</button>
    </div>
        {/* Profilbutton */}
    <button className='rounded-full flex items-center justify-between space-x-2  bg-transparent p-4 text-2xl text-center hover:bg-white/20 transition duration-200 800:w-[200]'>
      
      <div className='flex items-center space-x-2'>  
      <div className='rounded-full bg-slate-400 w-10 h-10 '>
        </div>
        <div className='text-left text-sm'>
          <div className='font-semibold hidden 950:block'>Dennis Diepolder</div>
          <div className='hidden 800:block'>@dyprodg</div>
        </div>
      </div>
      
      <div className='hidden 800:block'>
        <BsThreeDots />
      </div>
    </button>

  </section>
  )
}

export default LeftSidebar