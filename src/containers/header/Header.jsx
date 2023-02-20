import React from 'react';
import { Heading, Button } from '../../components';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

function Header() {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <Heading
          tag='h1'
          text='Let’s Build Something amazing with GPT-3 OpenAI'
          className='gradient__text gpt3__header-heading'
        />
        <p className='gpt3__header-description'>
          Yet bed any for traveling assistance indulgence unpleasing. Not thoughts all exercise
          blessing. Indulgence way everything joy alteration boisterous the attachment. Party we
          years to order allow asked of.
        </p>
        <form className='gpt3__header-content__form'>
          <input
            className='gpt3__header-content__form-input'
            type='email'
            placeholder='input your email'
          />
          <Button title='Get Started' className='gpt3__header-content__form-button' />
        </form>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='avatar' />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt='assistance' />
      </div>
    </div>
  );
}

export default Header;
