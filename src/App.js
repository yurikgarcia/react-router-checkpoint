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
import R5D4 from './R5D4';
import Owen from './Owen';
import Beru from './Beru';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './Footer';


function App() {

  return (

    <Router>
        <div className="App">

          <Nav/>
          <Footer/>



        
          <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/friends" exact component={Friends}/>  
          <Route path="/friends/leia"  component={Leia}/>
          <Route path="/friends/c3po"  component={C3PO}/>
          <Route path="/friends/r2d2" exact component={R2D2}/>
          <Route path="/friends/r5d4"  component={R5D4}/>
          <Route path="/friends/owenlars"  component={Owen}/>
          <Route path="/friends/darthvader"  component={Vader}/>
          <Route path="/friends/beruwhitesun"  component={Beru}/>
          <Route path="/aboutus" exact component={AboutUs}/>  


          
          </Switch>      
        </div>
    </Router>




  );
}


export default App;
