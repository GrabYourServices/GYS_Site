import './team.css'
import { Team } from '../../../data/team'
import React from 'react'

function TeamPage() {
    let skyName = Team.executives.skybird.nickName
    let adiName = Team.executives.adimanav.nickName
    let hanName = Team.executives.hanprogrammer.nickName
    let namanName = Team.employees.naman.nickName
    if(Team.executives.skybird.irlName != '') {
        let skyName = Team.executives.skybird.irlName
    }
    if(Team.executives.adimanav.irlName != '') {
        let adiName = Team.executives.adimanav.irlName
    }
    if(Team.executives.hanprogrammer.irlName != '') {
        let hanName = Team.executives.hanprogrammer.irlName
    }
    if(Team.employees.naman.irlName != '') {
        let namanName = Team.employees.naman.irlName
    }
    const windowOpen = () => {
        window.open("https://github.com/ateebplayz")
    }
  return (
    <div className='team-header'>
        <div className='team-container'>
            <h1 className='work-header-heading'><span style={{backgroundImage: 'linear-gradient(to right, #7251ff, #c6bcf1)',color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Untrusted?<br/><span className='pricing-margin'>Meet the Team</span></span></h1>
            <div className='team-ceo'>
                <img src={Team.executives.sunny.avatar} className='team-ceo-img'></img>
                <div className='team-ceo-texts'>
                    <h1 className='team-name' onClick={windowOpen}>{Team.executives.sunny.irlName}</h1>
                    <p className='team-role'>{Team.executives.sunny.roleFull}</p>
                    <p className='team-country'>{Team.executives.sunny.country}</p>
                    <p className='team-description'>{Team.executives.sunny.description}</p>
                </div>
            </div>
            <div className='team-people'>
                <div className='team-person'>
                    <img src={Team.executives.cloudy.avatar} className='team-person-img'></img>
                    <div className='team-ceo-texts'>
                        <h1 className='team-name'>{Team.executives.cloudy.irlName}</h1>
                        <p className='team-role'>{Team.executives.cloudy.roleFull}</p>
                        <p className='team-country'>{Team.executives.cloudy.country}</p>
                        <p className='team-description'>{Team.executives.cloudy.description}</p>
                    </div>
                </div>
                <div className='team-person'>
                    <img src={Team.executives.skybird.avatar} className='team-person-img'></img>
                    <div className='team-ceo-texts'>
                        <h1 className='team-name'>{skyName}</h1>
                        <p className='team-role'>{Team.executives.skybird.roleFull}</p>
                        <p className='team-country'>{Team.executives.skybird.country}</p>
                        <p className='team-description'>{Team.executives.skybird.description}</p>
                    </div>
                </div>
                <div className='team-person'>
                    <img src={Team.executives.hanprogrammer.avatar} className='team-person-img'></img>
                    <div className='team-ceo-texts'>
                        <h1 className='team-name'>{hanName}</h1>
                        <p className='team-role'>{Team.executives.hanprogrammer.roleFull}</p>
                        <p className='team-country'>{Team.executives.hanprogrammer.country}</p>
                        <p className='team-description'>{Team.executives.hanprogrammer.description}</p>
                    </div>
                </div>
                <div className='team-person'>
                    <img src={Team.executives.adimanav.avatar} className='team-person-img'></img>
                    <div className='team-ceo-texts'>
                        <h1 className='team-name'>{adiName}</h1>
                        <p className='team-role'>{Team.executives.adimanav.roleFull}</p>
                        <p className='team-country'>{Team.executives.adimanav.country}</p>
                        <p className='team-description'>{Team.executives.adimanav.description}</p>
                    </div>
                </div>
                <div className='team-person'>
                    <img src={Team.employees.naman.avatar} className='team-person-img'></img>
                    <div className='team-ceo-texts'>
                        <h1 className='team-name'>{namanName}</h1>
                        <p className='team-role'>{Team.employees.naman.roleFull}</p>
                        <p className='team-country'>{Team.employees.naman.country}</p>
                        <p className='team-description'>{Team.employees.naman.description}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TeamPage