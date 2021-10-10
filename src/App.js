import React from 'react';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Technologies from './components/Technologies/Technologies';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import ContactForm from './components/Contact/Contact';
import { Link as LinkS } from 'react-scroll';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <Technologies />
        <Projects />
        <Footer />
        {/* <Switch>
          <Route path='/' exact />
        </Switch> */}
      </Router>
    </>
  );
}

export default App;
