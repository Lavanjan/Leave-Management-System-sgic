import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navabar from './Layouts/Navbar'
import Dashboard from './Pages/Dashboard'
import Leave from './Pages/Leave'


class App extends Component{
  render(){
  return (
    <BrowserRouter>
    <div class="inner-wrapper">
		<div id="loader-wrapper">
			
			<div class="loader">
			  <div class="dot"></div>
			  <div class="dot"></div>
			  <div class="dot"></div>
			  <div class="dot"></div>
			  <div class="dot"></div>
			</div>
		</div>
    <Navabar/>
    <Switch>
      <Route exact path ="/" component = {Dashboard}/>
      <Route exact path = "/leave" component = {Leave}/>
{/* <Dashboard/>
<Leave/> */}
    </Switch>
    </div>
    <div class="sidebar-overlay" id="sidebar_overlay"></div>
    </BrowserRouter>
    
  );
}
}

export default App;
