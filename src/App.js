import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navabar from './Layouts/Navbar'
import Dashboard from './Pages/Dashboard'
import Leave from './Pages/Leave'
import Department from './Pages/Department'
import Calendar from './Pages/Calender'
import Leave_Actoin from './Pages/Leave_Action'


class App extends Component{
  render(){
  return (
    <Router>
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
      <Route exact path= "/department" component={Department}/>  
      <Route exact path = "/calendar" component = {Calendar}/>
      <Route exact path = "/leave_action" component = {Leave_Actoin}/>
{/* <Dashboard/>
<Leave/> */}
    </Switch>
    </div>
    <div class="sidebar-overlay" id="sidebar_overlay"></div>
    </Router>
    
  );
}
}

export default App;
