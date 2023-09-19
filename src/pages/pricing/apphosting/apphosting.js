import { Link } from 'react-router-dom'
import React from 'react'
import { FaCheck } from 'react-icons/fa'
import ContactPage from '../../home/contact/contact'
import './apphosting.css'
import SupportPage from '../../home/support/support'
import { appHostingPrices } from '../../../data/prices'
function AppHostingPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
  <>
    <>
      <div className='websites-pricing-container'>
        <div className='websites-pricing-header'>
          <div className='websites-pricing-header-text'>
            <h1 className='websites-pricing-header-heading'><span className="websites-pricing-header-heading" style={{backgroundImage: 'linear-gradient(to right, #5b45bb, #c6bcf1)', color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>App Hosting</span></h1>
            <p className='websites-pricing-header-para' style={{color: 'white',fontSize: '20px', fontFamily: 'satoshiMain'}}>Our application hosting is cheap yet effective. We provide you hosting that is fully swift & efficient. After purchasing you'd be redirected to the GrabPanel. For custom plans you can contact us via either <a className='websites-pricing-links' style={{textDecoration: 'color', color: '#d62976', fontFamily: 'satoshiBold'}} href='https://instagram.com/grabyourservices'>Instagram</a>, <a className='websites-pricing-links' style={{textDecoration: 'color', color: '#ffffff', fontFamily: 'satoshiBold'}} href='#'>Whatsapp</a> or <a style={{textDecoration: 'color', color: '#7289da', fontFamily: 'satoshiBold'}} className='websites-pricing-links' href='https://discord.gg/WPq6zWuM'>Discord</a>.<br/>All prices are in United States Dollar(USD)</p>
          </div>
          <div className='websites-pricing-header-tiers'>
            <div className='websites-pricing-header-tiers-tiers'>
              <div className='websites-pricing-header-tier-bronze'>
                <h1 className='websites-pricing-header-tier-heading' style={{marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: '#CD7F32', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Bronze</span></h1>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: '#CD7F32', opacity:'0.5', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>{appHostingPrices.bronze}$/mo</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#CD7F32' style={{marginRight: '7.5px'}}/>1GB RAM</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#CD7F32' style={{marginRight: '7.5px'}}/>0.5vCores</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#CD7F32' style={{marginRight: '7.5px'}}/>10GB HDD</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#CD7F32' style={{marginRight: '7.5px'}}/>1 MySQL DB's</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#CD7F32' style={{marginRight: '7.5px'}}/>1 IPv4</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#CD7F32' style={{marginRight: '7.5px'}}/>Unlimited Bandwidth</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#CD7F32' style={{marginRight: '7.5px'}}/>Git Support</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#CD7F32' style={{marginRight: '7.5px'}}/>Runs any program*</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#CD7F32' style={{marginRight: '7.5px'}}/>Fast Support</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#CD7F32' style={{marginRight: '7.5px'}}/>Free SSL</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}>* The supported programs are written below.</p>
                </div>
                <Link style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifySelf: 'center',
                    alignSelf: 'center',
                  }} to="/grabpanel">
                  <button className='websites-pricing-header-tier-heading-buttons-bronze'>Purchase</button>
                </Link>  
              </div>
              <div className='websites-pricing-header-tier-main'>
                <h1 className='websites-pricing-header-tier-heading' style={{textAlign: 'center',marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: '#FFD700', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Gold</span></h1>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: '#FFD700', opacity:'0.5', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>{appHostingPrices.gold}$/mo</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#FFD700' style={{marginRight: '7.5px'}}/>8GB RAM</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#FFD700' style={{marginRight: '7.5px'}}/>4vCores</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#FFD700' style={{marginRight: '7.5px'}}/>50GB HDD</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#FFD700' style={{marginRight: '7.5px'}}/>10 MySQL DB's</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#FFD700' style={{marginRight: '7.5px'}}/>1 IPv4</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#FFD700' style={{marginRight: '7.5px'}}/>Unlimited Bandwidth</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#FFD700' style={{marginRight: '7.5px'}}/>Git Support</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#FFD700' style={{marginRight: '7.5px'}}/>Runs any program*</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#FFD700' style={{marginRight: '7.5px'}}/>Fast Support</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#FFD700' style={{marginRight: '7.5px'}}/>Free SSL</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}>* The supported programs are written below.</p>
                </div>
                <Link style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifySelf: 'center',
                    alignSelf: 'center',
                  }} to="/grabpanel">
                  <button className='websites-pricing-header-tier-heading-buttons-main'>Purchase</button>
                </Link>  
              </div>
              <div className='websites-pricing-header-tier-silver'>
                <h1 className='websites-pricing-header-tier-heading' style={{marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: '#808080', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Silver</span></h1>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: '#808080', opacity:'0.5', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>{appHostingPrices.silver}$/mo</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#808080' style={{marginRight: '7.5px'}}/>4GB RAM</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#808080' style={{marginRight: '7.5px'}}/>2vCores</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#808080' style={{marginRight: '7.5px'}}/>25GB HDD</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#808080' style={{marginRight: '7.5px'}}/>5 MySQL DB's</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#808080' style={{marginRight: '7.5px'}}/>1 IPv4</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#808080' style={{marginRight: '7.5px'}}/>Unlimited Bandwidth</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#808080' style={{marginRight: '7.5px'}}/>Git Support</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#808080' style={{marginRight: '7.5px'}}/>Runs any program*</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#808080' style={{marginRight: '7.5px'}}/>Fast Support</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#808080' style={{marginRight: '7.5px'}}/>Free SSL</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}>* The supported programs are written below.</p>
                </div>
                <Link style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifySelf: 'center',
                    alignSelf: 'center',
                  }} to="/grabpanel">
                  <button className='websites-pricing-header-tier-heading-buttons-silver'>Purchase</button>
                </Link>  
              </div>
            </div>
          </div>
        </div>
        <SupportPage/>
        <ContactPage/>
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
          Copyright CC 2022. Tel : +92 33 GRAB YOUR (+92 33 4722 9687). Unregistered Business.
          </p>
        </div>
      </div>
    </>
  </>
  )
}

export default AppHostingPage