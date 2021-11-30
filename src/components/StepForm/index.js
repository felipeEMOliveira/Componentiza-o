import React from 'react';

const StepForm = (props) => {
  const { step, setStep } = props

  return (
    <div>
      <label htmlFor="stepInput">Passo: </label>
      <input
        id="stepInput"
        type="number"
        value={step}
        onChange={(event) => setStep(Number(event.target.value))}
      />
    </div>
  );
}

export default StepForm;