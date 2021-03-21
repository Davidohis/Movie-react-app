import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavbarComponent from './components/navbar';
import HomePage from './pages/HomePage';
import MovieApp from './pages/movies';


export default function App() {
  return (
    <div className="App">
      <NavbarComponent />
    <Router>
  
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route e path='/movies' component={MovieApp} />
        </Switch>
    </Router>
</div>
      
    
  )
}
