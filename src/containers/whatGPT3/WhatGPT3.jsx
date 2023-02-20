/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Heading, Link } from '../../components';
import './whatgpt3.css';

function WhatGPT3() {
  return (
    <div className='gpt3__whatgpt3 section__padding' id='wgpt3'>
      <div className='gpt3__whatgpt3-container'>
        <div className='gpt3__whatgpt3-container__what'>
          <Heading className='gpt3__heading-small' tag='h4' text='What is GPT-3' />
          <p className='gpt3__description-middle'>
            We so opinion friends me message as delight. Whole front do of plate heard oh ought. His
            defective nor convinced residence own. Connection has put impossible own apartments
            boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance
            to on by.
          </p>
        </div>
        <div className='gpt3__whatgpt3-container__possibilities'>
          <Heading
            className='gradient__text gpt3__heading-middle'
            tag='h2'
            text='The possibilities are beyond your imagination'
          />
          <Link text='Explore The Library' />
        </div>
        <div className='gpt3__whatgpt3-container__more'>
          <div className='gpt3__whatgpt3-container__more-box'>
            <Heading className='gpt3__heading-small' tag='h4' text='Chatbots' />
            <p className='gpt3__description-middle'>
              We so opinion friends me message as delight. Whole front do of plate heard oh ought.
            </p>
          </div>
          <div className='gpt3__whatgpt3-container__more-box'>
            <Heading className='gpt3__heading-small' tag='h4' text='Knowledgebase' />
            <p className='gpt3__description-middle'>
              At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.
              As put impossible own apartments.
            </p>
          </div>
          <div className='gpt3__whatgpt3-container__more-box'>
            <Heading className='gpt3__heading-small' tag='h4' text='Education' />
            <p className='gpt3__description-middle'>
              At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.
              As put impossible own apartments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatGPT3;
