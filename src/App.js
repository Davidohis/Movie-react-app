import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import FooterComponent from './components/footer/footer';
import NavbarComponent from './components/navbar';
import HomePage from './pages/home/HomePage';
import MovieApp from './pages/movies';


export default function App() {
  return (
    <div className="App">
    <Router>
    <NavbarComponent />
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route e path='/movies' component={MovieApp} />
        </Switch>
    </Router>
    <FooterComponent />
</div>
      
    
  )
}
