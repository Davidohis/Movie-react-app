import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import HomePage from './pages/HomePage';
import MovieApp from './pages/movies';


export default function App() {
  return (
    <div className="App">
    <Router>
  
    
        <Switch>
            {/* <Route exact path='/' component={HomePage} /> */}
            <Route e path='/' component={MovieApp} />
        </Switch>
    </Router>
</div>
      
    
  )
}
