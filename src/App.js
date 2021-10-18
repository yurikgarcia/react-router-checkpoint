import React from 'react';
import './App.css';
import Nav from './Nav.js';
import Home from './Home';
import Friends from './Friends.js';
import AboutUs from './AboutUs';
import C3PO from './C3PO';
import R2D2 from './R2D2';
import Leia from './Leia';
import Vader from './Vader';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {

  return (

    <Router>
        <div className="App">

          <Nav/>

         <div style={{ 
      backgroundImage: `url("https://via.placeholder.com/500")` 
    }}>
      Welcome Back Luke SkyWalker - Here's the latest in the Galaxy
    </div>

        
          <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/friends" exact component={Friends}/>  
          <Route path="/friends/leia"  component={Leia}/>
          <Route path="/friends/c3po"  component={C3PO}/>
          <Route path="/friends/r2d2"  component={R2D2}/>
          <Route path="/friends/darthvader"  component={Vader}/>
          <Route path="/aboutus" exact component={AboutUs}/>  


   
          </Switch>      
        </div>
    </Router>


  );
}


export default App;
