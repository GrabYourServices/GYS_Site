import React from 'react'
import './supportgame.css'
import { SiMinecraft } from 'react-icons/si'
function SupportGamePage() {
  return (
    <div className='supportgame-header'>
      <h1 className='work-header-heading'><span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Curious?<br/><span className='pricing-margin'>We support</span></span></h1>
      <div className='supportgame-container'>
        <SiMinecraft color='#AAAAAA' className='supportgame-item' size={96}/>
      </div>
      <p style={{
        color: 'white',
        fontFamily: 'satoshiMain',
        fontSize: '16px'
      }}>More coming soon.</p>
    </div>
  )
}
export default SupportGamePage