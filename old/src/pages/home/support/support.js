import React from 'react'
import './support.css'
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup'
import { FaPhp, FaPython, FaJava } from 'react-icons/fa'
import { DiNginx, DiNodejs } from 'react-icons/di'
import { SiApache, SiJavascript, SiNodemon, SiMinecraft } from 'react-icons/si'
import { TbBrandGolang } from 'react-icons/tb'
function SupportPage() {
  return (
    <div className='support-header'>
      <h1 className='work-header-heading'><span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Curious?<br/><span className='pricing-margin'>We support</span></span></h1>
      <div className='support-container'>
        <DiNodejs color='#68a063' className='support-item' size={96}/>
        <FaPhp color='#8993be' className='support-item' size={96}/>
        <FaPython color='#306998' className='support-item' size={96}/>
        <FaJava color='#f89820' className='support-item' size={96}/>
        <DiNginx color='#009900' className='support-item' size={96}/>
        <SiApache color='#e4682a' className='support-item' size={96}/>
        <SiJavascript color='#f0db4f' className='support-item' size={96}/>
        <SiNodemon color='#76D04B' className='support-item' size={96}/>
        <TbBrandGolang color='#00ADD8' className='support-item' size={96}/>
      </div>
    </div>
  )
}
export default SupportPage