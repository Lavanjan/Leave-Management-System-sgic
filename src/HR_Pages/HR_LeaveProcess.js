import React, { Fragment, Component } from 'react'
import Calendar from 'react-calendar'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import { NotificationContainer, NotificaionManager } from 'react-notifications'



import './../assets/css/style.css'
import tiger from './../assets/images/Employees/Leave_Employees/tiger.png'
import hritik from './../assets/images/Employees/Leave_Employees/hritik.png'
// import 'react-notifications/lib/Notification.css'


class HR_LeaveProcess extends Component {

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
                                                                <li class="breadcrumb-item d-inline-block"><a href="/" class="text-dark">SGIC</a></li>
                                                                <li class="breadcrumb-item d-inline-block active">Human Resource</li>
                                                            </ol>
                                                            <h4 class="text-dark">Leave Process</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                    <div class="quicklink-sidebar-menu ctm-border-radius shadow-sm bg-white card">
                                        <div class="card-body">
                                            <ul class="list-group">
                                                <li class="mr-1 "><a class="btn-ctm-space  btn-dec" href="/"><span class="lnr lnr-home pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Home</span></a></li>
                                                <li class="mr-1 active"><a class="btn-ctm-space text-white calen-btn" href="/leave_process"><span class="lnr lnr-hourglass pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Leave Process</span></a></li>
                                                <li class="mr-1 "><a class="btn-ctm-space btn-dec" href="/Emp_Dashboard"><span class="lnr lnr-home pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Leave Allocaion</span></a></li>
                                                <li class="mr-1 "><a class="btn-ctm-space btn-dec" href="/manage_employee"><span class="lnr lnr-users pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Manage Employee</span></a></li>
                                                <li class="mr-1"><a class="btn-ctm-space btn-dec" href="/HR_details"><span class="lnr lnr-list pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Details</span></a></li>
                                                <li class="mr-1"><a class="btn-ctm-space btn-dec " href="/Emp_Holiday"><span class="lnr lnr-apartment pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Public Holidays</span></a></li>
                                                <li class="mr-1"><a class="btn-ctm-space btn-dec" href="/HR_leave-history"><span class="lnr lnr-briefcase pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Leave History</span></a></li>
                                                <li class="mr-1"><a class="btn-ctm-space btn-dec" href="/HR_Settings"><span class="lnr lnr-cog pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Settings</span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>

                            <div class="col-xl-9 col-lg-8  col-md-12">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="row">
                                        </div>
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="card ctm-border-radius shadow-sm">
                                                    <div class="card-header">
                                                        <h5 class="card-title mb-0 font-weight-normal">Leave Applications</h5>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-4">
                                                            <div class="card-body">
                                                                <div class="card shadow-sm ctm-border-radius">
                                                                    <div class="card-body">
                                                                        <span class="ml-4">Leave Applications : 35</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-4">
                                                            <div class="card-body">
                                                                <div class="card shadow-sm ctm-border-radius">
                                                                    <div class="card-body">
                                                                        <span class="ml-4">New Leave Requests : 20</span>
                                                                        {/* <span class="ml-4">Total : 20</span> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-4">
                                                            <div class="card-body">
                                                                <div class="card shadow-sm ctm-border-radius">
                                                                    <div class="card-body">
                                                                        <span class="ml-4">Pending Requests : 15</span>
                                                                        {/* <span class="ml-4">Total : 15</span> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <table class="table table-borderless table-sm ">

                                                        <tbody>
                                                            <tr>
                                                                <td className="text-center mb-4" width="4%">Show</td>
                                                                <td width="6%">
                                                                    <select class="custom-select custom-select-sm">
                                                                        <option selected>10</option>
                                                                        <option value="1">15</option>
                                                                        <option value="2">20</option>
                                                                        <option value="3">25</option>
                                                                    </select>
                                                                </td>
                                                                <td className="text-center mb-4" width="1%">Entries</td>
                                                                <td width="8%">
                                                                    <select class="custom-select custom-select-sm">
                                                                        <option selected>Status</option>
                                                                        <option value="1">New</option>
                                                                        <option value="2">Pending</option>
                                                                    </select>
                                                                </td>
                                                                <td width="20%"></td>
                                                                <td className="text-center mb-4" width="2%"></td>
                                                                <td className="mr-4" width="12%">
                                                                    <input class="form-control search-box" type="text" placeholder="Search" aria-label="Search" />
                                                                </td>
                                                            </tr>
                                                        </tbody>

                                                    </table>
                                                    <div className="row justify-content-md-center">
                                                        <div className="col-12 pl-4 pr-4">
                                                            <table class="table table-bordered table-hover">
                                                                <thead>
                                                                    <tr>
                                                                        <th className=" th-bold" scope="col">Date <span className="float-right sort-opacity"><i class="fa fa-sort" aria-hidden="true"></i></span></th>
                                                                        <th className=" th-bold" scope="col">Employee Name</th>
                                                                        <th className=" th-bold" scope="col">Leave Type</th>
                                                                        <th className=" th-bold" scope="col">From</th>
                                                                        <th className=" th-bold" scope="col">To</th>
                                                                        <th className=" th-bold" scope="col">Status</th>
                                                                        <th className=" th-bold" scope="col">Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>2020.03.25</td>
                                                                        <td >Lavanjan</td>
                                                                        <td>Sick Leave</td>
                                                                        <td >2020.03.26</td>
                                                                        <td >2020.03.28</td>
                                                                        <td ><span class="badge badge-primary">New Request</span></td>
                                                                        <td>
                                                                            <button type="button" class="btn btn-primary font-weight-bold view-btn btn-sm">View</button>
                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td>2020.04.15</td>
                                                                        <td>Sivapriyan</td>
                                                                        <td>Casual Leave</td>
                                                                        <td>2020.04.01</td>
                                                                        <td>2020.04.03</td>
                                                                        <td><span class="badge badge-primary">New Request</span></td>
                                                                        <td>
                                                                            <button type="button" class="btn btn-primary font-weight-bold view-btn btn-sm">View</button>
                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td>2020.04.15</td>
                                                                        <td>Saathurya</td>
                                                                        <td>Medical Leave</td>
                                                                        <td >2020.04.21</td>
                                                                        <td>2020.04.23</td>
                                                                        <td><span class="badge badge-primary">New Request</span></td>
                                                                        <td>
                                                                            <button type="button" class="btn btn-primary font-weight-bold view-btn btn-sm">View</button>
                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td>2020.06.25</td>
                                                                        <td>Hritik</td>
                                                                        <td>Sick Leave</td>
                                                                        <td>2020.06.25</td>
                                                                        <td>2020.06.25</td>
                                                                        <td><span class="badge badge-primary">New Request</span></td>
                                                                        <td>
                                                                            <button type="button" class="btn btn-primary font-weight-bold view-btn btn-sm">View</button>
                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td>2020.08.10</td>
                                                                        <td>TigerShroff</td>
                                                                        <td>Casual Leave</td>
                                                                        <td>2020.08.14</td>
                                                                        <td>2020.08.15</td>
                                                                        <td><span class="badge badge-warning">Pending</span></td>
                                                                        <td>
                                                                            <button type="button" class="btn btn-primary font-weight-bold view-btn btn-sm">View</button>
                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td >2020.09.25</td>
                                                                        <td>Vidyut</td>
                                                                        <td>Annual Leave</td>
                                                                        <td >2020.09.16</td>
                                                                        <td>2020.09.18</td>
                                                                        <td><span class="badge badge-warning">Pending</span></td>
                                                                        <td>
                                                                            <button type="button" class="btn btn-primary font-weight-bold view-btn btn-sm">View</button>
                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td>2020.09.25</td>
                                                                        <td>JohnAbraham</td>
                                                                        <td>Sick Leave</td>
                                                                        <td>2020.09.26</td>
                                                                        <td>2020.09.90</td>
                                                                        <td><span class="badge badge-warning">Pending</span></td>
                                                                        <td>
                                                                            <button type="button" class="btn btn-primary font-weight-bold view-btn btn-sm">View</button>
                                                                        </td>
                                                                    </tr>


                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-4">
                                                            <span className="ml-4 font-italic">Showing 1 to 10 of 35 entries</span>
                                                        </div>
                                                        <div className="col-8">
                                                            <nav className="mr-3" aria-label="Page navigation example">
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
export default HR_LeaveProcess