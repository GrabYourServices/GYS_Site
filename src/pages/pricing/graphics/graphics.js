import React from 'react'
import './graphics.css'
import { FaCheck } from 'react-icons/fa'
import ContactPage from '../../home/contact/contact'
import FadeIn from 'react-fade-in/lib/FadeIn'
import { Link } from 'react-router-dom'
function GraphicsPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
  <>
    <FadeIn>
      <div className='websites-pricing-container'>
        <div className='websites-pricing-header'>
          <div className='websites-pricing-header-text'>
            <h1 className='websites-pricing-header-heading'><span className="websites-pricing-header-heading" style={{backgroundImage: 'linear-gradient(to right, #5b45bb, #c6bcf1)', color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Graphics</span></h1>
            <p className='websites-pricing-header-para' style={{color: 'white',fontSize: '20px', fontFamily: 'satoshiMain'}}>Our graphics are made by designers from countries such as Pakistan, United Kingdom, Palestine, Russia, India and more. We provide you amazing content that is made with love. The source code is given to you via either <a className='websites-pricing-links' style={{textDecoration: 'color', color: '#d62976', fontFamily: 'satoshiBold'}} href='https://instagram.com/grabyourservices'>Instagram</a>, <a className='websites-pricing-links' style={{textDecoration: 'color', color: '#ffffff', fontFamily: 'satoshiBold'}} href='#'>Whatsapp</a> or <a style={{textDecoration: 'color', color: '#7289da', fontFamily: 'satoshiBold'}} className='websites-pricing-links' href='https://discord.gg/WPq6zWuM'>Discord</a>.<br/>All prices are in United States Dollar(USD)</p>
          </div>
          <div className='websites-pricing-header-tiers'>
            <div className='websites-pricing-header-tiers-tiers'>
              
              <div className='websites-pricing-header-tier-normal'>
                <h1 className='websites-pricing-header-tier-heading' style={{marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: 'var(--primary-light)', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Logo</span></h1>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: 'white', opacity:'0.8', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>9.99$</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>SVG Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Transparency Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Source Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Day Delivery</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Revisions</p>
                </div>
                <Link style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifySelf: 'center',
                    alignSelf: 'center',
                  }} to="/grabpanel">
                  <button className='websites-pricing-header-tier-heading-buttons-normal'>Purchase</button>
                </Link>  
              </div>

              <div className='websites-pricing-header-tier-normal'>
                <h1 className='websites-pricing-header-tier-heading' style={{marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: 'var(--primary-light)', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Brand Identity</span></h1>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: 'white', opacity:'0.8', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>29.99$</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>SVG Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Transparency Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Source Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Day Delivery</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Revisions</p>
                </div>
                <Link style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifySelf: 'center',
                    alignSelf: 'center',
                  }} to="/grabpanel">
                  <button className='websites-pricing-header-tier-heading-buttons-normal'>Purchase</button>
                </Link>  
              </div>

              <div className='websites-pricing-header-tier-normal'>
                <h1 className='websites-pricing-header-tier-heading' style={{marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: 'var(--primary-light)', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Business Card</span></h1>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: 'white', opacity:'0.8', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>4.99$</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>SVG Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Transparency Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Source Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Day Delivery</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Revisions</p>
                </div>
                <Link style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifySelf: 'center',
                    alignSelf: 'center',
                  }} to="/grabpanel">
                  <button className='websites-pricing-header-tier-heading-buttons-normal'>Purchase</button>
                </Link>  
              </div>
            </div>
          </div>
          <div className='websites-pricing-header-tiers'>
            <div className='websites-pricing-header-tiers-tiers'>
              
              <div className='websites-pricing-header-tier-normal'>
                <h1 className='websites-pricing-header-tier-heading' style={{marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: 'var(--primary-light)', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Letterhead</span></h1>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: 'white', opacity:'0.8', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>4.99$</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>SVG Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Transparency Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Source Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Day Delivery</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Revisions</p>
                </div>
                <Link style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifySelf: 'center',
                    alignSelf: 'center',
                  }} to="/grabpanel">
                  <button className='websites-pricing-header-tier-heading-buttons-normal'>Purchase</button>
                </Link>  
              </div>

              <div className='websites-pricing-header-tier-normal'>
                <h1 className='websites-pricing-header-tier-heading' style={{marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: 'var(--primary-light)', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Flyer Design</span></h1>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: 'white', opacity:'0.8', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>9.99$</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>SVG Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Transparency Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Source Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Day Delivery</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Revisions</p>
                </div>
                <Link style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifySelf: 'center',
                    alignSelf: 'center',
                  }} to="/grabpanel">
                  <button className='websites-pricing-header-tier-heading-buttons-normal'>Purchase</button>
                </Link>  
              </div>

              <div className='websites-pricing-header-tier-normal'>
                <h1 className='websites-pricing-header-tier-heading' style={{marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: 'var(--primary-light)', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Website UI</span></h1>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: 'white', opacity:'0.8', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>29.99$</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>SVG Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Transparency Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Source Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Day Delivery</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Revisions</p>
                </div>
                <Link style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifySelf: 'center',
                    alignSelf: 'center',
                  }} to="/grabpanel">
                  <button className='websites-pricing-header-tier-heading-buttons-normal'>Purchase</button>
                </Link>  
              </div>
            </div>
          </div>
          <div className='websites-pricing-header-tiers'>
            <div className='websites-pricing-header-tiers-tiers'>
              
              <div className='websites-pricing-header-tier-normal'>
                <h1 className='websites-pricing-header-tier-heading' style={{marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: 'var(--primary-light)', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>App UI</span></h1>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: 'white', opacity:'0.8', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>39.99$</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>SVG Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Transparency Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Source Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Day Delivery</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Revisions</p>
                </div>
                <Link style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifySelf: 'center',
                    alignSelf: 'center',
                  }} to="/grabpanel">
                  <button className='websites-pricing-header-tier-heading-buttons-normal'>Purchase</button>
                </Link>  
              </div>

              <div className='websites-pricing-header-tier-normal'>
                <h1 className='websites-pricing-header-tier-heading' style={{marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: 'var(--primary-light)', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Landing Page</span></h1>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: 'white', opacity:'0.8', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>14.99$</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>SVG Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Transparency Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Source Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Day Delivery</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Revisions</p>
                </div>
                <Link style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifySelf: 'center',
                    alignSelf: 'center',
                  }} to="/grabpanel">
                  <button className='websites-pricing-header-tier-heading-buttons-normal'>Purchase</button>
                </Link>  
              </div>

              <div className='websites-pricing-header-tier-normal'>
                <h1 className='websites-pricing-header-tier-heading' style={{marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: 'var(--primary-light)', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Post Design</span></h1>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: 'white', opacity:'0.8', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>0.99$ - 4.99$</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>SVG Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Transparency Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Source Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Day Delivery</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Revisions</p>
                </div>
                <Link style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifySelf: 'center',
                    alignSelf: 'center',
                  }} to="/grabpanel">
                  <button className='websites-pricing-header-tier-heading-buttons-normal'>Purchase</button>
                </Link>  
              </div>
            </div>
          </div>
          <div className='websites-pricing-header-tiers'>
            <div className='websites-pricing-header-tiers-tiers'>
              
              <div className='websites-pricing-header-tier-normal'>
                <h1 className='websites-pricing-header-tier-heading' style={{marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: 'var(--primary-light)', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Image Edit</span></h1>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: 'white', opacity:'0.8', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>4.99$</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>SVG Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Transparency Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Source Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Day Delivery</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Revisions</p>
                </div>
                <Link style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifySelf: 'center',
                    alignSelf: 'center',
                  }} to="/grabpanel">
                  <button className='websites-pricing-header-tier-heading-buttons-normal'>Purchase</button>
                </Link>  
              </div>

              <div className='websites-pricing-header-tier-normal'>
                <h1 className='websites-pricing-header-tier-heading' style={{marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: 'var(--primary-light)', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Poster Design</span></h1>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: 'white', opacity:'0.8', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>9.99$</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>SVG Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Transparency Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Source Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Day Delivery</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Revisions</p>
                </div>
                <Link style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifySelf: 'center',
                    alignSelf: 'center',
                  }} to="/grabpanel">
                  <button className='websites-pricing-header-tier-heading-buttons-normal'>Purchase</button>
                </Link>  
              </div>

              <div className='websites-pricing-header-tier-normal'>
                <h1 className='websites-pricing-header-tier-heading' style={{marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: 'var(--primary-light)', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Presentation</span></h1>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: 'white', opacity:'0.8', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>9.99$</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>SVG Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Transparency Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Source Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Day Delivery</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Revisions</p>
                </div>
                <Link style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifySelf: 'center',
                    alignSelf: 'center',
                  }} to="/grabpanel">
                  <button className='websites-pricing-header-tier-heading-buttons-normal'>Purchase</button>
                </Link>  
              </div>
            </div>
          </div>
          <div className='websites-pricing-header-tiers'>
            <div className='websites-pricing-header-tiers-tiers'>
              
              <div className='websites-pricing-header-tier-normal'>
                <h1 className='websites-pricing-header-tier-heading' style={{marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: 'var(--primary-light)', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Menu Design</span></h1>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: 'white', opacity:'0.8', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>14.99$</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>SVG Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Transparency Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Source Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Day Delivery</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Revisions</p>
                </div>
                <Link style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifySelf: 'center',
                    alignSelf: 'center',
                  }} to="/grabpanel">
                  <button className='websites-pricing-header-tier-heading-buttons-normal'>Purchase</button>
                </Link>  
              </div>

              <div className='websites-pricing-header-tier-normal'>
                <h1 className='websites-pricing-header-tier-heading' style={{marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: 'var(--primary-light)', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Invite Design</span></h1>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: 'white', opacity:'0.8', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>9.99$</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>SVG Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Transparency Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Source Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Day Delivery</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Revisions</p>
                </div>
                <Link style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifySelf: 'center',
                    alignSelf: 'center',
                  }} to="/grabpanel">
                  <button className='websites-pricing-header-tier-heading-buttons-normal'>Purchase</button>
                </Link>  
              </div>

              <div className='websites-pricing-header-tier-normal'>
                <h1 className='websites-pricing-header-tier-heading' style={{marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: 'var(--primary-light)', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Resume</span></h1>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: 'white', opacity:'0.8', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>9.99$</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>SVG Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Transparency Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Source Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Day Delivery</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Revisions</p>
                </div>
                <Link style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifySelf: 'center',
                    alignSelf: 'center',
                  }} to="/grabpanel">
                  <button className='websites-pricing-header-tier-heading-buttons-normal'>Purchase</button>
                </Link>  
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

export default GraphicsPage