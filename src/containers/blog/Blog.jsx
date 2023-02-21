import React from 'react';
import { Heading, Article } from '../../components';
import './blog.css';
import blog1 from '../../assets/blog01.png';
import blog2 from '../../assets/blog02.png';
import blog3 from '../../assets/blog03.png';
import blog4 from '../../assets/blog04.png';
import blog5 from '../../assets/blog05.png';

function Blog() {
  return (
    <section className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <Heading
          className='gradient__text gpt3__heading-big'
          tag='h2'
          text='A lot is happening, 
        We are blogging about it.'
        />
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article
            imgUrl={blog1}
            date='Jan 26, 2023'
            title='GPT-3 and Open AI is the future. Let us explore how it is?'
          />
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article
            imgUrl={blog2}
            date='Jan 27, 2023'
            title='GPT-3 and Open AI is the future. Let us explore how it is?'
          />
          <Article
            imgUrl={blog3}
            date='Jan 29, 2023'
            title='GPT-3 and Open AI is the future. Let us explore how it is?'
          />
          <Article
            imgUrl={blog4}
            date='Jan 30, 2023'
            title='GPT-3 and Open AI is the future. Let us explore how it is?'
          />
          <Article
            imgUrl={blog5}
            date='Jan 30, 2023'
            title='GPT-3 and Open AI is the future. Let us explore how it is?'
          />
        </div>
      </div>
    </section>
  );
}

export default Blog;
