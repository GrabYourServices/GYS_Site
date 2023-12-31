'use client'

// Import necessary dependencies
import { useRef } from "react";
import React from "react";
import { Typewriter } from 'react-simple-typewriter'
import NavBar from "@/components/navbar";
import './globals.css'
import { FaCheckCircle  } from "react-icons/fa";
import spaceBg from '../assets/imgs/c4f1e637-6d5f-4d61-b476-37ef8aca6dba.png'
import Accordion from "@/components/accordilian";
const items = [
  {
    title: 'Branding Services',
    content: 'Brand Strategy | Logo Design | Brand Identity Design | Brand Guidelines',
  },
  {
    title: 'Graphic Design Services',
    content: 'Print Collateral | Digital Graphics | Packaging Design | Infographics | Illustrations',
  },
  {
    title: 'Website Development Services',
    content: 'Website Development | Responsive Design | Website Maintenance | Search Engine Optimization (SEO)',
  },
  {
    title: 'Marketing Services',
    content: 'Social Media Management| Content Creation | Email Marketing| Analytics and Reporting',
  },
  {
    title: 'Consultation & Training',
    content: 'Brand Consultation | Training Programs',
  },
];

// Define the Home component
export default function Home() {
  const homePage = useRef<HTMLDivElement | null>(null)
  const servicesPage = useRef<HTMLDivElement | null>(null)
  const workPage = useRef<HTMLDivElement | null>(null)
  const pricingPage = useRef<HTMLDivElement | null>(null)
  const getTargetRef = (sectionId: string) => {
    switch (sectionId) {
      case 'homePage':
        return homePage;
      case 'servicesPage':
        return servicesPage;
      case 'workPage':
        return workPage;
      case 'pricingPage':
        return pricingPage;
      default:
        return null;
    }
  };
  const scrollToSection = (sectionId: string) => {
    const targetRef = getTargetRef(sectionId);

    const scrollToTarget = () => {
    
      if (targetRef) {
        const targetElement = targetRef.current;
        if(targetElement) {
          targetElement.style.scrollBehavior = 'smooth';
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      
          // Reset scroll behavior after the scroll
          setTimeout(() => {
            targetElement.style.scrollBehavior = 'auto';
          }, 1000); // Adjust the timeout as needed
        }
      }
    };
    scrollToTarget()
  };
  return (
    <div className='font-mainFont'>
      <div className="mainBg absolute"></div>
      <div className="fixed z-50 w-screen flex justify-center p-4 lg:px-0">
        <NavBar scrollToSection={scrollToSection}/>
      </div>
      <div ref={homePage} id="homePage" className="flex justify-center text-white items-center w-full min-h-screen flex-row" style={{ position: "relative", zIndex: 1 }}>
        <span className="text-6xl text-center md:text-4xl md:mx-8">
          <Typewriter
            words={['Launching Brands Beyond Boundaries.', 'Grab Your Services.', 'Your Remote Marketing Universe.']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={70}
            delaySpeed={2000}
          />
        </span>
      </div>
      <div className='flex justify-center text-white items-center w-full min-h-screen flex-row'>
        <div className="flex justify-start text-white items-start ml-20 w-1/2 lg:w-full lg:mx-8 min-h-full flex-col lg:text-center">
          <span className="absolute lg:relative  font-bold text-5xl lg:text-3xl lg:font-normal">Introducing Your Marketing Ally - <span className="text-yellow">GYS</span>!</span>
          <span className="lg:hidden relative font-bold text-5xl">&nbsp;</span>
          <p className=" font-mainFont text-lg mt-6">Meet GYS aka Grab Your Services, the go-to creative powerhouse for brands seeking exceptional design, branding, and website development. We're not just a service – we're your creative partner in the digital realm.
<br/>
Ditch the hassle of sluggish and pricey agencies; we're your shortcut to top-notch design and marketing solutions. Unleash the power of a global team of creative wizards, effortlessly accessible and committed to bringing your brand to life. Say goodbye to delays, hello to unparalleled reliability, and scale up your creative endeavors with GYS. Your brand deserves the best – and we're here to deliver it, faster and with flair. Let's redefine what's possible in the world of remote marketing together!</p>
          <div className="w-full h-auto flex items-center justify-center flex-row lg:flex-col">
            <button className='flex w-1/2 lg:w-full flex-row justify-center mr-4  items-center px-8 py-3 mt-8 border-yellow border-2 bg-yellow rounded-xl font-mainFont text-black align-middle duration-500 hover:scale-110 lg:m-0 lg:mt-4'>Get a Quote</button>
            <button className='flex w-1/2 lg:w-full flex-row justify-center ml-4 items-center px-8 py-3 mt-8 border-yellow text-yellow text-lg border-2 rounded-xl text-black align-middle duration-500 hover:scale-110 lg:m-0 lg:mt-4'>Services</button>
          </div>
        </div>
        <div className="lg:hidden flex mt-10 justify-end text-white items-center w-1/2 min-h-full flex-col p-20">
          <img src={spaceBg.src} width={spaceBg.width} height={spaceBg.height} className="animate-grow" alt='space'/>
        </div>
      </div>
      <div ref={servicesPage} id='servicesPage' className="pt-6">
        <div className='flex justify-start px-2 text-white items-center w-full min-h-full flex-col' style={{ position: "relative", zIndex: 1 }}>
          <div className="flex flex-col mt-8 bg-transBlack p-14 shadow-xl h-full w-full md:p-8">
            <span className="mb-8 .font-mainFont text-center text-5xl">The <span className="text-yellow">Services </span>You <span className="border-b-4 border-solid border-yellow">Need</span>.</span>
            <Accordion items={items}/>
            <button className='flex flex-row justify-center items-center px-8 py-3 mt-8 mx-4 border-2 border-yellow text-yellow rounded-xl text-black align-middle duration-500 hover:scale-105'>Get a Quote</button>
          </div>
        </div>
      </div>
      <div ref={workPage} id='workPage' className="pt-6 min-h-screen flex justify-center items-center">
        <div className='flex justify-start px-2 text-white items-center w-full min-h-full flex-col' style={{ position: "relative", zIndex: 1 }}>
          <div className="flex justify-center items-center flex-col mt-8 bg-transBlack p-14 shadow-xl h-full w-full md:p-8">
            <span className="font-mainFont text-center text-5xl lg:text-3xl">Remote<span className="text-yellow"> + </span>Marketing Agency<span className="text-yellow"> = </span><br/>More <span className="border-b-4 border-solid border-yellow">Success</span> Faster.</span>
            <p className="text-lg mt-8 text-center lg:mt-4">Hey! Interested? Follow us on our <a className="text-yellow transition duration-500 hover:opacity-50" href="https://instagram.com/grabyourservices">Instagram</a> to keep up to date with the projects we do, or join our news letter below</p>
            <div className="flex flex-row mt-8 w-96 lg:w-full">
              <input className="w-4/6 bg-white rounded-xl text-base-300 font-bold font-secondaryFont px-4 py-2 transition duration-500 hover:opacity-75 focus:outline-none focus:opacity-100" placeholder="Your E-mail"></input>
              <button className='flex flex-row justify-center items-center px-8 py-3 ml-2 bg-yellow text-black rounded-xl text-black align-middle duration-500 w-2/6 hover:scale-105'>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div ref={pricingPage} id='pricingPage' className="pt-6 min-h-screen flex justify-center items-center w-screen">
        <div className='flex justify-start px-2 text-white items-center w-full min-h-full flex-col w-full' style={{ position: "relative", zIndex: 1 }}>
          <div className="flex justify-center items-center flex-col mt-8 bg-transBlack p-14 shadow-xl h-full w-full md:p-8 w-full">
            <span className="font-mainFont text-center text-5xl lg:text-3xl">Pricing<span className="text-yellow"> Better </span>Than any Other.</span>
            <div className="flex flex-row justify-center items-center w-full mt-12">
              <div className="flex flex-row lg:flex-col justify-center items-center w-full mt-20">
                <div className="w-4/12 lg:w-full lg:mx-8 flex justify-center items-center border-2 border-white rounded-xl flex-col">
                  <div className="flex flex-row top-0 m-0">
                  </div>
                  <div className="flex flex-col justify-center items-center mx-8 my-8 w-full">
                    <h1 className="text-4xl text-yellow mt-4">Astral</h1>
                    <div className="flex mt-6 flex-col justify-center items-center px-8 text-center">
                      <p className="text-xl">Starting at <span className="text-yellow">$299</span>/mo</p>
                      <p className="text-lg">Best for startups.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-5 w-full">
                      <ul className="flex justify-center items-center flex-col w-5/6 text-center">
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white"><p className="text-yellow font-mainFont">Brand Strategy</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-yellow font-mainFont">Logo Design</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-yellow font-mainFont">Brand Identity Design</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-yellow font-mainFont">Digital Graphics</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-yellow font-mainFont">Website Development & Maintenance(Non E-Commerce)</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-yellow font-mainFont">Social Media & Content Marketing</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-base-100 font-mainFont">Analytics & Reporting</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-base-100 font-mainFont">Infographics & Illustrations</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-base-100 font-mainFont">SEO</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-base-100 font-mainFont">Brand Guidelines</p></li>
                        <li className="w-full flex flex-row justify-center items-center mt-4"><p className="text-base-100 font-mainFont">Consultation & Training</p></li>
                      </ul>
                    </div>
                    <button className="mt-8 w-5/6 text-black bg-yellow rounded-lg px-4 py-3 transition duration-500 hover:scale-110">Get a Quote</button>
                  </div>
                </div>
                <div className="w-4/12 lg:w-full lg:mx-8 flex scale-110 lg:scale-100 lg:my-8 justify-center mx-8 items-center border-2 border-yellow rounded-xl flex-col">
                  <div className="flex flex-row top-0 m-0">
                  </div>
                  <div className="flex flex-col justify-center items-center mx-8 my-8 w-full">
                    <h1 className="text-4xl text-yellow mt-4">Cosmic</h1>
                    <div className="badge bg-yellow text-black p-3 mt-2 text-xs">POPULAR</div>
                    <div className="flex mt-6 flex-col justify-center items-center px-8 text-center">
                      <p className="text-xl">Starting at <span className="text-yellow">$999</span>/mo</p>
                      <p className="text-lg">Best for growing and expanding businesses.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-5 w-full">
                      <ul className="flex justify-center items-center flex-col w-5/6 text-center">
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white"><p className="text-yellow font-mainFont">Brand Strategy</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-yellow font-mainFont">Logo Design</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-yellow font-mainFont">Brand Identity Design</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-yellow font-mainFont">Digital Graphics</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-yellow font-mainFont">Website Development & Maintenance(Incl. E-Commerce)</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-yellow font-mainFont">Social Media & Content Marketing</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-yellow font-mainFont">Analytics & Reporting</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-yellow font-mainFont">Infographics & Illustrations</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-yellow font-mainFont">SEO</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-yellow font-mainFont">Brand Guidelines</p></li>
                        <li className="w-full flex flex-row justify-center items-center mt-4"><p className="text-yellow font-mainFont">Consultation & Training</p></li>
                      </ul>
                    </div>
                    <button className="mt-8 w-5/6 text-black bg-yellow rounded-lg px-4 py-3 transition duration-500 hover:scale-110">Get a Quote</button>
                  </div>
                </div>
                <div className="w-4/12 lg:w-full lg:mx-8 flex justify-center items-center border-2 border-white rounded-xl flex-col">
                  <div className="flex flex-row top-0 m-0">
                  </div>
                  <div className="flex flex-col justify-center items-center mx-8 my-8 w-full">
                    <h1 className="text-4xl text-yellow mt-4">Stellar</h1>
                    <div className="flex mt-6 flex-col justify-center items-center px-8 text-center">
                      <p className="text-xl">Starting at <span className="text-yellow">$299</span>/mo</p>
                      <p className="text-lg">Best for running and stable businesses.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-5 w-full">
                      <ul className="flex justify-center items-center flex-col w-5/6 text-center">
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white"><p className="text-yellow font-mainFont">Brand Strategy</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-yellow font-mainFont">Logo Design</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-yellow font-mainFont">Brand Identity Design</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-yellow font-mainFont">Digital Graphics</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-yellow font-mainFont">Website Development & Maintenance(Non E-Commerce)</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-yellow font-mainFont">Social Media & Content Marketing</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-yellow font-mainFont">Analytics & Reporting</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-yellow font-mainFont">Infographics & Illustrations</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-base-100 font-mainFont">SEO</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-base-100 font-mainFont">Brand Guidelines</p></li>
                        <li className="w-full flex flex-row justify-center items-center mt-4"><p className="text-base-100 font-mainFont">Consultation & Training</p></li>
                      </ul>
                    </div>
                    <button className="mt-8 w-5/6 text-black bg-yellow rounded-lg px-4 py-3 transition duration-500 hover:scale-110">Get a Quote</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
