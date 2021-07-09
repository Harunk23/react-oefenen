import React from "react";
import Logo from './images/logo.png'
import {Link} from 'react-router-dom';

function Footer(pops) {
  return (
    <div className="foot">
      <div>
        <div className="left">
          <a href="index.js"><img className="f-logo" src={Logo}/></a> 
          <span className="f-tekst">Opmaatvergelijken</span>
        </div>
        <span className="vertical-line"></span>
        <div className="right">
          <p>Contact</p>
          <p>KVK: 12345678910</p>
        </div>
        <hr className="line"/>
        <div className="copy">
          2021 copyright opmaatvergeliken.nl
        </div>
      </div>
    </div>
  );
}

export default Footer;