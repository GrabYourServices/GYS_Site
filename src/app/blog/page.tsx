'use client'

// Import necessary dependencies
import Logo from '../../assets/imgs/logo.png'
import bgTemp from '../../assets/imgs/bg_temp.png'
import React from "react";
import { Typewriter } from 'react-simple-typewriter'
import '../globals.css'
import NavBarAlt from "@/components/navbar_alt";
import { FaCalendar } from "react-icons/fa";
export default function Blog() {
  const [zoomVal, setZoomVal] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      if (zoomVal > 0.99) {
        clearInterval(intervalId);
      } else {
        setZoomVal((prevZoom) => prevZoom + 0.005);
      }
    }, 0.01);

    return () => clearInterval(intervalId);
  }, [zoomVal]);

  return (
    <div className="transition duration-300 font-mainFont" style={{ transform: `scale(${zoomVal})` }}>
      <div className="mainBg z-10 fixed"></div>

      <div className="fixed z-50 w-screen flex justify-center p-4 lg:px-0 bg-transparent">
        <NavBarAlt route='/'/>
      </div>

      <div className="w-full z-20 bg-transparent relative h-full flex justify-center items-center flex-col z-50">
        <div
          id="hero"
          className="flex justify-center text-white items-center w-full min-h-screen flex-row"
        >
          <span className="text-6xl text-center md:text-4xl md:mx-8">
            <Typewriter
              words={['Writing words,', 'Changing Lives.']}
              loop={1}
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={70}
              delaySpeed={2000}
            />
          </span>
        </div>
        <div
          id="hero"
          className="flex justify-center flex-wrap text-white items-center w-full min-h-screen flex-row"
          style={{ position: "relative", zIndex: 1 }}
        >
        <div className="m-8 h-full w-[32rem] bg-transBlack shadow-xl shadow-[rgba(255,222,89,0.1)] rounded-xl border-yellow border-2 border-solid">
          <img src={bgTemp.src} className='rounded-t-xl w-full h-[18rem]'/>
          <div className="flex justify-center items-center p-4 flex-col text-left w-full">
            <h1 className='text-2xl w-full'>Heading/Title Here</h1>
            <div className="flex flex-row justify-start items-start align-middle w-full mt-4">
              <div className="badge badge-sm text-xs bg-yellow text-black py-3 mr-2">14/12/23</div>
              <div className="badge badge-sm text-xs bg-yellow text-black py-3 mr-2">25 Minutes</div>
              <div className="badge badge-sm text-xs bg-yellow text-black py-3 mr-2">4 Comments</div>
            </div>
            <p className='mt-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus est nec augue feugiat, et auctor sapien varius. Morbi tincidunt sed nulla sit amet posuere. Nulla vulputate mi consequat libero rhoncus ullamcorper. In finibus viverra mollis.
            </p>
            <button className='w-full text-black transition duration-500 bg-yellow hover:text-yellow hover:bg-black hover:scale-105 rounded-xl py-2 mt-4'>
              Read More
            </button>
          </div>
        </div>
          <div className="m-8 h-full w-[32rem] bg-transBlack shadow-xl shadow-[rgba(255,222,89,0.1)] rounded-xl border-yellow border-2 border-solid">
            <img src={bgTemp.src} className='rounded-t-xl w-full h-[18rem]'/>
            <div className="flex justify-center items-center p-4 flex-col text-left w-full">
              <h1 className='text-2xl w-full'>Heading/Title Here</h1>
              <div className="flex flex-row justify-start items-start align-middle w-full mt-4">
                <div className="badge badge-sm text-xs bg-yellow text-black py-3 mr-2">14/12/23</div>
                <div className="badge badge-sm text-xs bg-yellow text-black py-3 mr-2">25 Minutes</div>
                <div className="badge badge-sm text-xs bg-yellow text-black py-3 mr-2">4 Comments</div>
              </div>
              <p className='mt-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus est nec augue feugiat, et auctor sapien varius. Morbi tincidunt sed nulla sit amet posuere. Nulla vulputate mi consequat libero rhoncus ullamcorper. In finibus viverra mollis.
              </p>
              <button className='w-full text-black transition duration-500 bg-yellow hover:text-yellow hover:bg-black hover:scale-105 rounded-xl py-2 mt-4'>
                Read More
              </button>
            </div>
          </div>
          <div className="m-8 h-full w-[32rem] bg-transBlack shadow-xl shadow-[rgba(255,222,89,0.1)] rounded-xl border-yellow border-2 border-solid">
            <img src={bgTemp.src} className='rounded-t-xl w-full h-[18rem]'/>
            <div className="flex justify-center items-center p-4 flex-col text-left w-full">
              <h1 className='text-2xl w-full'>Heading/Title Here</h1>
              <div className="flex flex-row justify-start items-start align-middle w-full mt-4">
                <div className="badge badge-sm text-xs bg-yellow text-black py-3 mr-2">14/12/23</div>
                <div className="badge badge-sm text-xs bg-yellow text-black py-3 mr-2">25 Minutes</div>
                <div className="badge badge-sm text-xs bg-yellow text-black py-3 mr-2">4 Comments</div>
              </div>
              <p className='mt-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus est nec augue feugiat, et auctor sapien varius. Morbi tincidunt sed nulla sit amet posuere. Nulla vulputate mi consequat libero rhoncus ullamcorper. In finibus viverra mollis.
              </p>
              <button className='w-full text-black transition duration-500 bg-yellow hover:text-yellow hover:bg-black hover:scale-105 rounded-xl py-2 mt-4'>
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-6 min-h-screen flex justify-center items-center">
        <div className='flex justify-start px-2 text-white items-center w-full min-h-full flex-col' style={{ position: "relative", zIndex: 1 }}>
          <div className="flex justify-center items-center flex-col mt-8 bg-transBlack p-14 shadow-xl h-full w-full md:p-8">
            <span className="font-mainFont text-center text-5xl lg:text-3xl">Remote<span className="text-yellow"> + </span>Marketing Agency<span className="text-yellow"> = </span><br/>More <span className="border-b-4 border-solid border-yellow">Success</span> Faster.</span>
            <p className="text-lg mt-8 text-center lg:mt-4">Hey there! Ready to dive into creativity? Follow us on  <a className="text-yellow transition duration-500 hover:opacity-50" href="https://instagram.com/grabyourservices">Instagram</a> for an exclusive peek into our projects or join our newsletter squad below for an artistic adventure straight to your inbox!</p>
            <div className="flex flex-row mt-8 w-96 lg:w-full lg:flex-col">
              <input className="bg-transBlack py-2 rounded-lg px-4 border-2 border-yellow mx-2 focus:outline-none transition duration-500 hover:opacity-75 hover:cursor-pointer focus:cursor-text focus:opacity-100 lg:px-4 lg:py-3 lg:w-full" placeholder="Email (Required)"/>
              <button className='flex flex-row justify-center items-center px-8 py-3 ml-2 bg-yellow text-black rounded-xl text-black align-middle duration-500 w-2/6 hover:scale-105 lg:px-4 lg:py-3 lg:mt-4 lg:w-full'>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen mt-14 bg-black py-14 flex justify-center items-center flex-col">
        <div className="w-full flex justify-center items-center flex-row lg:flex-col lg:px-8 lg:text-center">                
          <img src={Logo.src} alt='Logo' height={200} width={200}/>
        </div>
        <h1 className="lg:mx-8 lg:text-center text-xl mt-4 text-white text-center">Copyright 2023 - GrabYourServices.<br/> All Rights Reserved</h1>
        <p>Illustration by <a href="https://icons8.com/illustrations/author/599244">Aleksey Chizhikov</a> from <a href="https://icons8.com/illustrations">Ouch!</a></p>
      </div>
    </div>
  );
}
