import React, {useState} from 'react'
import './work.css'
//imgs
/*
import panda from '../../imgs/assets/animals/panda.png'
import koala from '../../imgs/assets/animals/koala.png'
import tiger from '../../imgs/assets/animals/tiger.png'
import cat from '../../imgs/assets/animals/cat.png'
import fox from '../../imgs/assets/animals/fox.png'
import rabbit from '../../imgs/assets/animals/rabbit.png'
import weird from '../../imgs/assets/animals/weird.png'
import hippo from '../../imgs/assets/animals/hippo.png'
*/
//projects 
import project1 from '../../../imgs/assets/projects/disminer.png'
import project2 from '../../../imgs/assets/projects/he.jfif'
import muq1 from '../../../imgs/assets/projects/muq1.jpeg'
import ze from '../../../imgs/assets/projects/ze.jfif'
import muq2 from '../../../imgs/assets/projects/muq2.jpeg'
import muq3 from '../../../imgs/assets/projects/muq3.jpeg'
function WorkPage() {
  const [isShownOne, setIsShownOne] = React.useState(false);
  const [isShownTwo, setIsShownTwo] = React.useState(false);
  const [isShownThree, setIsShownThree] = React.useState(false);
  const [isShownFour, setIsShownFour] = React.useState(false);
  const [isShownFive, setIsShownFive] = React.useState(false);
  const [isShownSix, setIsShownSix] = React.useState(false);
  return (
    <>
      <div className='work-header'>
          <h1 className='work-header-heading'><span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Excited?<br/>View some of our previous work!</span></h1>
        <div className='work-container'>
          <div className='work' 
          onMouseEnter={() => setIsShownOne(true)}
          onMouseLeave={() => setIsShownOne(false)}>
            <img className='work-img' src={project1} onClick={() => window.open("https://discord.com/invite/qMqqFR4P9J")}></img>
            <div  className={isShownOne ? 'work-text' : 'work-text-hidden'}>
              <p style={{marginBottom: '0'}}>DisMiner</p>
              <p style={{fontFamily: 'satoshiMain', fontSize: '16px', marginTop: '0'}}>DisMiner was an economy<br/> bot written in D.JS.</p>
            </div>
          </div>
          <div className='work' 
          onMouseEnter={() => setIsShownTwo(true)}
          onMouseLeave={() => setIsShownTwo(false)}>
            <img className='work-img' src={project2} onClick={() => window.open("https://discord.gg/hiddenearth")}></img>
            <div  className={isShownTwo ? 'work-text' : 'work-text-hidden'}>
              <p style={{marginBottom: '0'}}>Hidden Earth</p>
              <p style={{fontFamily: 'satoshiMain', fontSize: '16px', marginTop: '0'}}>HE is a Minecraft Server<br/> constructed in Paper.</p>
            </div>
          </div>
          <div className='work' 
          onMouseEnter={() => setIsShownThree(true)}
          onMouseLeave={() => setIsShownThree(false)}>
            <img className='work-img' src={muq1} onClick={() => window.open("https://www.behance.net/muqaddasohail")}></img>
            <div  className={isShownThree ? 'work-text' : 'work-text-hidden'}>
              <p style={{marginBottom: '0'}}>Graphics</p>
              <p style={{fontFamily: 'satoshiMain', fontSize: '16px', marginTop: '0'}}>This is an artwork by<br/> our employee.</p>
            </div>
          </div>
          <div className='work' 
          onMouseEnter={() => setIsShownFour(true)}
          onMouseLeave={() => setIsShownFour(false)}>
            <img className='work-img' src={ze}></img>
            <div  className={isShownFour ? 'work-text' : 'work-text-hidden'}>
              <p style={{marginBottom: '0'}}>Zero Earth</p>
              <p style={{fontFamily: 'satoshiMain', fontSize: '16px', marginTop: '0'}}>ZE was a Minecraft Server<br/> constructed in Paper.</p>
            </div>
          </div>
          <div className='work' 
          onMouseEnter={() => setIsShownFive(true)}
          onMouseLeave={() => setIsShownFive(false)}>
            <img className='work-img' src={muq2} onClick={() => window.open("https://www.behance.net/muqaddasohail")}></img>
            <div  className={isShownFive ? 'work-text' : 'work-text-hidden'}>
              <p style={{marginBottom: '0'}}>Graphics</p>
              <p style={{fontFamily: 'satoshiMain', fontSize: '16px', marginTop: '0'}}>This is an artwork by<br/> our employee.</p>
            </div>
          </div>
          <div className='work' 
          onMouseEnter={() => setIsShownSix(true)}
          onMouseLeave={() => setIsShownSix(false)}>
            <img className='work-img' src={muq3} onClick={() => window.open("https://www.behance.net/muqaddasohail")}></img>
            <div  className={isShownSix ? 'work-text' : 'work-text-hidden'}>
              <p style={{marginBottom: '0'}}>Graphics</p>
              <p style={{fontFamily: 'satoshiMain', fontSize: '16px', marginTop: '0'}}>This is an artwork by<br/> our employee.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkPage