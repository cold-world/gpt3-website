/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './possibility.css';
import possibility from '../../assets/possibility.png';
import { Heading, Link } from '../../components';

function Possibility() {
  return (
    <section className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibility} alt='VR' />
      </div>
      <div className='gpt3__possibility-container'>
        <Link text='Request Early Access to Get Started' />
        <Heading
          className='gpt3__heading-middle gradient__text'
          tag='h2'
          text='The possibilities are beyond your imagination'
        />
        <p className='gpt3__description-middle'>
          Yet bed any for traveling assistance indulgence unpleasing. Not thoughts all exercise
          blessing. Indulgence way everything joy alteration boisterous the attachment. Party we
          years to order allow asked of.
        </p>
        <Link text='Request Early Access to Get Started' />
      </div>
    </section>
  );
}

export default Possibility;
