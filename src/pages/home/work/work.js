import React from 'react'
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
  return (
    <>
      <div className='work-header'>
          <h1 className='work-header-heading'><span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Excited?<br/>View some of our previous work!</span></h1>
        <div className='work-container'>
        <div className='work'>
            <img className='work-img' src={project1} onClick={() => window.open("https://discord.com/invite/qMqqFR4P9J")}></img>
          </div>
          <div className='work'>
            <img className='work-img' src={project2} onClick={() => window.open("https://discord.gg/hiddenearth")}></img>
          </div>
          <div className='work'>
            <img className='work-img' src={muq1} onClick={() => window.open("https://www.behance.net/muqaddasohail")}></img>
          </div>
          <div className='work'>
            <img className='work-img' src={ze}></img>
          </div>
          <div className='work'>
            <img className='work-img' src={muq2} onClick={() => window.open("https://www.behance.net/muqaddasohail")}></img>
          </div>
          <div className='work'>
            <img className='work-img' src={muq3} onClick={() => window.open("https://www.behance.net/muqaddasohail")}></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkPage