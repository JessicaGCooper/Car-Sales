import React from 'react';

const Total = props => {
  console.log('additonalPrice', props.additionalPrice)
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

export default Total;
