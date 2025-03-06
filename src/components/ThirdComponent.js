import { useState } from 'react';

const ThirdComponent = () => {
  // Initialize the number state to 10
  const [number, setNumber] = useState(10);

  return (
    <div>
      {/* Bind initial Number */}
      <h1>Current Number: {number}</h1>   
      {/* Call updater function to update the number on click */}
      <button onClick={() => setNumber(20)}>Update Number</button>
    </div>
  );
};

export default ThirdComponent;
