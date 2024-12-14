const SecondComponent = () => {

    //Lets Create some Variable here
    let message = "I Love Programming"
    let age = 20

    return ( 
        <div className = "App">
             <h1>Welcome to My Second Component</h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quis! Optio praesentium sequi nulla accusantium. Nemo culpa voluptatum dicta minima perferendis laboriosam, deserunt optio ratione, fugit nostrum at asperiores odio?</p>
 
             {/* Lets Bind Variables Below */}
             <h3>{message}  and I am {age} years</h3>

             {/* Tenary Operators, Conditions is JSX */}
             <h1>
                    {
                      age < 10 ? "You should be in Lower School" :
                      age > 10 && age <= 14 ? "You should be in Lower School" :
                      age > 14 && age <= 19  ? "High School!" : 
                      "You are in College!"
                    }
            </h1>



        </div>
     );
}
 
export default SecondComponent;