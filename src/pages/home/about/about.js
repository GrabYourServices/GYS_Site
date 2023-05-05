import React from 'react'
import './about.css'
import {Link} from 'react-router-dom'
function AboutPage() {
  return (
    <div className='about-header'>
      <div className='about-container'>
        <div className='about-texts'>
          <h5 style={{marginBottom: '0', marginLeft: '3px', fontFamily: 'satoshiBold', whiteSpace: 'pre'}}>A B O U T   U S</h5>
          <h1 style={{marginTop: '20px', lineHeight: '35px'}}><span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)', color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>We do the work while you sit back and Relax!</span></h1>
          <p style={{fontFamily: 'satoshiMain'}}>
          Our team is made up of passionate individuals who are committed to delivering the best possible service to our clients. We believe in honesty & trust, and we strive to live up to those values in everything we do.<br></br><br></br>
          Our services are designed with our customers needs in mind, and we are always looking for ways to improve and innovate and we are constantly working to exceed expectations and set new standards in our industry.<br/><br></br>
          Here at GrabYourServices, we believe that our employees should be treeted well, and we value our employees as much as we value our clients. We are committed to fostering a positive and inclusive workplace, where everyone is encouraged to bring their unique perspectives and ideas to the table.<br/><br></br>
          We work day and night to give you the product we know you deserve!
          </p>
          <div className='home-header-buttons' style={{width: '100%'}}>
            <Link style={{width: '50%'}} to="/grabpanel">
              <button className='home-header-button-fill'>Go to Panel</button>
            </Link>  
            <Link style={{width: '50%'}} to="/webhosting">
              <button className='home-header-button-outline'>Host a website</button>
            </Link>        
          </div>
        </div>
      </div>
      <div className='about-nodiv'>
        <p style={{
          color:'transparent',
        }}>You can't see this.</p>
      </div>
    </div>
  )
}

export default AboutPage