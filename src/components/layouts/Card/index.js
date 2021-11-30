import React from 'react';

import './styles.css';

const Card = (props) => {
  const { children, color, title } = props;

  const styles = {
    backgroundColor: color,
    borderColor: color,
  };

  return (
    <div className="card" style={styles}>
      <h1 className="title" style={styles}>{title}</h1>
      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default Card;