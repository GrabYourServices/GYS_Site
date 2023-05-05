import React from 'react'
import { Link } from 'react-router-dom'
import './grabpanel.css'
import FadeIn from 'react-fade-in'
function GrabPanelPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <FadeIn>
      <div className='grabpanel-container'>
        <div className='grabpanel-texts'>
          <h1 className='grabpanel-heading'>
            Coming Soon
          </h1>
          <p className='grabpanel-para'>
            Are you Excited? We expect for GrabPanel v1.0.0 to be released soon! Unfortunately right now its in its development stages.
          </p>
          <Link to='/'>
            <button className='grabpanel-button'>
              Take me back
            </button>
          </Link>
        </div>
      </div>
    </FadeIn>
  )
}

export default GrabPanelPage