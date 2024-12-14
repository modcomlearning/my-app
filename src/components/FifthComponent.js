
//Receive passedMessaged, passed from App.js
//Provide a props parameter in below arrow function
const FifthComponent = (props) => {
    return ( 
        <div className="App">
            <h1>Welcome to the Fifth component</h1>

            {/* Bind The passedMessage using the props variable */}
            {props.passedMessage}
        </div>
     );
}
 
export default FifthComponent;