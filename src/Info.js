import './App.css';
import React from 'react';
import Text from './Text';

function Info(props) {
  return (
    <div className="info">
        <Text title={props.title} text={props.text} />
        <img className="infopic" src={props.img_src} alt="" />
    </div>
  );
}

export default Info;
