import React from 'react'
import { Link } from 'react-router-dom'
import './404.css'
function FourOFourPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='fourofour-container'>
      <div className='fourofour-texts'>
        <h1 className='fourofour-heading'>
          Page Not Found
        </h1>
        <p className='fourofour-para'>
          Are you on the right page? Seems not. Click the button below to go back to the main page.
        </p>
        <Link to='/'>
          <button className='fourofour-button'>
            Take me back
          </button>
        </Link>
      </div>
    </div>
  )
}

export default FourOFourPage