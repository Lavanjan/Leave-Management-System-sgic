import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'


import Navabar from './Layouts/Navbar'
import Dashboard from './Pages/Dashboard'
import Leave from './Pages/Leave'
import Department from './Pages/Department'
import Calendar from './Pages/Calender'
import Leave_Actoin from './Pages/Leave_Action'
import Leave_ViewAll from './Pages/Leave_ViewAll'
import Settings from './Pages/Settings'
import Employees_Profile from './Pages/Employees_Profile'

import Emp_Profile from './EmpPages/Emp_Profile'
import Emp_Details from './EmpPages/Emp_Details'
import Emp_Holidays from './EmpPages/Emp_Holidays'
import Emp_Calendar from './EmpPages/Emp_Calendar'
import Emp_LeaveHistory from './EmpPages/Emp_LeaveHistory'
import Emp_Setting from './EmpPages/Emp_Setting'
import View_LeaveDetails from './EmpPages/View_LeaveDetails'
import Emp_Dashboard from './EmpPages/Emp_Dashboard'

import HR_Dashboard from './HR_Pages/HR_Dashboard'
import HR_LeaveAction from './HR_Pages/HR_Leave_Action'
import HR_LeaveProcess from './HR_Pages/HR_LeaveProcess'
import HR_LeaveHistory from './HR_Pages/HR_LeaveHistory'
import HR_Settings from './HR_Pages/HR_Settings'
import HR_ManageEmp from './HR_Pages/HR_ManageEmp'

import Leave_Setting from './Admin_Pages/Leave_Settings'


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
    <Route exact path ="/" component = {HR_Dashboard}/>
    <Route exact path = "/leave_action" component = { HR_LeaveAction }/>
    <Route exact path = "/leave_process" component = { HR_LeaveProcess }/>
    <Route exact path = "/HR_leave-history" component = { HR_LeaveHistory }/>
    <Route exact path = "/HR_settings" component = { HR_Settings }/>
    <Route exact path = "/manage_employee" component = { HR_ManageEmp }/>

    <Route exact path = "/leave_setting" component = { Leave_Setting }/>


      {/* <Route exact path ="/" component = {Dashboard}/> */}
      <Route exact path = "/leave" component = {Leave}/>
      <Route exact path= "/department" component={Department}/>  
      <Route exact path = "/calendar" component = {Calendar}/>
      {/* <Route exact path = "/leave_action" component = {Leave_Actoin}/> */}
      <Route exact path = "/leave_viewall" component = {Leave_ViewAll}/>
      <Route exact path = "/settings" component = {Settings}/>
      <Route exact path = "/employee_profile" component = { Employees_Profile }/>

      <Route exact path = "/Emp_profile" component = { Emp_Profile }/>
      <Route exact path = "/Emp_Details" component = { Emp_Details }/>
      <Route exact path = "/Emp_Holiday" component = { Emp_Holidays }/>
      <Route exact path = "/Emp_Calendar" component = { Emp_Calendar }/>
      <Route exact path = "/Emp_LeaveHistory" component = { Emp_LeaveHistory }/>
      <Route exact path = "/Emp_Setting" component = { Emp_Setting }/>
      <Route exact path = "/View_LeaveDetails" component = { View_LeaveDetails }/>
      <Route exact path = "/Emp_Dashboard" component = { Emp_Dashboard }/>

 
      
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
