import React from 'react';
import './cta.css';

function Cta() {
  return (
    <div className='gpt3__cta section__padding' id='cta'>
      <div className='gpt3__cta-container'>
        <div className='gpt3__cta-container__info'>
          <span>Request Early Access to Get Started</span>
          <p>Register today & start exploring the endless possibilities.</p>
        </div>
        <button type='button'>Get Started</button>
      </div>
    </div>
  );
}

export default Cta;
