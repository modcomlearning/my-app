
import './App.css';
import FifthComponent from './components/FifthComponent';
import FirstComponent from './components/FirstComponent';
import FourthComponent from './components/FourthComponent';
import SecondComponent from './components/SecondComponent';
import ThirdComponent from './components/ThirdComponent';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// App Component
function App() {
  return (
   <Router>
      <div className="App">
          <header className="App-header">
            <h1 className='heading'>Welcome to 2025!</h1>
              <p>Very Nice, Great App   </p>
          </header>

           {/* Create a user Naviagtion */}
          <nav>
              <Link to="/first" className='navlinks'>Go to First Component </Link> 
              <Link to="/second" className='navlinks'>Go to SecondComponent </Link> 
              <Link to="/third" className='navlinks'>Go to ThirdComponent </Link> 
              <Link to="/fourth" className='navlinks'>Go to Fourth Component </Link> 
              <Link to="/fifth" className='navlinks'>Go to Fourth Component </Link> 
          </nav>
          {/* Below we create routes that will link to specific Components */}
          <Routes>
            <Route path="/first" element={<FirstComponent />} />
            <Route path="/second" element={<SecondComponent />} />
            <Route path="/third" element={<ThirdComponent />} />
            <Route path="/fourth" element={<FourthComponent/>} />
            <Route path="/fifth" element={<FifthComponent/>} />
          </Routes>
      </div>
    </Router>
  );
}
export default App;
