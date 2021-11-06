import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages';
import { Switch } from 'react-router';
import { Route } from 'react-router';
import About from './pages/about';
import Menu from './pages/menu';
import Dropdown from './components/Dropdown';
import descriptions from './pages/descriptions';

if (module.hot) {
  module.hot.accept();
}


function Trial() {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });
  
  
  
  
  return (
    <BrowserRouter>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/menu' exact component={Menu}></Route>
        <Route path='/about' exact component={About}></Route>
        <Route path='/details/:id' exact component={descriptions}/>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

ReactDOM.render(
  <Trial />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
