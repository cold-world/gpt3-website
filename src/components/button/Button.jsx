import React from 'react';
import './button.css';

function Button({ title, className }) {
  const style = !className ? 'button' : `button ${className}`;
  return (
    <button className={style} type='button'>
      {title}
    </button>
  );
}

export default Button;
