import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


// Pages
import HomePage from "./pages/HomePage"
import BadUrl from './pages/BadUrl';
import ContactPage from './pages/ContactPage';
import News from './pages/News';
import About from './pages/About';
import Join from './pages/Join';
import Tasks from './pages/Tasks';


// Components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

//styles
import "./styles/pages.css"

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contact-us" component={ContactPage} />
          <Route exact path="/news" component={News} />
          <Route exact path="/about" component={About} />
          <Route exact path="/join" component={Join} />
          <Route exact path="/tasks" component={Tasks} />
          <Route component={BadUrl} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
