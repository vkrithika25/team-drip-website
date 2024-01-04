import './App.css'; 
import * as React from 'react';

export default function Text(props) {
  return (
    <div className='text'>
        <h2>{props.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: props.text }}></p>
    </div>
  );
}