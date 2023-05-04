import React from 'react'
import { FaCheck } from 'react-icons/fa'
import ContactPage from '../../home/contact/contact'
import FadeIn from 'react-fade-in/lib/FadeIn'
function WebsiteHostingPage() {
  return (
  <>
    <FadeIn>
      <div className='websites-pricing-container'>
        <div className='websites-pricing-header'>
          <div className='websites-pricing-header-text'>
            <h1 className='websites-pricing-header-heading'><span className="websites-pricing-header-heading" style={{backgroundImage: 'linear-gradient(to right, #5b45bb, #c6bcf1)', color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Website Hosting Tiers</span></h1>
            <p className='websites-pricing-header-para' style={{color: 'white',fontSize: '20px', fontFamily: 'satoshiMain'}}>Our website hosting is cheap yet effective. We provide you hosting that is fully swift & efficient. The hosting details is given to you via either <a className='websites-pricing-links' style={{textDecoration: 'color', color: '#d62976', fontFamily: 'satoshiBold'}} href='https://instagram.com/grabyourservices'>Instagram</a>, <a className='websites-pricing-links' style={{textDecoration: 'color', color: '#ffffff', fontFamily: 'satoshiBold'}} href='#'>Whatsapp</a> or <a style={{textDecoration: 'color', color: '#7289da', fontFamily: 'satoshiBold'}} className='websites-pricing-links' href='https://discord.gg/3yHfjcKgr8'>Discord</a>.<br/>All prices are in United States Dollar(USD)</p>
          </div>
          <div className='websites-pricing-header-tiers'>
            <div className='websites-pricing-header-tiers-tiers'>
              <div className='websites-pricing-header-tier-bronze'>
                <h1 className='websites-pricing-header-tier-heading' style={{marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: '#CD7F32', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Bronze</span></h1>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: '#CD7F32', opacity:'0.5', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>0.99$/mo</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#CD7F32' style={{marginRight: '7.5px'}}/>10GB Web Disk</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#CD7F32' style={{marginRight: '7.5px'}}/>1 Domain</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#CD7F32' style={{marginRight: '7.5px'}}/>5 Subdomains</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#CD7F32' style={{marginRight: '7.5px'}}/>Unlimited Email (Accounts + Disk)</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#CD7F32' style={{marginRight: '7.5px'}}/>10 MySQL Databases</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#CD7F32' style={{marginRight: '7.5px'}}/>Enterprise DDoS Mitigation</p>
                </div>
              </div>
              <div className='websites-pricing-header-tier-main'>
                <h1 className='websites-pricing-header-tier-heading' style={{textAlign: 'center',marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: '#FFD700', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Gold</span></h1>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: '#FFD700', opacity:'0.5', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>9.99$/mo</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#FFD700' style={{marginRight: '7.5px'}}/>Unlimited Web Disk*</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#FFD700' style={{marginRight: '7.5px'}}/>Unlimited Domains</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#FFD700' style={{marginRight: '7.5px'}}/>Unlimited Subdomains</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#FFD700' style={{marginRight: '7.5px'}}/>Unlimited Email (Accounts + Disk)</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#FFD700' style={{marginRight: '7.5px'}}/>Unlimited MySQL Databases</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#FFD700' style={{marginRight: '7.5px'}}/>Enterprise DDoS Mitigation</p>
                  <p style={{marginLeft:'10%', marginTop: '15px', marginBottom: '5px', textAlign: 'left'}}>* Cannot be used as a file storage server</p>
                </div>
              </div>
              <div className='websites-pricing-header-tier-silver'>
                <h1 className='websites-pricing-header-tier-heading' style={{marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: '#808080', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Silver</span></h1>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: '#808080', opacity:'0.5', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>4.99$/mo</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#808080' style={{marginRight: '7.5px'}}/>50GB Web Disk</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#808080' style={{marginRight: '7.5px'}}/>5 Domains</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#808080' style={{marginRight: '7.5px'}}/>25 Subdomains</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#808080' style={{marginRight: '7.5px'}}/>Unlimited Email (Accounts + Disk)</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#808080' style={{marginRight: '7.5px'}}/>50 MySQL Databases</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='#808080' style={{marginRight: '7.5px'}}/>Enterprise DDoS Mitigation</p>
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
          Copyright CC 2023 : GrabYourServices.com. Made with Love by Ateeb Sohail(Employee @ GrabYourServices)
          </p>
        </div>
      </div>
    </FadeIn>
  </>
  )
}

export default WebsiteHostingPage