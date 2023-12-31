import React from 'react'
import './prices.css'
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup'
import { websitePrices, discordBotPrices, appHostingPrices, gameHostingPrices, graphicsPrices} from '../../../data/prices'
function PricesPage() {
  return (
    <div className='prices-header'>
      <div className='prices-items'>
        <h1 className='work-header-heading'><span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Convinced?<br/><span className='pricing-margin'>Check our Pricing!</span></span></h1>
        <div className='pricing-container'>
          <Link to='/websites' style={{textDecoration: 'none', color: 'white'}}>
            <div className='pricing-item'>
              <h2 style={{marginBottom: '5px'}}><span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',fontFamily: 'satoshiBold',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Websites</span></h2>
              <p style={{marginTop: '5px'}}>Starting from as Low as <span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',fontFamily: 'satoshiBold',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}><br/>{websitePrices.min} USD</span></p>
            </div>
          </Link> 
          <Link to='/apphosting' style={{textDecoration: 'none', color: 'white'}}>
            <div className='pricing-item'>
              <h2 style={{marginBottom: '5px'}}><span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',fontFamily: 'satoshiBold',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Application Hosting</span></h2>
              <p style={{marginTop: '5px'}}>Starting from as Low as <span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',fontFamily: 'satoshiBold',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}><br/>{appHostingPrices.min} USD/GB</span></p>
            </div>
          </Link>
          <Link to='/gamehosting' style={{textDecoration: 'none', color: 'white'}}>
            <div className='pricing-item'>
              <h2 style={{marginBottom: '5px'}}><span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',fontFamily: 'satoshiBold',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Game Hosting</span></h2>
              <p style={{marginTop: '5px'}}>Starting from as Low as <span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',fontFamily: 'satoshiBold',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}><br/>{gameHostingPrices.min} USD/GB</span></p>
            </div>
          </Link>
          <Link to='/discordbots' style={{textDecoration: 'none', color: 'white'}}>
            <div className='pricing-item'>
              <h2 style={{marginBottom: '5px'}}><span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',fontFamily: 'satoshiBold',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Discord Bots</span></h2>
              <p style={{marginTop: '5px'}}>Starting from as Low as <span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',fontFamily: 'satoshiBold',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}><br/>{discordBotPrices.min} USD</span></p>
            </div>
          </Link>
          <Link to='/graphics' style={{textDecoration: 'none', color: 'white'}}>
            <div className='pricing-item'>
              <h2 style={{marginBottom: '5px'}}><span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',fontFamily: 'satoshiBold',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Graphics</span></h2>
              <p style={{marginTop: '5px'}}>Starting from as Low as <span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',fontFamily: 'satoshiBold',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}><br/>{graphicsPrices.min} USD</span></p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PricesPage