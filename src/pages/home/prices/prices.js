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
          <div className='pricing-item'>
            <Link to='/GYS_Site/build/websites' style={{textDecoration: 'none', color: 'white'}}>
              <h2 style={{marginBottom: '5px'}}><span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',fontFamily: 'satoshiBold',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Websites</span></h2>
              <p style={{marginTop: '5px'}}>Starting from as Low as <span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',fontFamily: 'satoshiBold',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}><br/>14.99 USD(One-Time)</span></p>
            </Link>  
          </div>
          <div className='pricing-item'>
            <Link to='/GYS_Site/build/webhosting' style={{textDecoration: 'none', color: 'white'}}>
              <h2 style={{marginBottom: '5px'}}><span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',fontFamily: 'satoshiBold',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Website Hosting</span></h2>
              <p style={{marginTop: '5px'}}>Starting from as Low as <span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',fontFamily: 'satoshiBold',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}><br/>0.99 USD/mo</span></p>
            </Link>
          </div>
          <div className='pricing-item'>
            <Link to='/GYS_Site/build/minecrafthosting' style={{textDecoration: 'none', color: 'white'}}>
              <h2 style={{marginBottom: '5px'}}><span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',fontFamily: 'satoshiBold',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Minecraft Hosting</span></h2>
              <p style={{marginTop: '5px'}}>Starting from as Low as <span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',fontFamily: 'satoshiBold',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}><br/>4.99 USD/mo</span></p>
            </Link>
          </div>
          <div className='pricing-item'>
            <Link to='/GYS_Site/build/discordbots' style={{textDecoration: 'none', color: 'white'}}>
              <h2 style={{marginBottom: '5px'}}><span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',fontFamily: 'satoshiBold',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Discord Bot</span></h2>
              <p style={{marginTop: '5px'}}>Starting from as Low as <span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',fontFamily: 'satoshiBold',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}><br/>9.99 USD(One-Time)</span></p>
            </Link>
          </div>
          <div className='pricing-item'>
            <Link to='/GYS_Site/build/brandidentitydesigns' style={{textDecoration: 'none', color: 'white'}}>
              <h2 style={{marginBottom: '5px'}}><span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',fontFamily: 'satoshiBold',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Brand Identity Design</span></h2>
              <p style={{marginTop: '5px'}}>Starting from as Low as <span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',fontFamily: 'satoshiBold',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}><br/>29.99 USD(One-Time)</span></p>
            </Link>
          </div>
          <div className='pricing-item'>
            <Link to='/GYS_Site/build/graphics' style={{textDecoration: 'none', color: 'white'}}>
              <h2 style={{marginBottom: '5px'}}><span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',fontFamily: 'satoshiBold',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Graphics</span></h2>
              <p style={{marginTop: '5px'}}>Starting from as Low as <span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',fontFamily: 'satoshiBold',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}><br/>9.99 USD(One-Time)</span></p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricesPage