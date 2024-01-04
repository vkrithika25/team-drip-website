import './App.css';
import React from 'react';
import Gallery from './Gallery';
import Header from './Header';
import Info from './Info';
import Collage from './Collage';
import Text from './Text';
import Donate from './Donate';

const homeMission = {
  "img_src": "static/images/logo.png",
  "title": "OUR MISSION",
  "text": "Our mission is to alleviate the effects of high rates of diabetes on the community of Puerto Penasco, Mexico, a tourist town with a population of about 60,000. This mission was born from a needs assessment conducted by our overarching organization, M-HEAL, in early 2020; the assessment found that Puerto Penasco has a higher prevalence of diabetes than the worldwide average, and social stigma and misinformation related to diabetic wound care has led to many diabetic amputations, with amputees finding it difficult to return to work and reintegrate into the community.",
}


const homeApproach = {
  "title": "OUR APPROACH",
  "text": "In collaboration with clinicians in Puerto Penasco, at the University of Michigan, and beyond, we use a two-pronged approach to work towards our mission.<br><br>Our <b>educational subteam</b> aims to design education pamphlets regarding preventative measures against diabetic foot ulcers that could lead to amputation if unchecked. We use the graphic design software, Figma, as a tool to design our pamphlet and have found it very useful in putting the pamphlet together while being aware of cultural norms and perspectives of diabetic treatment. <br><br>On the other hand, our <b>technical subteam</b> aims to prototype a low-cost adaptable prosthetic leg for diabetic amputees in Puerto Penasco. We are currently finishing up our prototype of a prosthetic knee and ideating other bioengineering solutions we can work towards in the future.<br><br>Our <b>business subteam</b> is our newest subteam, and aims to gain financial support for our cause as well as collaborate with organizations and communities striving for similar goals, in Puerto Penasco and beyond.",
}

const homeTeamMembers = [
  {
    "name": "Arman",
    "image": "static/images/cards/arman.jpg",
    "subteam": "Senior Team Lead",
    "major": "BME",
    "year": "2024",
  },
  {
    "name": "Shifa",
    "image": "static/images/cards/shifa.jpg",
    "subteam": "Senior Team Lead",
    "major": "BNS",
    "year": "2025",
  },
  {
    "name": "Alyssa",
    "image": "static/images/cards/alyssa.jpg",
    "subteam": "Junior Team Lead",
    "major": "Chemistry",
    "year": "2026",
  },
  {
    "name": "Krithika",
    "image": "static/images/cards/krithika.jpg",
    "subteam": "Business",
    "major": "Computer Science",
    "year": "2025",
  },
  {
    "name": "Luke",
    "image": "static/images/cards/luke.jpg",
    "subteam": "Educational",
    "major": "BME",
    "year": "2024",
  },
  {
    "name": "Omar",
    "image": "static/images/cards/omar.jpg",
    "subteam": "Business",
    "major": "Public Health",
    "year": "2025",
  },
]

const techMission = {
  "img_src": "static/images/logo.png",
  "title": "OUR MISSION",
  "text": "We are currently working on bioengineering solutions to improve quality of life for Puerto Penasco residents who have already undergone diabetic amputations. We work with our community partners in Puerto Penasco as well as Dr. Deanna Gates, a kinesiology professor at the University of Michigan, and are reaching out to other organizations around the country that have worked on similar bioengineering projects. We aim to engineer solutions that are low-cost, accessible, and possible for the community members of Puerto Penasco to eventually produce independently.",
}

const techApproach = {
  "title": "OUR PROGRESS",
  "text": "Since our inception as a team in September 2021, we have worked on designing a prosthetic leg that is low-cost, adaptable, and compatible with Puerto Penasco's sandy terrain, using computer-aided design (CAD). We entered our initial prosthetic design for the 2023 Johns Hopkins Healthcare Design Competition and were named as one of eight finalists in our category.<br></br>Taking into account feedback from our community partners and prosthetists that we have been in contact with, we narrowed our focus in September 2023 to just designing the knee part of the prosthetic (pictured right). We have finalized the CAD design for this portion and are meeting with prosthetists in Puerto Penasco to discuss integrating our low-cost knee design into already existent prosthetics.<br></br>We are also ideating other bioengineering solutions in tandem with our faculty mentor and community partners.",
}

const techTeamMembers = [
  {
    "name": "Emiko",
    "image": "static/images/cards/emiko.jpg",
    "subteam": "Subteam Co-Lead",
    "major": "BME",
    "year": "2024",
  },
  {
    "name": "Cole",
    "image": "static/images/cards/cole.jpg",
    "subteam": "Subteam Co-Lead",
    "major": "BME",
    "year": "2024",
  },
  {
    "name": "Avina",
    "image": "static/images/cards/avina.jpg",
    "subteam": "",
    "major": "BNS",
    "year": "2025",
  },
  {
    "name": "Alyssa",
    "image": "static/images/cards/alyssa.jpg",
    "subteam": "",
    "major": "Chemistry",
    "year": "2026",
  },
  {
    "name": "Azeem",
    "image": "static/images/cards/azeem.jpg",
    "subteam": "",
    "major": "Computer Science",
    "year": "2025",
  },
  {
    "name": "Joyce",
    "image": "static/images/cards/joyce.jpg",
    "subteam": "",
    "major": "BME",
    "year": "2024",
  },
  {
    "name": "Rebecca",
    "image": "static/images/cards/rebecca.jpg",
    "subteam": "",
    "major": "BME",
    "year": "2024",
  },
  {
    "name": "Sophie",
    "image": "static/images/cards/sophie.jpg",
    "subteam": "",
    "major": "BME",
    "year": "2024",
  },
]

const eduMission = {
  "img_src": "static/images/logo.png",
  "title": "OUR GOAL",
  "text": "Foot care is a crucial part of diabetic amputation prevention. We are working to create Spanish pamphlets targeted at adult populations to inform diabetic patients and their families about ways to care for feet, how to prevent wounds from forming, and how to treat minor wounds that do occur. We are creating one pamphlet that covers foot ulcers, and another one that covers wound prevention and foot care. We hope to make information on foot care readily available to reduce the incidences of amputations to begin with.",
}

const eduApproach = {
  "title": "OUR PROGRESS",
  "text": "Since our inception as a team in September 2021, we have worked on designing a prosthetic leg that is low-cost, adaptable, and compatible with Puerto Penasco's sandy terrain, using computer-aided design (CAD). We entered our initial prosthetic design for the 2023 Johns Hopkins Healthcare Design Competition and were named as one of eight finalists in our category.<br></br>Taking into account feedback from our community partners and prosthetists that we have been in contact with, we narrowed our focus in September 2023 to just designing the knee part of the prosthetic (pictured right). We have finalized the CAD design for this portion and are meeting with prosthetists in Puerto Penasco to discuss integrating our low-cost knee design into already existent prosthetics.<br></br>We are also ideating other bioengineering solutions in tandem with our faculty mentor and community partners.",
}

const eduTeamMembers = [
  {
    "name": "Sadia",
    "image": "static/images/cards/emiko.jpg",
    "subteam": "Subteam Lead",
    "major": "BME",
    "year": "2024",
  },
  {
    "name": "Ava",
    "image": "static/images/cards/ava.jpg",
    "subteam": "",
    "major": "BNS",
    "year": "2025",
  },
  {
    "name": "Cam",
    "image": "static/images/cards/cam.jpg",
    "subteam": "",
    "major": "Chemistry",
    "year": "2026",
  },
  {
    "name": "Isra",
    "image": "static/images/cards/isra.jpg",
    "subteam": "",
    "major": "Computer Science",
    "year": "2025",
  },
  {
    "name": "Kartikeya",
    "image": "static/images/cards/kartikeya.jpg",
    "subteam": "",
    "major": "BME",
    "year": "2024",
  },
  {
    "name": "Luke",
    "image": "static/images/cards/luke.jpg",
    "subteam": "",
    "major": "BME",
    "year": "2024",
  },
  {
    "name": "Mira",
    "image": "static/images/cards/luke.jpg",
    "subteam": "",
    "major": "BME",
    "year": "2024",
  },
  {
    "name": "Raha",
    "image": "static/images/cards/raha.jpg",
    "subteam": "",
    "major": "BME",
    "year": "2024",
  },
  {
    "name": "Shifa",
    "image": "static/images/cards/shifa.jpg",
    "subteam": "",
    "major": "BME",
    "year": "2024",
  },
]

const header_img_prop = {
  "img_src": "static/images/cards/leads.jpg",
}

function App() {
  return (
    <div className="App">
      <Header img_src={header_img_prop.img_src} page={"Home"} />
      <br></br>
      <Info img_src={homeMission.img_src} title={homeMission.title} text={homeMission.text} />
      <div className="approach">
        <Text title={homeApproach.title} text={homeApproach.text} />
        <Collage />
      </div>
      <br></br>
      <div className="team-members">
        <Gallery header={"Leadership Team and Collaborators"} teamMembers={homeTeamMembers} />
      </div>
      <br></br>
      <Donate />

      <Header img_src={header_img_prop.img_src} page="Technical Subteam" />
      <br></br>
      <Info img_src={techMission.img_src} title={techMission.title} text={techMission.text} />
      <div className="approach">
        <Text title={techApproach.title} text={techApproach.text} />
        <img id="knee" src="static/images/knee.png" alt="CAD knee" />
      </div>
      <br></br>
      <div className="team-members">
        <Gallery header={"Technical Subteam Members"} teamMembers={techTeamMembers} />
      </div>
      <br></br>
      <Donate />

      <Header img_src={header_img_prop.img_src} page="Educational Subteam" />
      <br></br>
      <Info img_src={eduMission.img_src} title={eduMission.title} text={eduMission.text} />
      <div className="approach">
        <Text title={techApproach.title} text={techApproach.text} />
        <img id="knee" src="static/images/pamphlets.png" alt="Pamphlets" />
      </div>
      <br></br>
      <div className="team-members">
        <Gallery header={"Educational Subteam Members"} teamMembers={eduTeamMembers} />
      </div>
      <br></br>
      <Donate />
    </div>
  );
}

export default App;
