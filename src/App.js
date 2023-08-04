import './App.css';
import Home from './pages/Home';
import { Link } from 'react-router-dom'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h2>Weather App - Search Weather by city</h2>
     <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>  
    </Router>
    </div>
  );
}

export default App;
