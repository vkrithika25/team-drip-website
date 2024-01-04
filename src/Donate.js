import { Button } from '@mui/material';
import './App.css';
import React from 'react';

const customStyles = {
    fontFamily: 'Koho',
    backgroundColor: 'black',
    color: 'white',
    '&:hover': {
        backgroundColor: 'red', // Color on hover
    },
};

export default function Donate() {
    return (
      <div className="donateContainer">
        <div id="left">
            <Button className="donateButton" style={customStyles} variant="contained" href="https://www.gofundme.com/f/drip-diabetic-foot-ulcer-prevention?utm_campaign=p_cp_url&utm_medium=os&utm_source=customer" target="_blank">DONATE NOW</Button>
            <img className="donatePic" src="./static/images/donate.png" alt="Donate" />
            <p>We'd love and appreciate any help you could give us! We're currently fundraising for materials to create our prototype with as well as print our informational pamphlets. We are also trying to cover costs for a trip back to Puerto Penasco to present our progress to our community partners and gain their feedback.</p>
        </div>
        <div id="middle">
            <img className='donatePic' src='./static/images/connect.png' alt='Donate' />
            <h3>CONNECT WITH US!</h3>
        </div>
        <div id="right">
        <img className="connectPic" src="./static/images/instagram.png" alt="Donate" />
        <Button className="donateButton" style={customStyles} variant="contained" href="https://www.gofundme.com/f/drip-diabetic-foot-ulcer-prevention?utm_campaign=p_cp_url&utm_medium=os&utm_source=customer" target="_blank">INSTAGRAM</Button>
        <img className="connectPic" src="./static/images/gmail.png" alt="Donate" />
        <Button className="donateButton" style={customStyles} variant="contained" href="https://www.gofundme.com/f/drip-diabetic-foot-ulcer-prevention?utm_campaign=p_cp_url&utm_medium=os&utm_source=customer" target="_blank">EMAIL</Button>
        </div>
      </div>  
    );

}