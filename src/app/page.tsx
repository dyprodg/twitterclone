import Link from 'next/link';
import {BiHomeCircle, BiUser } from 'react-icons/bi';
import {BsBell, BsBookmark} from 'react-icons/bs';
import {HiOutlineHashtag} from 'react-icons/hi';
import {HiEnvelope} from 'react-icons/hi2';

const NavigationItems = [
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
    <div className='w-full h-full flex justify-center items-center'>
      <div className='max-w-screen-lg w-full h-full flex relative'>
        {/* Left Sidebar*/}
        <section className='fixed w-72 flex flex-col'>
          {
            NavigationItems.map((item) => (
              <Link className='bg-white/50 flex items-center justify-center space-x-2 rounded-full p-4' href={`/${item.title.toLocaleLowerCase()}`} key={item.title}>
                <div>
                  <item.icon />
                </div>
                <div>{item.title}</div>
              </Link>
             ))
          }
        </section>


        {/* Main Section*/}
        <main></main>


        {/* Right Section */}
        <section>right section</section>
      </div>
    </div>
  )
}
