import './App.css';
import React from 'react';
import PersonCard from './components/Card';


function Gallery(props) {
  return (
    <div className="gallery">
      <h1 className="gallery-header">{props.header}</h1>
      <div className="team-members">
          {props.teamMembers && props.teamMembers.map((member, index) => (
          <PersonCard 
              key={index} 
              name={member.name} 
              image={member.image} 
              subteam={member.subteam} 
              major={member.major} 
              year={member.year} 
          />
          ))}
      </div>
    </div>
  );
}

export default Gallery;
