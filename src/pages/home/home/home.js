import React, {useRef} from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import AboutPage from '../about/about'
import panda from '../../../imgs/assets/animals/panda.png'
import koala from '../../../imgs/assets/animals/koala.png'
import tiger from '../../../imgs/assets/animals/tiger.png'
// import cat from '../../imgs/assets/animals/cat.png'
// import fox from '../../imgs/assets/animals/fox.png'
// import hippo from '../../imgs/assets/animals/hippo.png'
import WorkPage from '../work/work'
import PricesPage from '../prices/prices'
import ContactPage from '../contact/contact'
import FadeIn from 'react-fade-in'
import weird from '../../../imgs/assets/animals/weird.png'
import rabbit from '../../../imgs/assets/animals/rabbit.png'
function HomePage() {
  const myRef = useRef(null)
  
  const executeScroll = () => { if (myRef.current) {myRef.current.scrollIntoView()} }
  return (
    <>
    <div className='home-container'>
      <FadeIn>
        <div className='home-header-root'>
          <div className='home-header'>
            <div className='home-header-texts'>
              <h1 className='home-header-heading'><span className="home-header-heading" style={{backgroundImage: 'linear-gradient(to right, #5b45bb, #c6bcf1)', color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Bringing Your<br/> Ideas to Life</span></h1>
              <p style={{color: 'white',fontSize: '20px',  fontFamily: 'satoshiMain', textAlign:'left'}}>Our team of expert developers works tirelessly to bring your ideas to life. From conceptualization to launch, we'll be with you every step of the way. Trust us to transform your digital landscape with our cutting-edge technology and innovative solutions. Let's build something amazing together!</p>
              <div className='home-header-buttons'>
                <Link style={{width: '50%'}} to="/websites">
                  <button className='home-header-button-fill'>Buy a Website</button>
                </Link>  
                <Link style={{width: '50%'}} to="/webhosting">
                  <button className='home-header-button-outline'>Host a website</button>
                </Link>              
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='home-header-wrapper'>
            <div className='home-header-images'>
              <div className='home-header-images-1'>
                <img style={{width: '250px'}} className='home-header-image' src={tiger}></img>
                <img style={{width: '250px'}} className='home-header-image' src={panda}></img>
              </div>
              <div className='home-header-images-1'>
                <img style={{width: '250px'}} className='home-header-image' src={koala}></img>
              </div>
              <div className='home-header-images-1'>
                <img style={{width: '250px'}} className='home-header-image' src={weird}></img>
                <img style={{width: '250px'}} className='home-header-image' src={rabbit}></img>
              </div> 
              <div className='home-header-images-1'>
                <img style={{width: '250px'}} className='home-header-image' src={koala}></img>
              </div>
            </div>
          </div>
        </div>
        <div style={{position:'relative'}}>
          <AboutPage/>
        </div>
        <div style={{position:'relative'}}>
          <WorkPage/>
        </div>
        <PricesPage/>
        <ContactPage/>
      </FadeIn>
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontFamily: 'satoshiMain',
        height: 'fit-content',
        backgroundColor:'var(--primary)'
      }}>
        <p style={{
          padding: '20px'
        }}>
          Copyright CC 2023 : GrabYourServices.com. Made with Love by Ateeb Sohail(Employee @ GrabYourServices)
        </p>
      </div>
    </div>
    </>
  )
}

export default HomePage