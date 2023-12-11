import React from 'react'
import './MainAdmin.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import MusicPlayerSlider from '../MusicPlayer/music'


function MainAdmin() {
  return (
    <div className='main-admin'>
      <div className="features">
      <Calendar />
      <MusicPlayerSlider />
      </div>
      <div className='sns'>
        <div className='kopanidja'>kopanidja</div>
        <div className='mareza'>mareza</div>
      </div>
      <div className='sps'>
        <div className='paja'>paja</div>
        <div className='vedram'>vedran</div>
      </div>
    </div>

  )
}

export default MainAdmin