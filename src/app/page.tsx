'use client'

// Import necessary dependencies
import { ChangeEvent, useEffect, useRef, useState } from "react";

import oc from '../assets/imgs/oc.jpg'
import oringo from '../assets/imgs/oringo.jpeg'
import riztax from '../assets/imgs/riztax.png'
import willow from '../assets/imgs/willow.png'
import React, { CSSProperties } from "react";
import { Typewriter } from 'react-simple-typewriter'
import NavBar from "@/components/navbar";
import './globals.css'
import spaceBg from '../assets/imgs/c4f1e637-6d5f-4d61-b476-37ef8aca6dba.png'
import Accordion from "@/components/accordilian";
import { BiLogoInstagram, BiLogoDiscordAlt } from 'react-icons/bi';
import { MdOutlineEmail } from "react-icons/md";
import Logo from '../assets/imgs/logo.png'
import Dropdown from "@/components/dropdown";
import { Testemonial, TestimonialProps } from "@/components/testemonial";
interface DropdownProps {
  buttonLabel: string;
  onSelect: (item: string) => void;
  items: string[];
}
const testemonials: TestimonialProps[] = [
  {
    name: 'Odessys',
    desc: 'Oman',
    testimonial: 'GYS has been a game-changer for Odessys, our marketing agency in Oman. Their remote marketing solutions have brought a fresh perspective to our campaigns, leading to increased client engagement and business growth. The professionalism and commitment displayed by GYS have made them an invaluable extension of our team. We highly recommend their services.',
    imgUri: 'https://i.imgur.com/YAIi5TX.jpg',
  },
  {
    name: 'Sunny Commerce',
    desc: 'Malaysia',
    testimonial: 'Sunny Commerce, operating with a diverse range of mother companies in Malaysia, has experienced a remarkable transformation in its online presence and lead generation thanks to GYS. Their remote marketing strategies are not only effective but also tailored to our unique business model. GYS has proven to be a reliable partner, consistently delivering outstanding results.',
    imgUri: 'https://i.imgur.com/fvvQuAt.jpg',
  },
  {
    name: 'Willow Marketing',
    desc: 'Pakistan',
    testimonial: "Willow Marketing, based in Pakistan, is thrilled with the remote marketing services provided by GYS. Their team's expertise and attention to detail have significantly contributed to our brand's visibility and customer engagement. GYS has become an integral part of our marketing efforts, and we look forward to continued success together.",
    imgUri: willow.src,
  },
  {
    name: 'Riztax Solution',
    desc: 'Canada',
    testimonial: "GYS has been instrumental in elevating Riztax Solutions' online presence. Since partnering with them, our Canadian tax consulting firm has seen increased visibility and quality leads. GYS's tailored and prompt remote marketing services have made them an invaluable asset to our growth. Highly recommended!",
    imgUri: riztax.src,
  },
  {
    name: 'Oringo Fashion',
    desc: 'Germany',
    testimonial: "GYS has been a key player in elevating the online presence of Oringo Fashion, our fashion company based in Germany. Their remote marketing strategies are not only innovative but also aligned with our brand identity. We appreciate GYS's commitment to delivering results and would recommend their services to any business seeking impactful marketing solutions.",
    imgUri: oringo.src,
  },
  {
    name: 'Ordered Chaos',
    desc: 'Pakistan',
    testimonial: "Thanks to GYS, Ordered Chaos, our textile fashion brand in Pakistan, has experienced a remarkable boost in online engagement. GYS's exceptional product photography services and captivating social media posts have truly set our brand apart. Their remote marketing expertise has not only elevated our visual presence but also significantly contributed to increased sales. We highly recommend GYS for their creativity, professionalism, and impactful marketing services.",
    imgUri: oc.src,
  },
]
const items = [
  {
    title: 'Branding',
    content: 'Brand Strategy | Logo Design | Brand Identity Design | Brand Guidelines',
  },
  {
    title: 'Graphics',
    content: 'Digital Graphics | Packaging Design | Infographics',
  },
  {
    title: 'Webware',
    content: 'Website Development | Responsive Design | Website Maintenance | Search Engine Optimization (SEO)',
  },
  {
    title: 'Marketing',
    content: 'Social Media Management | Content Creation | Email Marketing | Analytics and Reporting',
  },
  {
    title: 'Consultation & Training',
    content: 'Brand Consultation | Training Programs',
  },
];
const delay = (milliseconds: number) => new Promise(resolve => setTimeout(resolve, milliseconds));
// Define the Home component
export default function Home() {
  const [error, setError] = useState<boolean[]>([false,false,false,false,false,false])
  const [selectedHelpOne, setSelectedHelpOne] = useState<string | null>(null);
  const [selectedHelpTwo, setSelectedHelpTwo] = useState<string | null>(null);
  const [selectedHelpThree, setSelectedHelpThree] = useState<string | null>(null);
  const [selectedHelpOneLabel, setSelectedHelpOneLabel] = useState("Reason for Contacting")
  const [selectedHelpTwoLabel, setSelectedHelpTwoLabel] = useState("Which Product or Plan?")
  const [selectedHelpThreeLabel, setSelectedHelpThreeLabel] = useState("Whats your Query")

  const handleItemClickOne = async (item: string) => {
    setSelectedHelpOne(null)
    setSelectedHelpTwo(null)
    setSelectedHelpThree(null)
    await delay(250)
    setSelectedHelpOne(item)
    let exError = error
    exError[3] = false
    setError(exError)
  };

  const handleItemClickTwo = async (item: string) => {
    setSelectedHelpTwo(null);
    setSelectedHelpThree(null)
    await delay(250)
    setSelectedHelpTwo(item);
    let exError = error
    exError[4] = false
    setError(exError)
  };

  const handleItemClickThree = async (item: string) => {
    setSelectedHelpThree(null);
    await delay(250)
    setSelectedHelpThree(item);
    let exError = error
    exError[5] = false
    setError(exError)
  };

  //  Data Validation woooooooooo

  const [dataFormContact, setDataFormContact] = useState({name: '', phone: '', email: '', social: '', opt1: '', opt2: '', opt3: '', query: ''})
  const handleInputName = (e: ChangeEvent<HTMLInputElement>) => {
    setDataFormContact({...dataFormContact, name: e.target.value});
    if(dataFormContact.name == '') {
      
    } else {
      let exError = error
      exError[0] = false
      setError(exError)
    }
  };
  const handleInputPhone = (e: ChangeEvent<HTMLInputElement>) => {
    setDataFormContact({...dataFormContact, phone: e.target.value});
  };
  const handleInputEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setDataFormContact({...dataFormContact, email: e.target.value});
    if(dataFormContact.email == '') {
      
    } else {
      let exError = error
      exError[1] = false
      setError(exError)
    }
  };
  const handleInputSocial = (e: ChangeEvent<HTMLInputElement>) => {
    setDataFormContact({...dataFormContact, social: e.target.value});
  };
  const handleInputQuery = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDataFormContact({...dataFormContact, query: e.target.value});
    if(dataFormContact.query == '') {
      
    } else {
      let exError = error
      exError[2] = false
      setError(exError)
    }
  };

  function contactBtnClick() {
    let ex = []
    if(dataFormContact.name == '') {
      ex.push(true)
    } else ex.push(false)
    if(dataFormContact.email == '') {
      ex.push(true)
    } else ex.push(false)
    if(dataFormContact.query == '') {
      ex.push(true)
    } else ex.push(false)
    if(selectedHelpOne == null) {
      ex.push(true)
    } else ex.push(false)
    if (selectedHelpTwo == null) {
      ex.push(true)
    } else ex.push(false)
    if (selectedHelpThree == null) {
      ex.push(true)
    } else ex.push(false)
    setError(ex)
    return
  }
  const homePage = useRef<HTMLDivElement | null>(null)
  const servicesPage = useRef<HTMLDivElement | null>(null)
  const workPage = useRef<HTMLDivElement | null>(null)
  const pricingPage = useRef<HTMLDivElement | null>(null)
  const contactPage = useRef<HTMLDivElement | null>(null)
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
      case 'contactPage':
        return contactPage;
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
      <div className="mainBg absolute z-20"></div>
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
          <span className="absolute lg:relative text-5xl lg:text-3xl font-mainFont">Introducing Your Marketing Ally - <span className="text-yellow">GYS</span>!</span>
          <span className="lg:hidden relative font-bold text-5xl">&nbsp;</span>
          <p className=" font-mainFont text-lg mt-6">Meet GYS aka Grab Your Services, the go-to creative powerhouse for brands seeking exceptional design, branding, and website development. We're not just a service – we're your creative partner in the digital realm.
<br/>
Ditch the hassle of sluggish and pricey agencies; we're your shortcut to top-notch design and marketing solutions. Unleash the power of a global team of creative wizards, effortlessly accessible and committed to bringing your brand to life. Say goodbye to delays, hello to unparalleled reliability, and scale up your creative endeavors with GYS. Your brand deserves the best – and we're here to deliver it, faster and with flair. Let's redefine what's possible in the world of remote marketing together!</p>
          <div className="w-full h-auto flex items-center justify-center flex-row lg:flex-col">
            <button onClick={() => {scrollToSection('contactPage')}} className='flex w-1/2 lg:w-full flex-row justify-center mr-4  items-center px-8 py-3 mt-8 border-yellow border-2 bg-yellow rounded-xl font-mainFont text-black align-middle duration-500 hover:scale-110 lg:m-0 lg:mt-4'>Get a Quote</button>
            <button onClick={() => {scrollToSection('servicesPage')}} className='flex w-1/2 lg:w-full flex-row justify-center ml-4 items-center px-8 py-3 mt-8 border-yellow text-yellow text-lg border-2 rounded-xl text-black align-middle duration-500 hover:scale-110 lg:m-0 lg:mt-4'>Services</button>
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
            <button onClick={() => {scrollToSection('pricingPage')}} className='flex flex-row justify-center items-center px-8 py-3 mt-8 mx-4 border-2 border-yellow text-yellow rounded-xl text-black align-middle duration-500 hover:scale-105'>Check Our Plans</button>
          </div>
        </div>
      </div>
      <div ref={workPage} id='workPage' className="pt-6 min-h-screen flex justify-center items-center">
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
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-yellow font-mainFont">Social Media & Content Marketing</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-base-100 font-mainFont">Website Development & Maintenance(Non E-Commerce)</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-base-100 font-mainFont">Analytics & Reporting</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-base-100 font-mainFont">Infographics & Illustrations</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-base-100 font-mainFont">SEO</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-base-100 font-mainFont">Brand Guidelines</p></li>
                        <li className="w-full flex flex-row justify-center items-center mt-4"><p className="text-base-100 font-mainFont">Consultation & Training</p></li>
                      </ul>
                    </div>
                    <button onClick={() => {scrollToSection('contactPage')}} className="mt-8 w-5/6 text-black bg-yellow rounded-lg px-4 py-3 transition duration-500 hover:scale-110">Get a Quote</button>
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
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-yellow font-mainFont">Social Media & Content Marketing</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-yellow font-mainFont">Website Development & Maintenance(Incl. E-Commerce)</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-yellow font-mainFont">Analytics & Reporting</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-yellow font-mainFont">Infographics & Illustrations</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-yellow font-mainFont">SEO</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-yellow font-mainFont">Brand Guidelines</p></li>
                        <li className="w-full flex flex-row justify-center items-center mt-4"><p className="text-yellow font-mainFont">Consultation & Training</p></li>
                      </ul>
                    </div>
                    <button onClick={() => {scrollToSection('contactPage')}} className="mt-8 w-5/6 text-black bg-yellow rounded-lg px-4 py-3 transition duration-500 hover:scale-110">Get a Quote</button>
                  </div>
                </div>
                <div className="w-4/12 lg:w-full lg:mx-8 flex justify-center items-center border-2 border-white rounded-xl flex-col">
                  <div className="flex flex-row top-0 m-0">
                  </div>
                  <div className="flex flex-col justify-center items-center mx-8 my-8 w-full">
                    <h1 className="text-4xl text-yellow mt-4">Stellar</h1>
                    <div className="flex mt-6 flex-col justify-center items-center px-8 text-center">
                      <p className="text-xl">Starting at <span className="text-yellow">$499</span>/mo</p>
                      <p className="text-lg">Best for running and stable businesses.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-5 w-full">
                      <ul className="flex justify-center items-center flex-col w-5/6 text-center">
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white"><p className="text-yellow font-mainFont">Brand Strategy</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-yellow font-mainFont">Logo Design</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-yellow font-mainFont">Brand Identity Design</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-yellow font-mainFont">Digital Graphics</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-yellow font-mainFont">Social Media & Content Marketing</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-yellow font-mainFont">Website Development & Maintenance(Non E-Commerce)</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-yellow font-mainFont">Analytics & Reporting</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-yellow font-mainFont">Infographics & Illustrations</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-base-100 font-mainFont">SEO</p></li>
                        <li className="w-full flex flex-row justify-center items-center pb-4 border-b-2 border-b-white mt-4"><p className="text-base-100 font-mainFont">Brand Guidelines</p></li>
                        <li className="w-full flex flex-row justify-center items-center mt-4"><p className="text-base-100 font-mainFont">Consultation & Training</p></li>
                      </ul>
                    </div>
                    <button onClick={() => {scrollToSection('contactPage')}} className="mt-8 w-5/6 text-black bg-yellow rounded-lg px-4 py-3 transition duration-500 hover:scale-110">Get a Quote</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex justify-center items-center text-white flex-col">
        <h1 className='text-5xl text-center lg:text-4xl lg:mx-4'>Or, buy a <span className="text-yellow">Single</span> Product</h1>
        <button onClick={() => {scrollToSection('contactPage')}} className="w-96 lg:w-[calc(100%-4rem)] mx-8 bg-yellow text-black rounded-lg transition duration-500 hover:scale-110 py-3 mt-6">Get a Quote</button>
        <div className='flex justify-center h-full mt-20 px-2 text-white items-center w-full min-h-full flex-col' style={{ position: "relative", zIndex: 1 }}>
          <div className="flex justify-center items-center flex-col mt-8 bg-transBlack shadow-xl h-full w-full md:p-8">
            <span className="font-mainFont text-center text-xl text-yellow opacity-75 ">REMOTE-REACH</span>
            <span className="font-mainFont text-center text-5xl lg:text-3xl mx-48 lg:mx-8">Anytime, anywhere, we transform your brand dreams into reality.</span>
            <p className="text-lg mt-8 text-center lg:mt-4 mx-48 lg:mx-8">Connect now for a game-changing consultation or grab an instant quote via our sleek contact form. Let's redefine your brand success, no matter where you are!</p>
            <button onClick={() => {window.open('https://calendly.com/grabyourservices/book-a-free-consultation-call-with-gys')}} className="w-96 lg:w-[calc(100%-4rem)] mx-8 bg-yellow text-black rounded-lg transition duration-500 hover:scale-110 py-3 mt-6">Request a Consultation</button>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex justify-center items-center text-white flex-col">
        <h1 className='text-5xl mx-12 lg:mx-4 text-center lg:text-4xl lg:mx-4'>What our <span className="text-yellow">Customers</span> have to say.</h1>
        <div className="flex justify-center items-center flex-row mt-12 w-full lg:flex-col">
          {testemonials.map(testemonial => {
            return (<Testemonial name={testemonial.name} desc={testemonial.desc} testimonial={testemonial.testimonial} imgUri={testemonial.imgUri}/>)
          })}
        </div>
      </div>
      <div ref={contactPage} id='contactPage' className="min-h-screen flex justify-center items-start w-screen">
        <div className='flex justify-start px-2 text-white items-center w-full min-h-full flex-col w-full' style={{ position: "relative", zIndex: 1 }}>
          <div className="flex justify-center items-center flex-col mt-8 bg-transBlack p-14 shadow-xl h-full w-full md:p-8 w-full">
            <span className="font-mainFont text-center text-5xl lg:text-3xl mb-12">Get in<span className="text-yellow"> Touch</span>.</span>
            <div className="flex flex-row lg:flex-col">
              <form className="flex flex-col mt-8 lg:mt-2 mr-8 w-1/2 lg:w-full">
                <div className="flex flex-row lg:flex-col">
                  <input className={`bg-transBlack py-2 rounded-lg px-4 border-2 ${error[0] ? 'border-rose-500' : 'border-yellow'} mx-2 focus:outline-none transition duration-500 hover:opacity-75 hover:cursor-pointer focus:cursor-text focus:opacity-100`} onChange={handleInputName} placeholder="Full Name (Required)"/>
                  <input className={`bg-transBlack  lg:mt-4 py-2 rounded-lg px-4 border-2 border-yellow mx-2 focus:outline-none transition duration-500 hover:opacity-75 hover:cursor-pointer focus:cursor-text focus:opacity-100`} onChange={handleInputPhone} placeholder="Phone Number (Optional)"/>
                </div>
                <input className={`"bg-transBlack py-2 rounded-lg px-4 border-2 ${error[1] ? 'border-rose-500' : 'border-yellow'} mx-2 bg-transBlack mt-4 focus:outline-none transition duration-500 hover:opacity-75 hover:cursor-pointer focus:cursor-text focus:opacity-100"`} onChange={handleInputEmail} placeholder="Email (Required)"/>
                <input className="bg-transBlack py-2 rounded-lg px-4 border-2 border-yellow mx-2 mt-4 focus:outline-none transition duration-500 hover:opacity-75 hover:cursor-pointer focus:cursor-text focus:opacity-100" onChange={handleInputSocial} placeholder="Social [Instagram, Discord etc] (Optional)"/>
                <Dropdown errored={error[3]} buttonLabel={selectedHelpOneLabel} onSelect={handleItemClickOne} items={['Contacting about a General Query', 'Contacting about a Plan', 'Contacting about a Product']} />
                { selectedHelpOne === 'Contacting about a Plan' ? 
                  <Dropdown errored={error[4]} buttonLabel={selectedHelpTwoLabel} onSelect={handleItemClickTwo} items={['Astral ($299/mo)', 'Stellar ($499/mo)', 'Cosmic($999/mo)']} />

                  :
                selectedHelpOne === 'Contacting about a Product' ?
                  <Dropdown errored={error[4]} buttonLabel={selectedHelpTwoLabel} onSelect={handleItemClickTwo} items={['Brand Strategy', 'Logo Design', 'Brand Identity Design', 'Digital Graphics', 'Website Development & Maintenance', 'Social Media & Content Marketing', 'Analytics & Reporting', 'Infographics & Illustrations', 'SEO', 'Brand Guidelines', 'Consultation & Training']} />
                :
                <>
                </>
                }
                { selectedHelpTwo === 'Astral ($299/mo)' ?
                  <Dropdown errored={error[5]} buttonLabel={selectedHelpThreeLabel} onSelect={handleItemClickThree} items={['I have a Question about the plan', 'I would like to purchase one']}/>
                :   
                selectedHelpTwo === 'Stellar ($499/mo)' ?
                  <Dropdown errored={error[5]} buttonLabel={selectedHelpThreeLabel} onSelect={handleItemClickThree} items={['I have a Question about the plan', 'I would like to purchase one']}/>
                :
                selectedHelpTwo === 'Cosmic($999/mo)' ?
                  <Dropdown errored={error[5]} buttonLabel={selectedHelpThreeLabel} onSelect={handleItemClickThree} items={['I have a Question about the plan', 'I would like to purchase one']}/>
                :
                selectedHelpTwo === 'Brand Strategy' ?
                  <Dropdown errored={error[5]} buttonLabel={selectedHelpThreeLabel} onSelect={handleItemClickThree} items={['I have a Question about the product', 'I would like to purchase one', 'I would like an estimate cost']}/>
                :
                selectedHelpTwo === 'Logo Design' ?
                  <Dropdown errored={error[5]} buttonLabel={selectedHelpThreeLabel} onSelect={handleItemClickThree} items={['I have a Question about the product', 'I would like to purchase one', 'I would like an estimate cost']}/>
                :
                selectedHelpTwo === 'Brand Identity Design' ?
                  <Dropdown errored={error[5]} buttonLabel={selectedHelpThreeLabel} onSelect={handleItemClickThree} items={['I have a Question about the product', 'I would like to purchase one', 'I would like an estimate cost']}/>
                :
                selectedHelpTwo === 'Digital Graphics' ?
                  <Dropdown errored={error[5]} buttonLabel={selectedHelpThreeLabel} onSelect={handleItemClickThree} items={['I have a Question about the product', 'I would like to purchase one', 'I would like an estimate cost']}/>
                :
                selectedHelpTwo === 'Website Development & Maintenance' ?
                  <Dropdown errored={error[5]} buttonLabel={selectedHelpThreeLabel} onSelect={handleItemClickThree} items={['I have a Question about the product', 'I would like to purchase one', 'I would like an estimate cost']}/>
                :
                selectedHelpTwo === 'Social Media & Content Marketing' ?
                  <Dropdown errored={error[5]} buttonLabel={selectedHelpThreeLabel} onSelect={handleItemClickThree} items={['I have a Question about the product', 'I would like to purchase one', 'I would like an estimate cost']}/>
                :
                selectedHelpTwo === 'Analytics & Reporting' ?
                  <Dropdown errored={error[5]} buttonLabel={selectedHelpThreeLabel} onSelect={handleItemClickThree} items={['I have a Question about the product', 'I would like to purchase one', 'I would like an estimate cost']}/>
                :
                selectedHelpTwo === 'Infographics & Illustrations' ?
                  <Dropdown errored={error[5]} buttonLabel={selectedHelpThreeLabel} onSelect={handleItemClickThree} items={['I have a Question about the product', 'I would like to purchase one', 'I would like an estimate cost']}/>
                :
                selectedHelpTwo === 'SEO' ?
                  <Dropdown errored={error[5]} buttonLabel={selectedHelpThreeLabel} onSelect={handleItemClickThree} items={['I have a Question about the product', 'I would like to purchase one', 'I would like an estimate cost']}/>
                :
                selectedHelpTwo === 'Brand Guidelines' ?
                  <Dropdown errored={error[5]} buttonLabel={selectedHelpThreeLabel} onSelect={handleItemClickThree} items={['I have a Question about the product', 'I would like to purchase one', 'I would like an estimate cost']}/>
                :
                selectedHelpTwo === 'Consultation & Training' ?
                  <Dropdown errored={error[5]} buttonLabel={selectedHelpThreeLabel} onSelect={handleItemClickThree} items={['I have a Question about the product', 'I would like to purchase one', 'I would like an estimate cost']}/>
                :
                <></>}
                <textarea className={`bg-transBlack py-2 rounded-lg px-4 border-2 ${error[2] ? 'border-rose-500' : 'border-yellow'} bg-transBlack mx-2 mt-4 focus:outline-none transition duration-500 hover:opacity-75 hover:cursor-pointer focus:cursor-text focus:opacity-100`} onChange={handleInputQuery} placeholder={selectedHelpOne === 'Contacting about a General Query' ? 'Query (Required)' : selectedHelpThree === 'I would like to purchase one' ? 'Give us a basic description of your project (Required)' : 'Your Question (Required)'}/>
                <button onClick={(e) => { e.preventDefault(); contactBtnClick(); }} className="bg-yellow text-black rounded-lg py-3 mx-2 mt-4 px-4 transition duration-500 hover:scale-110">
                  Send Your Message
                </button>
              </form>
              <div className="ml-8 w-1/2 flex flex-col justify-center items-center lg:w-full lg:m-0">
                <h1 className="mt-12 text-4xl lg:text-3xl text-center">Or, Contact us via our <span className="text-yellow">Socials.</span></h1>
                <div className='flex flex-row mt-8 justify-center items-center'>
                  <div className='mx-2 my-4 text-xl font-mainFont bg-yellow p-4 rounded-xl transition duration-500 hover:scale-110'><BiLogoInstagram color='#000' className='transition duration-500 hover:scale-110 cursor-pointer' onClick={() => {window.open('https://instagram.com/grabyourservices')}} size={50}/></div>
                  <div className='mx-2 my-4 text-xl font-mainFont bg-yellow p-4 rounded-xl transition duration-500 hover:scale-110'><MdOutlineEmail color='#000' className='transition duration-500 hover:scale-110 cursor-pointer' onClick={() => {window.open('mailto:info@grabyourservices.com')}} size={50}/></div>
                  <div className='mx-2 my-4 text-xl font-mainFont bg-yellow p-4 rounded-xl transition duration-500 hover:scale-110'><BiLogoDiscordAlt color='#000' className='transition duration-500 hover:scale-110 cursor-pointer' onClick={() => {window.open('https://instagram.com/grabyourservices')}} size={50}/></div>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen mt-14 bg-black py-14 flex justify-center items-center flex-col">
        <div className="w-full flex justify-center items-center flex-row lg:flex-col lg:px-8 lg:text-center">                
          <img src={Logo.src} alt='Logo' height={200} width={200}/>
          <div className="flex flex-col justify-start items-start "> 
            <div className='flex flex-row items-start justify-start lg:hidden'>
              <h1 className='mr-2 my-4 text-md font-mainFont transition duration-500 hover:text-yellow cursor-pointer' onClick={() => scrollToSection('homePage')}>Home</h1>
              <h1 className='mx-4 my-4 text-md font-mainFont transition duration-500 hover:text-yellow cursor-pointer' onClick={() => scrollToSection('servicesPage')}>Services</h1>
              <h1 className='mx-4 my-4 text-md font-mainFont transition duration-500 hover:text-yellow cursor-pointer' onClick={() => scrollToSection('workPage')}>Work</h1>
              <h1 className='mx-4 my-4 text-md font-mainFont transition duration-500 hover:text-yellow cursor-pointer' onClick={() => scrollToSection('pricingPage')}>Pricing</h1>
              <h1 className='mx-4 my-4 text-md font-mainFont transition duration-500 hover:text-yellow cursor-pointer' onClick={() => scrollToSection('contactPage')}>Contact</h1>
            </div>
          </div>
        </div>
        <h1 className="lg:mx-8 lg:text-center text-xl mt-4 text-white text-center">Copyright 2023 - GrabYourServices.<br/> All Rights Reserved</h1>
        <p>Illustration by <a href="https://icons8.com/illustrations/author/599244">Aleksey Chizhikov</a> from <a href="https://icons8.com/illustrations">Ouch!</a></p>
      </div>
    </div>
  );
}
