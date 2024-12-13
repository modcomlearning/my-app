
import React from "react";

//Provide props Parameter, This will Receive props message passed from App.js
const MyComponent3 = (props) => {
    return ( 
        <div className="App">
              <h1>My Third Component</h1>
               {/* Bind our Prop Message , Use same key used in App.js*/}
               <h2>{props.passedMessage}</h2>
        </div>
     );
}
 
export default MyComponent3;