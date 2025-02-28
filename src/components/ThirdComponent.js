
import {useState}  from 'react'

const ThirdComponent = () => {

  // Initialize the number state to 10
  const [number, setNumber] = useState(10);

  // // Function to update the number when the button is clicked
  const updateNumber = () => {
    setNumber(20);  // Set A new Number
  };

  return (
    <div>
      {/* Display the current number */}
      <h1>Current Number: {number}</h1> 

       {/* Button to update number */}
      <button onClick={updateNumber}>Update Number</button> 
     
    </div>
  );
};

export default ThirdComponent;
