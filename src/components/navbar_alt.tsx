
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { BiLogoInstagram, BiLogoDiscordAlt } from 'react-icons/bi';
import { MdOutlineEmail } from "react-icons/md";
import { RxHamburgerMenu, RxCross1  } from "react-icons/rx";
import Logo from '../assets/imgs/logo.png'
import '../app/globals.css';
import { useRouter } from 'next/navigation';
import { FaCircleChevronDown } from 'react-icons/fa6'
import { motion } from 'framer-motion'
interface NavBarAltProps {
  route: string,
}

const NavBarAlt: React.FC<NavBarAltProps> = ({ route }) => {
  const router = useRouter()
  const [isToggledMenu, setIsToggledMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const hamburgerClick = (val: boolean) => {
    setIsToggledMenu(val)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      console.log('Scroll position:', scrollY);

      // Adjust the threshold as needed
      setIsScrolled(scrollY > 0);
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log('Is scrolled:', isScrolled);

  return (
    <>
      <div className={`transition duration-500 flex items-center justify-between z-10 rounded-lg border-2 px-4 py-2 w-full mx-16 lg:mx-8 ${isScrolled ? 'shadow-xl bg-transparent border-2 border-yellow rounded-lg px-4' : 'border-black'}`}>
        <div className='flex text-white items-center rounded'>
          <img src={Logo.src} height={256} alt='Logo' width={80}/>
          <div className='flex flex-row items-center lg:hidden'>
            <h1 className='mx-4 ml-8 my-2 text-sm font-mainFont transition duration-500 hover:text-yellow hover:scale-110 hover:bg-black cursor-pointer bg-yellow px-4 py-2 rounded-xl text-black' onClick={() => router.push(route)}>Go Back</h1>
          </div>
        </div>

        {/* Right-aligned container */}
        <div className='flex text-white items-center rounded lg:hidden'>
          <h1 className='mx-2 my-4 text-xl font-mainFont'><BiLogoInstagram className='transition duration-500 hover:scale-110 cursor-pointer' onClick={() => {window.open('https://instagram.com/grabyourservices')}} size={20}/></h1>
          <h1 className='mx-2 my-4 text-xl font-mainFont'><MdOutlineEmail className='transition duration-500 hover:scale-110 cursor-pointer' onClick={() => {window.open('mailto:info@grabyourservices.com')}} size={20}/></h1>
          <h1 className='mx-2 my-4 text-xl font-mainFont'><BiLogoDiscordAlt className='transition duration-500 hover:scale-110 cursor-pointer' onClick={() => {window.open('https://instagram.com/grabyourservices')}} size={20}/></h1>
        </div>
        <div className={`lgo:hidden ${isToggledMenu ? 'hidden' : ''}`}>
          <RxHamburgerMenu size={32} color='#ffffff' onClick={() => {hamburgerClick(true)}} className='transition duration-500 hover:opacity-75 cursor-pointer'/>
        </div>
        <div className={`lgo:hidden absolute top-0 left-0 h-screen w-screen bg-transYellow  ${isToggledMenu ? '' : 'lg:hidden'}`}>
          <div className='flex flex-col p-8 justify-center items-center'>
            <div className='fixed bottom-0 flex justify-center items-center h-screen w-full'>
              <div className='flex w-full top-0 right-0 fixed mr-8 mt-8 flex-row justify-end items-end'>
                <RxCross1 size={32} color='#000000' onClick={() => {hamburgerClick(false)}} className='transition duration-500 hover:opacity-75 cursor-pointer'/>
              </div>
              <div className='flex flex-col justify-center items-center font-mainFont text-2xl text-black text-center'>
                <ul>
                  <li><p className='transition duration-500 hover:opacity-50 cursor-pointer mt-2' onClick={() => {router.push('/'); hamburgerClick(false)}}>Go Back</p></li>
                  <li className='flex flex-row mt-2'>
                    <h1 className='mx-2 my-4 text-xl font-mainFont'><BiLogoInstagram className='transition duration-500 hover:scale-110 cursor-pointer' onClick={() => {window.open('https://instagram.com/grabyourservices')}} size={32}/></h1>
                    <h1 className='mx-2 my-4 text-xl font-mainFont'><MdOutlineEmail className='transition duration-500 hover:scale-110 cursor-pointer' onClick={() => {window.open('mailto:info@grabyourservices.com')}} size={32}/></h1>
                    <h1 className='mx-2 my-4 text-xl font-mainFont'><BiLogoDiscordAlt className='transition duration-500 hover:scale-110 cursor-pointer' onClick={() => {window.open('https://instagram.com/grabyourservices')}} size={32}/></h1>
                  </li> 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`transition duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'} fixed right-50 left-50 bottom-10 lg:hidden`}>
        <FaCircleChevronDown size={36} className='text-yellow animate-bounce'/>
      </div>
    </>
  );
}

export default NavBarAlt;
