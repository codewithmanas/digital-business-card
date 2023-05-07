// import React from 'react';
import coverLogo from '../assets/cover.png';
import "./Info.css";


function Info() {
  return (
    <>
        <img className="info__img" src={coverLogo} alt="cover logo" />
        <h1 className="info__title">Manas Ranjan Adha</h1>
        <p className="info__role">Front-End Developer</p>
        <p className="info__website">goboolean.in</p>
        <div className='info__btn'>
          <button className="info__email">Email</button>
          <button className="info__linkedin">LinkedIn</button>
        </div>
    </>
  )
}

export default Info;