import Link from 'next/link';
import {BiHomeCircle, BiUser } from 'react-icons/bi';
import {BsBell, BsBookmark, BsTwitter} from 'react-icons/bs';
import {HiOutlineHashtag} from 'react-icons/hi';
import {HiEnvelope} from 'react-icons/hi2';

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
    icon: HiEnvelope
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

export default function Home() {
  return (
    <div className='w-full h-full flex justify-center items-center relative bg-black'>
      <div className='max-w-screen-xl w-full h-full flex relative'>
        {/* Left Sidebar Navbar */}
        <section className='fixed w-[275px] flex flex-col h-screen space-y-4 my-4'>
          {
            NavigationItems.map((item) => (
              <Link className='hover:bg-white/20 text-2xl transition duration-200 flex items-center justify-start space-x-2 rounded-full py-2 px-6' href={`/${item.title.toLocaleLowerCase()}`} key={item.title}>
                <div>
                  <item.icon />
                </div>
                {item.title !== "Twitter" && <div>{item.title}</div>}
              </Link>
             ))}
             <button className='w-full rounded-full m-4 bg-primary p-4 text-xl text-center hover:bg-opacity-70 transition duration-200'>Tweet</button>
        </section>


        {/* Main Section for Blog*/}
        <main></main>


        {/* Right Section for Recommandtations and Trendings */}
        <section></section>
      </div>
    </div>
  )
}
