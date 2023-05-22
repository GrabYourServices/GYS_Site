import React, {useState, useEffect} from 'react'
import './navbar.css'
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaSortDown, FaSortUp } from 'react-icons/fa';
import { BsFillLightningChargeFill } from 'react-icons/bs'
import Popup from 'reactjs-popup';
import { BsFillTelephoneFill } from 'react-icons/bs'
import FadeIn from 'react-fade-in/lib/FadeIn';
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToAbout() {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  }
  const contentStyle = { 
    background: 'var(--secondary)',
    borderRadius: '15px',
    marginTop: '10px',
    position: 'absolute',
    color: 'white',
    padding: '30px',
    zIndex:'99999999',
    boxShadow: '0 0 10px 10px rgba(0,0,0,0.3)',
  };
  const overlayStyle = { 
    background: 'rgba(0,0,0,0)' 
  };
  const arrowStyle = { 
    background: 'var(--secondary)',
  };
  return (
    <FadeIn>
      <div style={{display:'flex', flexDirection: 'column'}}>
        <div className={isScrolled ? "nav-container scrolled" : "nav-container "}>
          <div className='nav-logo'>
            <h1>GrabYour<span style={{color: '#8271cb'}}>Services</span></h1>
          </div>
          <div className='nav-contents'>
            <nav className='nav-contents-container'>
              <ul>
                <li>
                  <Link to='/'>
                    <p className='modal-a'>Home</p>
                  </Link>
                </li>    
                <Popup
                trigger={
                  <li style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifySelf: 'center',
                    alignSelf: 'center',
                  }}>
                    <a  style={{cursor: 'pointer'}} >Pricing</a>
                  </li>
                }
                className='modal-popup-nav'
                closeOnDocumentClick
                {...{ contentStyle, overlayStyle, arrowStyle }} >
                  <FadeIn>
                    <li className='modal-li'>
                      <Link to='/websites'>
                        <p className='modal-a'>Websites</p>
                      </Link>
                    </li>
                    <li className='modal-li'>
                      <Link to='/apphosting'>
                        <p className='modal-a'>Application Hosting</p>
                      </Link>                
                    </li>
                    <li className='modal-li'>
                      <Link to='/gamehosting'>
                        <p className='modal-a'>Game Hosting</p>
                      </Link>
                    </li>
                    <li className='modal-li'>
                      <Link to='/discordbots'>
                        <p className='modal-a'>Discord Bots</p>
                      </Link>
                    </li>
                    <li className='modal-li'>
                      <Link to='/graphics'>
                        <p className='modal-a'>Graphics</p>
                      </Link>
                    </li>
                  </FadeIn>
                </Popup>
                <li>
                  <Link to='/'>
                    <p className='modal-a'>Billing</p>
                  </Link>
                </li>
                <Link style={{
                  width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifySelf: 'center',
                    alignSelf: 'center',
                    marginLeft: '20px',
                  }} to="/grabpanel">
                  <button className='home-header-button-fill'>GrabPanel</button>
                </Link>  
                <Link style={{
                  width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifySelf: 'center',
                    alignSelf: 'center',
                    marginLeft: '20px',
                  }} to="/grabpanel">
                  <button className='home-header-button-fill'><BsFillTelephoneFill color='white'/></button>
                </Link>  
              </ul>
            </nav>
            <GiHamburgerMenu color="#8271cb" onClick={toggleMenu} size={32} className='nav-icon' />
            <nav className={`nav-hamburger-menu ${isOpen ? "open" : ""}`}>
              <ul className="hamburger-menu-list" onClick={toggleMenu}>
                  <FadeIn>
                    <li className="hamburger-menu-item">
                      <Link to='/'>
                        <p className='modal-a'>Home</p>
                      </Link>
                    </li>
                    <li className='modal-li'>
                      <Link to='/websites'>
                        <p className='modal-a'>Websites</p>
                      </Link>
                    </li>
                    <li className='modal-li'>
                      <Link to='/apphosting'>
                        <p className='modal-a'>Application Hosting</p>
                      </Link>                
                    </li>
                    <li className='modal-li'>
                      <Link to='/gamehosting'>
                        <p className='modal-a'>Game Hosting</p>
                      </Link>
                    </li>
                    <li className='modal-li'>
                      <Link to='/discordbots'>
                        <p className='modal-a'>Discord Bots</p>
                      </Link>
                    </li>
                    <li className='modal-li'>
                      <Link to='/graphics'>
                        <p className='modal-a'>Graphics</p>
                      </Link>
                    </li>
                    <li className='modal-li'>
                      <Link to='/grabpanel'>
                        <p className='modal-a'>GrabPanel</p>
                      </Link>
                    </li>
                  </FadeIn>
                <button onClick={toggleMenu} style={{
                  backgroundColor:'white',
                  width: '100%',
                  color: '#8271cb',
                  border: 'none',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  borderRadius: '10px',
                }}>
                  Back
                </button>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

export default NavBar