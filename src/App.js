import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';

import Home from './components/Home';

import Features from './components/Features';

import Cta from './components/Cta';


function App() {

  return (

    <Router>

      <div className="App">

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/features" element={<Features />} />

          <Route path="/cta" element={<Cta />} />

        </Routes>

      </div>

    </Router>

  );

}


export default App;