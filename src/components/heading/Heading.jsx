import React from 'react';

function Heading({ tag, text, className }) {
  const HeadingTag = tag;
  return <HeadingTag className={className}>{text}</HeadingTag>;
}

export default Heading;
