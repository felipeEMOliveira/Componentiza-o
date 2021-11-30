import React from 'react';

const Buttons = (props) => {
  const { setInc, setDec } = props

  return (
    <div>
        <button onClick={setInc}>+</button>
        <button onClick={setDec}>-</button>
    </div>
  );
}

export default Buttons;