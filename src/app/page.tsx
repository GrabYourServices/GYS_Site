'use client'

// Import necessary dependencies
import { ChangeEvent, useEffect, useRef, useState } from "react";
import Slider from '@mui/material/Slider'
import Switch from '@mui/material/Switch'
import icon3 from '../assets/imgs/Marketing-cuate.png'
import icon2 from '../assets/imgs/Social-Growth-bro.png'
import icon1 from '../assets/imgs/Remote team-cuate.png'
import oc from '../assets/imgs/oc.jpg'
import oringo from '../assets/imgs/oringo.jpeg'
import riztax from '../assets/imgs/riztax.png'
import willow from '../assets/imgs/willow.png'
import React from "react";
import { Typewriter } from 'react-simple-typewriter'
import NavBar from "@/components/navbar";
import './globals.css'
import spaceBg from '../assets/imgs/c4f1e637-6d5f-4d61-b476-37ef8aca6dba.png'
import { FaAngleDoubleUp, FaAngleDoubleDown } from 'react-icons/fa'
import { BiLogoInstagram, BiLogoDiscordAlt } from 'react-icons/bi';
import { MdOutlineEmail } from "react-icons/md";
import Logo from '../assets/imgs/logo.png'
import Dropdown from "@/components/dropdown";
import { Testimonial, TestimonialProps } from "@/components/testemonial";
interface DropdownProps {
  buttonLabel: string;
  onSelect: (item: string) => void;
  items: string[];
}
const testemonials: TestimonialProps[] = [
  {
    name: 'Odessys',
    desc: 'Oman',
    testimonial: "GYS transformed Odessys, our Oman-based marketing agency. Their remote solutions ignited our campaigns, driving client engagement and business growth. GYS's professionalism and commitment make them a vital part of our team. Highly recommended.",
    imgUri: 'https://i.imgur.com/YAIi5TX.jpg',
  },
  {
    name: 'Sunny Commerce',
    desc: 'Malaysia',
    testimonial: 'Sunny Commerce, linked with various mother companies in Malaysia, saw a remarkable online transformation and lead generation boost with GYS. Their tailored remote marketing strategies are effective, making them a reliable partner for outstanding results.',
    imgUri: 'https://i.imgur.com/fvvQuAt.jpg',
  },
  {
    name: 'Willow Marketing',
    desc: 'Pakistan',
    testimonial: "Willow Marketing in Pakistan is delighted with GYS's remote marketing services. Their expertise boosted our brand visibility and engagement. GYS is now an integral part of our marketing strategy for ongoing success.",
    imgUri: willow.src,
  },
  {
    name: 'Usman Realty',
    desc: 'Canada',
    testimonial: "Thanks to GYS, Usman Realty's brand identity now reflects our essence with excellence and innovation. Their creativity and professionalism set them apart – highly recommended for brand transformations!.",
    imgUri: "https://i.imgur.com/vS9iJ2k.jpeg",
  },
  {
    name: 'Riztax Solution',
    desc: 'Canada',
    testimonial: "GYS elevated Riztax Solutions' online presence, driving increased visibility and quality leads for our Canadian tax consulting firm. Their tailored and prompt remote marketing services have been invaluable to our growth. Highly recommended!",
    imgUri: riztax.src,
  },
  {
    name: 'Oringo Fashion',
    desc: 'Germany',
    testimonial: "GYS boosted Oringo Fashion's online presence with innovative remote marketing, perfectly aligned with our brand. Highly recommend for impactful marketing solutions.",
    imgUri: oringo.src,
  },
  {
    name: 'Ordered Chaos',
    desc: 'Pakistan',
    testimonial: "GYS's standout product photography and social media posts have given Ordered Chaos a remarkable boost in online engagement and sales. Highly recommended for their creativity and professionalism.",
    imgUri: oc.src,
  },
]
const items = [
  {
    title: 'Social Media Management',
    content: ['Content Creation', 'Posting Schedule','Community Engagement', 'Analytics & Reporting'],
  },
  {
    title: 'Social Media Advertising',
    content: ['Ad Campaign Strategy', 'Ad Creation', 'Ad Placement', 'Ad Monitoring & Optimization'],
  },
  {
    title: 'Webware',
    content: ['Website Development', 'Responsive Design', 'Website Maintenance', 'Search Engine Optimization (SEO)'],
  },
  {
    title: 'Content Creation',
    content: ['Graphic Design', 'Video Production', 'Photography'],
  },
  {
    title: 'Influencer Marketing',
    content: ['Influencer Identification', 'Campaign Management', 'Performance Analysis'],
  },
  {
    title: 'Social Media Strategy',
    content: ['Audience Research', 'Content Strategy', 'Growth Strategy'],
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
  const [product, setProduct] = useState<{posts: number, reels:number, gni: number, ads: number, revisions: number, website: boolean, report: boolean, audienceResearch: boolean, strategies: boolean, analysis: boolean}>({posts: 0, reels: 0, gni: 0, ads: 0, revisions: 0, website: false, report: false, audienceResearch: false, strategies: false, analysis: false})

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
  const getPrice = () => {
    let totalPrice = 0
    totalPrice += product.posts * 5
    totalPrice += product.reels * 10
    totalPrice += product.gni * 15
    totalPrice += product.ads * 25
    if(product.website) totalPrice += 250
    if(product.report) totalPrice += 50
    if(product.audienceResearch) totalPrice += 50
    if(product.analysis) totalPrice += 50
    if(product.strategies) totalPrice += 50

    if(totalPrice !== 0) totalPrice -= 1
    return `${totalPrice}`
  }
  return (
    <div className='font-mainFont'>
      <div className="mainBg absolute z-20"></div>
      <div className="fixed z-50 w-screen flex justify-center p-4 lg:px-0">
        <NavBar scrollToSection={scrollToSection}/>
      </div>
      <div ref={homePage} id="homePage" className="flex justify-center text-white items-center w-full min-h-screen flex-row" style={{ position: "relative", zIndex: 1 }}>
        <span className="text-6xl text-center lg:text-4xl lg:mx-8">
          <Typewriter
            words={['Blast Off with Grab Your Services!', 'Your Cosmic Social Media Partner!']}
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
          <span className="absolute lg:relative text-yellow text-3xl lg:text-3xl font-mainFont">Welcome to GYS - Where Your Social Media Presence Takes Off!</span>
          <span className="lg:hidden relative font-bold text-5xl">&nbsp;</span>
          <p className=" font-mainFont text-lg mt-3">Embark on a cosmic journey with GYS, your ultimate destination for stellar social media solutions. Just like the boundless universe, our creativity knows no limits. From captivating content to out-of-this-world engagement, we're here to launch your brand into orbit.<br/>
With GYS, your brand will shine like a supernova in the vast expanse of social media. Reach for the stars with us and watch your online presence soar to new heights. Let's explore the digital cosmos together and make your brand the brightest star in the galaxy.<br/>
Get ready to blast off with GYS - where sky is not the limit, but just the beginning.</p>
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
          <div className="flex flex-col mt-8 bg-transBlack p-14 shadow-xl h-full w-full lg:p-8">
            <span className="mb-8 .font-mainFont text-center text-5xl">The <span className="text-yellow">Services </span>You <span className="border-b-4 border-solid border-yellow">Need</span>.</span>
            <div className="wrapperCards">
              <div className="colsCard"> 
                {items.map((item, index) => (
                  <div className="colCard" key={index} >
                    <div className="containerCards">
                      <div className="front bg-black border-2 border-yellow">
                        <div className="inner flex flex-col justify-center items-center">
                          <FaAngleDoubleDown size={32} className='m-0 moving-ic-alt text-yellow'/>
                          <p className="font-MainFont border-none mt-4">{item.title}</p>
                          <FaAngleDoubleUp size={32} className='m-0 moving-ic text-yellow'/>
                        </div>
                      </div>
                      <div className="back bg-black border-2 border-yellow">
                        <div className="inner">
                        {item.content.map((itemC, index) => (
                          <p className="transition duration-500 hover:text-yellow" onClick={()=>scrollToSection('contactPage')} key={index}>{itemC}<br/></p>
                        ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                </div>
            </div>
            <button onClick={() => {scrollToSection('pricingPage')}} className='flex flex-row justify-center items-center px-8 py-3 mt-8 mx-4 border-2 border-yellow text-yellow rounded-xl text-black align-middle duration-500 hover:scale-105'>Check Our Plans</button>
          </div>
        </div>
      </div>
      <div ref={workPage} id='workPage' className="pt-6 h-fit flex justify-center items-center">
        <div className='flex justify-start px-2 text-white items-center w-1/2 lg:w-full min-h-full flex-col' style={{ position: "relative", zIndex: 1 }}>
          <div className="flex justify-center items-center flex-col mt-8 bg-transBlack p-14 shadow-xl h-full w-full lg:p-8">
            <span className="font-mainFont text-start text-4xl lg:text-3xl lg:text-center lg:mx-2">Remote<span className="text-yellow"> + </span>Our SMMA<span className="text-yellow"> = </span>Interstellar <span className="border-b-4 border-solid border-yellow lg:border-none lg:text-yellow">Success</span> at Warp Speed.</span>
            <p className="text-lg mt-8 text-start lg:mt-4 lg:text-center lg:mx-2">Hey there! Ready to dive into creativity? Follow us on  <a className="text-yellow transition duration-500 hover:opacity-50" href="https://instagram.com/grabyourservices">Instagram</a> for an exclusive peek into our projects or join our newsletter squad below for an artistic adventure straight to your inbox!</p>
            <div className="flex flex-row mt-8 w-full lg:w-full lg:flex-col">
              <input className="bg-transBlack py-2 rounded-lg px-4 border-2 border-yellow mr-2 lg:mx-2 focus:outline-none transition duration-500 hover:opacity-75 hover:cursor-pointer focus:cursor-text focus:opacity-100 lg:px-4 lg:py-3 lg:w-full" placeholder="Email (Required)"/>
              <button className='flex flex-row justify-center items-center px-8 py-3 ml-2 bg-yellow text-black rounded-xl text-black align-middle duration-500 w-2/6 hover:scale-105 lg:px-4 lg:py-3 lg:mt-4 lg:w-full'>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <img src={icon1.src} height={512} width={512} className="animate-grow"/>
        </div>
      </div>
      <div ref={pricingPage} id='pricingPage' className="min-h-screen flex justify-center items-center w-screen">
        <div className='flex justify-start px-2 text-white items-center w-full min-h-full flex-col w-full' style={{ position: "relative", zIndex: 1 }}>
          <div className="flex justify-center items-center flex-col mt-8 bg-transBlack p-14 shadow-xl h-full w-full lg:p-8 w-full">
            <span className="font-mainFont text-center text-5xl lg:text-3xl">Pricing<span className="text-yellow"> Better </span>Than any Other.</span>
            <div className="flex flex-row justify-center items-center w-full lg:flex-col mt-12">
              <div className="w-7/12 lg:w-full">
                <div className="flex justify-start items-center flex-col w-full">
                  <h1 className="mb-2 text-yellow w-full text-start font-bold text-3xl lg:text-xl">Posts</h1>
                  <Slider
                    className="text-yellow w-full"
                    onChange={(e, newVal) => {setProduct({...product, posts: newVal as number})}}
                    disabled={false}
                    marks
                    max={50}
                    min={0}
                    valueLabelDisplay="auto"
                    sx={{
                      '& .MuiSlider-valueLabel': {
                        color: 'white',
                        backgroundColor: '#FFDE59',
                        fontWeight: 'bold'
                      },
                    }}
                  />
                </div>
                <div className="flex justify-start items-center w-full flex-row mt-4">
                  <div className="flex justify-start items-start flex-col w-1/2 mr-4">
                    <h1 className="mb-2 text-yellow w-full text-start font-bold text-3xl lg:text-xl">Reels</h1>
                    <Slider
                      className="text-yellow w-full"
                      onChange={(e, newVal) => {setProduct({...product, reels: newVal as number})}}
                      disabled={false}
                      marks
                      max={25}
                      min={0}
                      valueLabelDisplay="auto"
                      sx={{
                        '& .MuiSlider-valueLabel': {
                          color: 'white',
                          backgroundColor: '#FFDE59',
                          fontWeight: 'bold'
                        },
                      }}
                    />
                  </div>
                  <div className="flex justify-start items-start flex-col w-1/2 ml-4">
                    <h1 className="mb-2 text-yellow w-full text-start font-bold text-3xl lg:text-xl">Graphics</h1>
                    <Slider
                      className="text-yellow w-full"
                      onChange={(e, newVal) => {setProduct({...product, gni: newVal as number})}}
                      disabled={false}
                      marks
                      max={15}
                      min={0}
                      valueLabelDisplay="auto"
                      sx={{
                        '& .MuiSlider-valueLabel': {
                          color: 'white',
                          backgroundColor: '#FFDE59',
                          fontWeight: 'bold'
                        },
                      }}
                    />
                  </div>
                </div>
                <div className="flex justify-start items-center flex-col w-full">
                  <h1 className="mb-2 text-yellow w-full text-start font-bold text-3xl lg:text-xl lg:mt-4">Ads</h1>
                  <Slider
                    className="text-yellow w-full"
                    onChange={(e, newVal) => {setProduct({...product, ads: newVal as number})}}
                    disabled={false}
                    marks
                    max={15}
                    min={0}
                    valueLabelDisplay="auto"
                    sx={{
                      '& .MuiSlider-valueLabel': {
                        color: 'white',
                        backgroundColor: '#FFDE59',
                        fontWeight: 'bold'
                      },
                    }}
                  />
                </div>
                <div className="flex mt-4 justify-center items-center w-full">
                <div className="form-control flex flex-row flex-wrap justify-center items-center">
                  <label className="label cursor-pointer flex-col justify-center items-center mx-8 lg:mx-4">
                    <span className="label-text text-2xl text-yellow mb-2">Website</span> 
                    <input type="checkbox" className="toggle bg-yellow hover:bg-yellow border-yellow toggle-lg" checked={product.website} onChange={()=>{setProduct({...product, website: !product.website})}} onClick={()=>{setProduct({...product, website: !product.website})}} />
                  </label>
                  <label className="label cursor-pointer flex-col justify-center items-center mx-8 lg:mx-4">
                    <span className="label-text text-2xl text-yellow mb-2">Reports</span> 
                    <input type="checkbox" className="toggle bg-yellow hover:bg-yellow border-yellow toggle-lg" checked={product.report} onChange={()=>{setProduct({...product, report: !product.report})}} onClick={()=>{setProduct({...product, report: !product.report})}} />
                  </label>
                  <label className="label cursor-pointer flex-col justify-center items-center mx-8 lg:mx-4">
                    <span className="label-text text-2xl text-yellow mb-2">Research</span> 
                    <input type="checkbox" className="toggle bg-yellow hover:bg-yellow border-yellow toggle-lg" checked={product.audienceResearch} onChange={()=>{setProduct({...product, audienceResearch: !product.audienceResearch})}} onClick={()=>{setProduct({...product, audienceResearch: !product.audienceResearch})}} />
                  </label>
                  <label className="label cursor-pointer flex-col justify-center items-center mx-8 lg:mx-4">
                    <span className="label-text text-2xl text-yellow mb-2">Strategies</span> 
                    <input type="checkbox" className="toggle bg-yellow hover:bg-yellow border-yellow toggle-lg" checked={product.strategies} onChange={()=>{setProduct({...product, strategies: !product.strategies})}} onClick={()=>{setProduct({...product, strategies: !product.strategies})}} />
                  </label>
                  <label className="label cursor-pointer flex-col justify-center items-center mx-8 lg:mx-4">
                    <span className="label-text text-2xl text-yellow mb-2">Analysis</span> 
                    <input type="checkbox" className="toggle bg-yellow hover:bg-yellow border-yellow toggle-lg" checked={product.analysis} onChange={()=>{setProduct({...product, analysis: !product.analysis})}} onClick={()=>{setProduct({...product, analysis: !product.analysis})}} />
                  </label>
                </div>
                </div>
              </div>
              <div className="flex justify-center items-center w-5/12 flex-col lg:w-full lg:mt-12">
                <h1 className="text-7xl font-bold text-yellow">{getPrice()} GBP</h1>
                <h1 className="text-4xl font-bold text-white">Per month</h1>
                <h1 className="text-xl text-white">Estimated Cost</h1>
                <button onClick={() => {scrollToSection('contactPage')}} className="w-64 bg-yellow text-black rounded-lg transition duration-500 hover:scale-110 py-3 mt-6 lg:w-full">Get a Quote</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-fit flex justify-center lg:justify-start items-center lg:mt-0 text-white flex-col mb-24">
        <div className='flex justify-center h-full mt-20 px-2 text-white items-center w-full min-h-full flex-col' style={{ position: "relative", zIndex: 1 }}>
          <div className="flex justify-center items-center flex-col mt-8 bg-transBlack shadow-xl h-full w-full lg:p-8">
            <span className="font-mainFont text-center text-xl text-yellow opacity-75 ">REMOTE-REACH</span>
            <span className="font-mainFont text-center text-4xl lg:text-3xl mx-48 lg:mx-2">Ready to launch your brand's success? Contact Grab Your Services today and reach for the stars!</span>
            <p className="text-lg mt-8 text-center lg:mt-4 mx-48 lg:mx-2">Connect now for a game-changing consultation or grab an instant quote via our sleek contact form. Let's redefine your brand success, no matter where you are!</p>
            <button onClick={() => {window.open('https://calendly.com/grabyourservices/book-a-free-consultation-call-with-gys')}} className="w-96 lg:w-[calc(100%-4rem)] mx-8 bg-yellow text-black rounded-lg transition duration-500 hover:scale-110 py-3 mt-6 lg:w-full">Request a Consultation</button>
          </div>
        </div>
      </div>
      <div className="h-fit py-12 flex justify-center items-center text-white flex-col">
        <h1 className='text-5xl mx-12 lg:mx-4 text-center lg:text-4xl lg:mx-4'>What our <span className="text-yellow">Customers</span> have to say.</h1>
        <div className="flex justify-center items-center flex-row mt-12 w-full lg:flex-col">
          {testemonials.map((testemonial, key) => {
            return (<Testimonial key={key} name={testemonial.name} desc={testemonial.desc} testimonial={testemonial.testimonial} imgUri={testemonial.imgUri}/>)
          })}
        </div>
      </div>
      <div ref={contactPage} id='contactPage' className="min-h-screen flex justify-center items-start w-screen flex-col">
        <div className='flex justify-start px-2 text-white items-center w-full min-h-full flex-col w-full' style={{ position: "relative", zIndex: 1 }}>
          <div className="flex justify-center items-center flex-col mt-8 bg-transBlack px-14 shadow-xl h-full w-full lg:p-8 w-full">
            <span className="font-mainFont text-center text-5xl lg:text-3xl mb-12">Get in<span className="text-yellow"> Touch</span>.</span>
            <div className="flex flex-row lg:flex-col w-full">
              <form className="flex flex-col mt-8 lg:mt-2 mr-8 w-1/2 lg:w-full">
                <input className={`bg-transBlack py-2 rounded-lg px-4 border-2 ${error[0] ? 'border-rose-500' : 'border-yellow'} mx-2 bg-transBlack mt-4 focus:outline-none transition duration-500 hover:opacity-75 hover:cursor-pointer focus:cursor-text focus:opacity-100`} onChange={handleInputName} placeholder="Full Name (Required)"/>
                <input className={`bg-transBlack py-2 border-yellow rounded-lg px-4 border-2 mx-2 bg-transBlack mt-4 focus:outline-none transition duration-500 hover:opacity-75 hover:cursor-pointer focus:cursor-text focus:opacity-100"`} onChange={handleInputPhone} placeholder="Phone Number (Optional)"/>
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
              <div className="ml-8 w-1/2 flex flex-col justify-center items-center lg:w-full lg:hidden lg:m-0">
                <img src={icon3.src} height={512} width={512} className="animate-grow"/>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col bg-transBlack px-14 shadow-xl h-full w-full lg:p-8 w-full">
            <div className="flex flex-row lg:flex-col">
              <div className="flex flex-col mt-8 lg:mt-2 mr-8 w-1/2 lg:w-full">
                <img src={icon2.src} height={512} width={512} className="animate-grow"/>
              </div>
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
          <img src={Logo.src} alt='Logo' height={128} width={128}/>
          <div className="ml-4 flex flex-col justify-start items-start "> 
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
        <p className="opacity-25">Illustration by <a href="https://icons8.com/illustrations/author/599244">Aleksey</a> from <a href="https://icons8.com/illustrations">Ouch!</a></p>
      </div>
    </div>
  );
}
