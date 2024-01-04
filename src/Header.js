import './App.css';
import React from 'react';
import Intro from './Intro';

const homeHeader = {
  "line1": "WE ARE",
  "line2": "TEAM DRIP",
  "line3": "Diabetes Reduction Initiative in Puerto Penasco",
}

const techHeader = {
  "line1": "TECHNICAL",
  "line2": "SUBTEAM",
  "line3": 'Providing post-amputative care<span class="inline-block">through a low-cost, adaptable</span>prosthetic prototype.',
}

const eduHeader = {
  "line1": "EDUCATIONAL",
  "line2": "SUBTEAM",
  "line3": 'Stopping amputation before it is<span class="inline-block">necessary by creating educational</span>pamphlets.',
}


function Header(props) {
  const options= ["Home", "Technical Subteam", "Educational Subteam", "Business Subteam"]
  const buttonNames = options.filter((buttonName) => (buttonName !== props.page))
  var header = {}
  if (props.page === "Home") {
    header = homeHeader
  } else if (props.page === "Technical Subteam") {
    header = techHeader
  } else if (props.page === "Educational Subteam") {
    header = eduHeader
  }
  
  return (
    <div className="header">
      <img id="leads" src={props.img_src} alt="leads" />
      <Intro lines={header} buttons={buttonNames}/>
    </div>
  );
}

export default Header;
