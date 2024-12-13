import logo from './logo.svg';
import './App.css';
import MyComponent1 from './components/MyComponent1';
import MyComponent2 from './components/MyComponent2';
import MyComponent3 from './components/MyComponent3';
//Router Imports
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// App Component
function App() {
  return (
    <Router>
    <div className="App">
        <header className="App-header">
          <h1>Welcome to React!</h1>
            <p>Very Nice, Great App   </p>
        </header>

        <nav>
          <ul>
            <li><Link to="/component1">Go to MyComponent1</Link></li>
            <li><Link to="/component2">Go to MyComponent2</Link></li>
            <li><Link to="/component3">Go to MyComponent3</Link></li>
          </ul>
        </nav>

          <Routes>
            <Route path="/component1" element={<MyComponent1 />} />
            <Route path="/component2" element={<MyComponent2 />} />
            <Route path="/component3" element={<MyComponent3 passedMessage = {"Hello Props"}/>} />
          </Routes>
        </div>
    </Router>
  );
}
export default App;
