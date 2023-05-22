import React, {useEffect} from 'react'
import './websites.css'
import { FaCheck } from 'react-icons/fa'
import ContactPage from '../../home/contact/contact'
import FadeIn from 'react-fade-in/lib/FadeIn'
import { websitePrices } from '../../../data/prices'
function WebsitesPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
  <>
    <FadeIn>
      <div className='websites-pricing-container'>
        <div className='websites-pricing-header'>
          <div className='websites-pricing-header-text'>
            <h1 className='websites-pricing-header-heading'><span className="websites-pricing-header-heading" style={{backgroundImage: 'linear-gradient(to right, #5b45bb, #c6bcf1)', color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Websites</span></h1>
            <p className='websites-pricing-header-para' style={{color: 'white',fontSize: '20px', fontFamily: 'satoshiMain'}}>Our websites are an epic quality at an epic price. We provide you amazing websites that are fully responsive, fast & efficient. The source code is given to you via either <a className='websites-pricing-links' style={{textDecoration: 'color', color: '#d62976', fontFamily: 'satoshiBold'}} href='https://instagram.com/grabyourservices'>Instagram</a>, <a className='websites-pricing-links' style={{textDecoration: 'color', color: '#ffffff', fontFamily: 'satoshiBold'}} href='#'>Whatsapp</a> or <a style={{textDecoration: 'color', color: '#7289da', fontFamily: 'satoshiBold'}} className='websites-pricing-links' href='https://discord.gg/WPq6zWuM'>Discord</a>.<br/>All prices are in United States Dollar(USD)</p>
          </div>
          <div className='websites-pricing-header-tiers'>
            <div className='websites-pricing-header-tiers-tiers'>
              <div className='websites-pricing-header-tier-bronze'>
                <h1 className='websites-pricing-header-tier-heading' style={{marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: '#CD7F32', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Bronze</span></h1>
                <p style={{textAlign: 'center',opacity: '1',marginBottom: '0', fontSize: '16px'}}>NOW</p>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: '#CD7F32', opacity:'0.5', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>{websitePrices.bronze}$ - {websitePrices.bronzeMax}$</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#CD7F32' style={{marginRight: '7.5px'}}/>Project written in React/Wordpress</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#CD7F32' style={{marginRight: '7.5px'}}/>Can be downloaded and installed anywhere</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#CD7F32' style={{marginRight: '7.5px'}}/>1 Revision</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#CD7F32' style={{marginRight: '7.5px'}}/>Fully Responsive on Mobile, TV and Desktop</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#CD7F32' style={{marginRight: '7.5px'}}/>Upto 3 Pages</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#CD7F32' style={{marginRight: '7.5px'}}/>Upto 0 Products</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#CD7F32' style={{marginRight: '7.5px'}}/>Upto 25 Sub-Pages</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#CD7F32' style={{marginRight: '7.5px', opacity: '0.5'}}/>Custom Business-Licensed SVGS used</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#CD7F32' style={{marginRight: '7.5px', opacity: '0.5'}}/>PayPal, Stripe & Bank integration</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#CD7F32' style={{marginRight: '7.5px', opacity: '0.5'}}/>Database capabilities(Login page etc.)</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#CD7F32' style={{marginRight: '7.5px', opacity: '0.5'}}/>Subscription Products</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#CD7F32' style={{marginRight: '7.5px', opacity: '0.5'}}/>Free Domain (1 yr)</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#CD7F32' style={{marginRight: '7.5px', opacity: '0.5'}}/>Free Hosting (1 yr)</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#CD7F32' style={{marginRight: '7.5px', opacity: '0.5'}}/>Free Brand Identity Design</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#CD7F32' style={{marginRight: '7.5px', opacity: '0.5'}}/>Free GFX</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#CD7F32' style={{marginRight: '7.5px', opacity: '0.5'}}/>Watermark</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#CD7F32' style={{marginRight: '7.5px', opacity: '0.5'}}/>FIGMA Template required</p>
                </div>
              </div>
              <div className='websites-pricing-header-tier-main'>
                <h1 className='websites-pricing-header-tier-heading' style={{textAlign: 'center',marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: '#FFD700', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Gold</span></h1>
                <p style={{textAlign: 'center',opacity: '1',marginBottom: '0', fontSize: '16px'}}>NOW</p>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: '#FFD700', opacity:'0.5', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>{websitePrices.gold}$ - {websitePrices.goldMax}$</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#FFD700' style={{marginRight: '7.5px'}}/>Project written in React/Wordpress</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#FFD700' style={{marginRight: '7.5px'}}/>Can be downloaded and installed anywhere</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#FFD700' style={{marginRight: '7.5px'}}/>5 Revisions</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#FFD700' style={{marginRight: '7.5px'}}/>Fully Responsive on Mobile, TV and Desktop</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#FFD700' style={{marginRight: '7.5px'}}/>Upto 10 Pages</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#FFD700' style={{marginRight: '7.5px'}}/>Upto 25 Products</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#FFD700' style={{marginRight: '7.5px'}}/>Upto 50 Sub-Pages</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#FFD700' style={{marginRight: '7.5px'}}/>Custom Business-Licensed SVGS used</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#FFD700' style={{marginRight: '7.5px'}}/>PayPal, Stripe & Bank integration</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#FFD700' style={{marginRight: '7.5px'}}/>Database capabilities(Login page etc.)</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#FFD700' style={{marginRight: '7.5px'}}/>Subscription Products</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#FFD700' style={{marginRight: '7.5px'}}/>Free Domain (1 yr)</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#FFD700' style={{marginRight: '7.5px'}}/>Free Hosting (1 yr)</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#FFD700' style={{marginRight: '7.5px'}}/>Free Brand Identity Design</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#FFD700' style={{marginRight: '7.5px'}}/>Free GFX(Any 5)</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#FFD700' style={{marginRight: '7.5px', opacity: '0.5'}}/>Watermark</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#FFD700' style={{marginRight: '7.5px', opacity: '0.5'}}/>FIGMA Template required</p>
                </div>
              </div>
              <div className='websites-pricing-header-tier-silver'>
                <h1 className='websites-pricing-header-tier-heading' style={{marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: '#808080', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Silver</span></h1>
                <p style={{textAlign: 'center',opacity: '1',marginBottom: '0', fontSize: '16px'}}>NOW</p>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: '#808080', opacity:'0.5', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>{websitePrices.silver}$ - {websitePrices.silverMax}$</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#808080' style={{marginRight: '7.5px'}}/>Project written in React/Wordpress</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#808080' style={{marginRight: '7.5px'}}/>Can be downloaded and installed anywhere</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#808080' style={{marginRight: '7.5px'}}/>3 Revisions</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#808080' style={{marginRight: '7.5px'}}/>Fully Responsive on Mobile, TV and Desktop</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#808080' style={{marginRight: '7.5px'}}/>Upto 3 Pages</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#808080' style={{marginRight: '7.5px'}}/>Upto 10 Products</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#808080' style={{marginRight: '7.5px'}}/>Upto 35 Sub-Pages</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#808080' style={{marginRight: '7.5px'}}/>Custom Business-Licensed SVGS used</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#808080' style={{marginRight: '7.5px'}}/>PayPal, Stripe & Bank integration</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#808080' style={{marginRight: '7.5px'}}/>Database capabilities(Login page etc.)</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#808080' style={{marginRight: '7.5px', opacity: '0.5'}}/>Subscription Products</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#808080' style={{marginRight: '7.5px', opacity: '0.5'}}/>Free Domain (1 yr)</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#808080' style={{marginRight: '7.5px', opacity: '0.5'}}/>Free Hosting (1 yr)</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#808080' style={{marginRight: '7.5px', opacity: '0.5'}}/>Free Brand Identity Design</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#808080' style={{marginRight: '7.5px', opacity: '0.5'}}/>Free GFX</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#808080' style={{marginRight: '7.5px', opacity: '0.5'}}/>Watermark</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#808080' style={{marginRight: '7.5px', opacity: '0.5'}}/>FIGMA Template required</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    </FadeIn>
  </>
  )
}

export default WebsitesPage