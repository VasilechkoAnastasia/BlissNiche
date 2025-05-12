import React from 'react';
import './LineMain.css'; 

const LineMain = ({ items }) => {
  return (
    <div className="title-strip">
      {items.map((item, index) => (
        <span key={index} className="title-strip-item">
          {item}
        </span>
      ))}
    </div>
  );
};

export default LineMain;