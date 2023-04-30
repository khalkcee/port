import React from 'react';
import possibilityImage from '/img/possibility.png';
import './possibility.css';
import Brand from '../brand/Brand';



const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>


    
    <div className="gpt3__possibility-content">
      <Brand />
      <h4>Past Clients: </h4>
      <p>More profile text, qualifications and blah blah blah</p>
      
      <h4>Qualifications and Experience</h4>
      <h1 className="">This part is still <br />Under construction</h1>
     
    </div>
  </div>
);

export default Possibility;
