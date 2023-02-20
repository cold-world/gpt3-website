import React from 'react';
import './brand.css';
import google from '../../assets/google.png';
import slack from '../../assets/slack.png';
import atlassian from '../../assets/atlassian.png';
import dropbox from '../../assets/dropbox.png';
import shopify from '../../assets/shopify.png';

function Brand() {
  return (
    <div className='gpt3__brand section__padding'>
      <div className='gpt3__brand-image'>
        <img src={google} alt='google logo' />
      </div>
      <div className='gpt3__brand-image'>
        <img src={slack} alt='slack logo' />
      </div>
      <div className='gpt3__brand-image'>
        <img src={atlassian} alt='atlassian logo' />
      </div>
      <div className='gpt3__brand-image'>
        <img src={dropbox} alt='dropbox logo' />
      </div>
      <div className='gpt3__brand-image'>
        <img src={shopify} alt='shopify logo' />
      </div>
    </div>
  );
}

export default Brand;
