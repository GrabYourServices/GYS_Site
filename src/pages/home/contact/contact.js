import React from 'react'
import './contact.css'
import { FaDiscord, FaWhatsapp, FaInstagram } from 'react-icons/fa'
function ContactPage() {
  const whatsApp = () => {
    window.open('https://wa.me/00923362833222')
  }
  const discord = () => {
    window.open('https://discord.gg/WPq6zWuM')
  }
  const instagram = () => {
    window.open('https://instagram.com/grabyourservices')
  }
  return (
    <div className='contact-header'>
      <div className='contact-container'>
        <h1 className='pricing-header-heading'><span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Interested?<br/><span className='pricing-margin'>Get in Touch!</span></span></h1>
        <div className='pricing-container'>
          <div className='contact-item'>
            <FaWhatsapp onClick={whatsApp} className='contact-icon' color="white" size={64}></FaWhatsapp>
          </div>
          <div className='contact-item'>
            <FaDiscord onClick={discord} className='contact-icon' color="#7289da" size={64}></FaDiscord>
          </div>
          <div className='contact-item'>
            <FaInstagram onClick={instagram} className='contact-icon' color="#d62976" size={64}></FaInstagram>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage