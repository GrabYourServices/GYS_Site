import React from 'react'
import './prices.css'
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup'
function PricesPage() {
  return (
    <div className='prices-header'>
      <div className='prices-items'>
        <h1 className='work-header-heading'><span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Convinced?<br/><span className='pricing-margin'>Look at our Pricing!</span></span></h1>
        <div className='pricing-container'>
          <Link to='/websites' style={{textDecoration: 'none', color: 'white'}}>
            <div className='pricing-item'>
              <h2 style={{marginBottom: '5px'}}><span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',fontFamily: 'satoshiBold',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Websitesaa</span></h2>
              <p style={{marginTop: '5px'}}>Starting from as Low as <span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',fontFamily: 'satoshiBold',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}><br/>14.99 USD(One-Time)</span></p>
            </div>
          </Link> 
          <Link to='/webhosting' style={{textDecoration: 'none', color: 'white'}}>
            <div className='pricing-item'>
              <h2 style={{marginBottom: '5px'}}><span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',fontFamily: 'satoshiBold',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Website Hosting</span></h2>
              <p style={{marginTop: '5px'}}>Starting from as Low as <span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',fontFamily: 'satoshiBold',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}><br/>0.99 USD/mo</span></p>
            </div>
          </Link>
          <Link to='/discordbots' style={{textDecoration: 'none', color: 'white'}}>
            <div className='pricing-item'>
              <h2 style={{marginBottom: '5px'}}><span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',fontFamily: 'satoshiBold',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Discord Bot</span></h2>
              <p style={{marginTop: '5px'}}>Starting from as Low as <span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',fontFamily: 'satoshiBold',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}><br/>9.99 USD(One-Time)</span></p>
            </div>
          </Link>
          <Link to='/discordhosting' style={{textDecoration: 'none', color: 'white'}}>
            <div className='pricing-item'>
              <h2 style={{marginBottom: '5px'}}><span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',fontFamily: 'satoshiBold',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Discord Bot Hosting</span></h2>
              <p style={{marginTop: '5px'}}>Starting from as Low as <span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',fontFamily: 'satoshiBold',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}><br/>0.99 USD/mo</span></p>
            </div>
          </Link>
          <Link to='/brandidentitydesigns' style={{textDecoration: 'none', color: 'white'}}>
            <div className='pricing-item'>
              <h2 style={{marginBottom: '5px'}}><span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',fontFamily: 'satoshiBold',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Brand Identity Design</span></h2>
              <p style={{marginTop: '5px'}}>Starting from as Low as <span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',fontFamily: 'satoshiBold',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}><br/>29.99 USD(One-Time)</span></p>
            </div>
          </Link>
          <Link to='/graphics' style={{textDecoration: 'none', color: 'white'}}>
            <div className='pricing-item'>
              <h2 style={{marginBottom: '5px'}}><span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',fontFamily: 'satoshiBold',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Graphics</span></h2>
              <p style={{marginTop: '5px'}}>Starting from as Low as <span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',fontFamily: 'satoshiBold',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}><br/>9.99 USD(One-Time)</span></p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PricesPage