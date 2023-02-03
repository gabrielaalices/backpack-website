import React, { useState, useEffect } from 'react'
import { withRouter } from '../common/with-router';
import imageBackground from "../images/backpack_background2.jpg";
import imageBackpack1 from "../images/image-backpack1.png";
import imageBackpack2 from "../images/image-backpack2.png";
import "./main.component.css";


const MainPage = () => {

  return (
    <div>
    <img className="img-background" src={imageBackground} alt="background-image"/>
    <div className="row"> 
      <div className="column">
      <img src={imageBackpack2} onMouseEnter={e => e.currentTarget.src = imageBackpack1} onMouseLeave={e => e.currentTarget.src = imageBackpack2}></img>
      </div>
      <div className="column">
      <img src={imageBackpack2} onMouseEnter={e => e.currentTarget.src = imageBackpack1} onMouseLeave={e => e.currentTarget.src = imageBackpack2}></img>
      </div>  
      <div className="column">
        <img src={imageBackpack2} onMouseEnter={e => e.currentTarget.src = imageBackpack1} onMouseLeave={e => e.currentTarget.src = imageBackpack2}></img>
      </div>
    </div>
  </div>
  )
}

export default MainPage