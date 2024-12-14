
import {useState}  from 'react'

const ThirdComponent = () => {

  // Initialize the number state to 10
  const [number, setNumber] = useState(10);

  // // Function to update the number when the button is clicked
  const updateNumber = () => {
    setNumber(number + 1);  // Increase the number by 1
  };

  return (
    <div>
      <h1>Current Number: {number}</h1> {/* Display the current number */}
      <button onClick={updateNumber}>Increase Number</button> 
      {/* Button to increase number */}
    </div>
  );
};

export default ThirdComponent;
