import React from 'react'
import { BsFillLightningChargeFill } from 'react-icons/bs'
import FadeIn from 'react-fade-in/lib/FadeIn'
import './topheader.css'
function TopHeader() {
  return (
  <>
    <FadeIn>
      <div className="nav-topheader">
        <p className='nav-topheader-text'><span style={{fontFamily: 'fa'}}>FLASH SALE: </span> Upto 50% off on Web Products & 30% off on Discord Products!</p>
      </div>
    </FadeIn>
  </>
  )
}

export default TopHeader