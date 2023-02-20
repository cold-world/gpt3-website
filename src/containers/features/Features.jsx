/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Heading, Link } from '../../components';
import './features.css';

function Features() {
  return (
    <section className='gpt3__features section__padding'>
      <div className='gpt3__features-container'>
        <Heading
          className='gradient__text gpt3__heading-middle'
          tag='h2'
          text='The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.'
        />
        <Link text='Request Early Access to Get Started' />
      </div>
      <div className='gpt3__features-container'>
        <div className='gpt3__features-container__box'>
          <Heading
            className='gpt3__heading-smallest'
            tag='h3'
            text='Improving end distrusts instantly'
          />
          <p className='gpt3__description-small'>
            From they fine john he give of rich he. They age and draw mrs like. Improving end
            distrusts may instantly was household applauded.
          </p>
        </div>
        <div className='gpt3__features-container__box'>
          <Heading className='gpt3__heading-smallest' tag='h3' text='Become the tended active' />
          <p className='gpt3__description-small'>
            Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on
            become he tended active enable to.
          </p>
        </div>
        <div className='gpt3__features-container__box'>
          <Heading className='gpt3__heading-smallest' tag='h3' text='Message or am nothing' />
          <p className='gpt3__description-small'>
            Led ask possible mistress relation elegance eat likewise debating. By message or am
            nothing amongst chiefly address.
          </p>
        </div>
        <div className='gpt3__features-container__box'>
          <Heading className='gpt3__heading-smallest' tag='h3' text='Really boy law county' />
          <p className='gpt3__description-small'>
            Really boy law county she unable her sister. Feet you off its like like six. Among sex
            are leave law built now. In built table in an rapid blush.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
