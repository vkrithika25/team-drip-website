import './App.css'; 
import * as React from 'react';
import { Button } from '@mui/material';

const customStyles = {
  fontFamily: 'Koho',
  backgroundColor: 'white',
  color: 'black',
  margin: '10px',
  '&:hover': {
      backgroundColor: 'red', // Color on hover
  },
};

export default function Intro(props) {
  console.log(props.header)
  return (
    <div className='intro'>
        <h1>{props.lines.line1}</h1>
        <h1>{props.lines.line2}</h1>
        <h2 dangerouslySetInnerHTML={{ __html: props.lines.line3 }}></h2>
        {props.buttons.map((page, i) => (
          <Button className="introButton" style={customStyles} variant="contained" color="primary" key={i} >{page}</Button>
        ))}
    </div>
  );
}