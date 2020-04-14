import React, { Fragment, Component } from 'react'
import Calendar from 'react-calendar'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import { NotificationContainer, NotificaionManager } from 'react-notifications'
import Toggle from 'react-toggle'
import "react-toggle/style.css"


import './../assets/css/style.css'
import tiger from './../assets/images/Employees/Leave_Employees/tiger.png'
import hritik from './../assets/images/Employees/Leave_Employees/hritik.png'
// import 'react-notifications/lib/Notification.css'


class Leave_Settings extends Component {

    state = {
        date: new Date(),
    }
    onChange = date => this.setState({ date });

    createNotification = (type) => {
        return () => {
            switch (type) {
                case 'success':
                    NotificaionManager.success('Success Message', 'Title Here');
                    break;
                case 'info':
                    NotificaionManager.info('Info Message');
                    break;
            }
        };
    };


    render() {
        return (
            <Fragment>
                <div class="page-wrapper">
                    <div class="container-fluid">
                        <div class="row">
                            <div class=" col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
                                <aside class="sidebar sidebar-user">
                                    <div class="card ctm-border-radius shadow-sm">
                                        <div class="card-body py-4">
                                            <div class="row">
                                                <div class="col-md-12 mr-auto text-left">
                                                    <div class="custom-search input-group">
                                                        <div class="custom-breadcrumb">
                                                            <ol class="breadcrumb no-bg-color d-inline-block p-0 m-0 mb-2">
                                                                <li class="breadcrumb-item d-inline-block"><a href="/" class="text-dark">Home</a></li>
                                                                <li class="breadcrumb-item d-inline-block active">Employee</li>
                                                            </ol>
                                                            <h4 class="text-dark">Profile</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                    <div class="quicklink-sidebar-menu ctm-border-radius shadow-sm bg-white card">
                                        <div class="card-body">
                                            <ul class="list-group">
                                                <li class="mr-1 "><a class="btn-ctm-space btn-dec" href="/settings"><span class="lnr lnr-home pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">System</span></a></li>
                                                <li class="mr-1 active"><a class="btn-ctm-space text-white calen-btn" href="/leave_setting"><span class="lnr lnr-unlink pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Leave Setting</span></a></li>
                                                <li class="mr-1"><a class="btn-ctm-space btn-dec " href="/Emp_Holiday"><span class="lnr lnr-apartment pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Calendar</span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>

                            <div class="col-xl-9 col-lg-8  col-md-12">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="card ctm-border-radius shadow-sm">
                                                    <div class="card-header">
                                                        <h5 class="card-title mb-0">Leave Types</h5>
                                                    </div>
                                                    <div class="card-body">
                                                        <table class="table table-borderless table-sm table-hover">
                                                            <thead>
                                                                <tr>
                                                                    <th width="25%" className=" th-bold" scope="col">Leave Types</th>
                                                                    <th width="15%" className=" th-bold" scope="col">Colour</th>
                                                                    <th width="15%" className=" th-bold" scope="col">Description</th>
                                                                    <th colSpan="3" width="6%" className=" th-bold" scope="col"></th>

                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Casual Leave</td>
                                                                    <td ><i class="fa fa-bolt fa-lg text-primary" aria-hidden="true"></i></td>
                                                                    <td></td>
                                                                    <td width = "7%">
                                                                      
                                                                    </td>
                                                                    <td width = "1%">
                                                                        <a className="edit-btn" href="#"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                                                    </td>
                                                                    <td width = "1%">
                                                                        <a className="dele-btn" href="#"><i class="fa fa-trash" aria-hidden="true"></i></a>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>Sick Leave</td>
                                                                    <td ><i class="fa fa-bolt fa-lg text-success" aria-hidden="true"></i></td>
                                                                    <td></td>
                                                                    <td >
                                                                     
                                                                    </td>
                                                                    <td>
                                                                        <a className="edit-btn" href="#"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                                                    </td>
                                                                    <td>
                                                                        <a className="dele-btn" href="#"><i class="fa fa-trash" aria-hidden="true"></i></a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Half Day</td>
                                                                    <td ><i class="fa fa-bolt fa-lg text-danger" aria-hidden="true"></i></td>
                                                                    <td></td>
                                                                    <td >
                                                                      
                                                                    </td>
                                                                    <td>
                                                                        <a className="edit-btn" href="#"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                                                    </td>
                                                                    <td>
                                                                        <a className="dele-btn" href="#"><i class="fa fa-trash" aria-hidden="true"></i></a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Annual Leave</td>
                                                                    <td ><i class="fa fa-bolt fa-lg text-warning" aria-hidden="true"></i></td>
                                                                    <td></td>
                                                                    <td >
                                                                     
                                                                    </td>
                                                                    <td>
                                                                        <a className="edit-btn" href="#"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                                                    </td>
                                                                    <td>
                                                                        <a className="dele-btn" href="#"><i class="fa fa-trash" aria-hidden="true"></i></a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Study Leave</td>
                                                                    <td ><i class="fa fa-bolt fa-lg text-info" aria-hidden="true"></i></td>
                                                                    <td></td>
                                                                    <td >
                                                                      
                                                                    </td>
                                                                    <td>
                                                                        <a className="edit-btn" href="#"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                                                    </td>
                                                                    <td>
                                                                        <a className="dele-btn" href="#"><i class="fa fa-trash" aria-hidden="true"></i></a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Other Leave</td>
                                                                    <td ><i class="fa fa-bolt fa-lg text-dark" aria-hidden="true"></i></td>
                                                                    <td></td>
                                                                    <td >
                                                                      
                                                                    </td>
                                                                    <td>
                                                                        <a className="edit-btn" href="#"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                                                    </td>
                                                                    <td>
                                                                        <a className="dele-btn" href="#"><i class="fa fa-trash" aria-hidden="true"></i></a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Unpaid Leave</td>
                                                                    <td ><i class="fa fa-bolt fa-lg text-secondary" aria-hidden="true"></i></td>
                                                                    <td></td>
                                                                    <td >
                                                                        
                                                                    </td>
                                                                    <td>
                                                                        <a className="edit-btn" href="#"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                                                    </td>
                                                                    <td>
                                                                        <a className="dele-btn" href="#"><i class="fa fa-trash" aria-hidden="true"></i></a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="row">
                                                        <div className = "col-4">
                                                            <span className = "ml-4 font-italic">Showing 1 to 10 of 35 entries</span>
                                                        </div>
                                                        <div className="col-8">
                                                            <nav className = "mr-3" aria-label="Page navigation example">
                                                                <ul class="pagination justify-content-end">
                                                                    <li class="page-item disabled">
                                                                        <a class="page-link" href="#" tabindex="-1">Previous</a>
                                                                    </li>
                                                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                                    <li class="page-item">
                                                                        <a class="page-link" href="#">Next</a>
                                                                    </li>
                                                                </ul>
                                                            </nav>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Leave_Settings