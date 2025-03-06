const SecondComponent = () => {

    //Lets Create some Variable here
    let message = "I Love Programming"
    let age = 20

    return ( 
        <div className = "App">
             <h1>Welcome to My Second Component</h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quis! Optio praesentium sequi nulla accusantium. Nemo culpa voluptatum dicta minima perferendis laboriosam, deserunt optio ratione, fugit nostrum at asperiores odio?</p>
 
             {/* Lets Bind Variables Below in JSX */}
             <h3>{message}  and I am {age} years</h3>

        </div>
     );
}
 
export default SecondComponent;