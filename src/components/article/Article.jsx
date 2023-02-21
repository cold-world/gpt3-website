import React from 'react';
import './article.css';

function Article({ imgUrl, date, title }) {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-image'>
        <img src={imgUrl} alt='blog' />
      </div>
      <div className='gpt3__blog-container_article-content'>
        <div>
        <span>{date}</span>
        <h4>{title}</h4>
        </div>
      <span>Read Full Article</span>
      </div>
    </div>
  );
}

export default Article;
