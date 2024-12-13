import MyComponent2 from "./MyComponent2";

const MyComponent1 = () => {
    //Local variable
    let number = 20
    return ( 
         <div className="App">
       
              <h1>My Second Great Component</h1>
              {/* Bind The number here */}
                <p>{number}</p>
                {/* Tenary Operator */}
                <h1>
                    {
                      number > 15 ? "Number is greater than 15!" :
                      number === 10 ? "Number is exactly 10!" : 
                      "Number is less than 10!"
                    }
                </h1>
         </div>
     );
}


export default MyComponent1;