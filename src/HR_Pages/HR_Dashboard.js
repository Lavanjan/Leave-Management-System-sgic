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


class HR_Dashboard extends Component {

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
                                                            <h4 class="text-dark">Home</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                    <div class="quicklink-sidebar-menu ctm-border-radius shadow-sm bg-white card">
                                        <div class="card-body">
                                            <ul class="list-group">
                                                <li class="mr-1 active"><a class="btn-ctm-space text-white calen-btn" href="/"><span class="lnr lnr-home pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Home</span></a></li>
                                                <li class="mr-1 "><a class="btn-ctm-space btn-dec" href="/leave_process"><span class="lnr lnr-hourglass pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Leave Process</span></a></li>
                                                <li class="mr-1 "><a class="btn-ctm-space btn-dec" href="/Emp_Dashboard"><span class="lnr lnr-home pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Leave Allocaion</span></a></li>
                                                <li class="mr-1 "><a class="btn-ctm-space btn-dec" href="/manage_employee"><span class="lnr lnr-users pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Manage Employee</span></a></li>
                                                <li class="mr-1"><a class="btn-ctm-space btn-dec" href="/Emp_Details"><span class="lnr lnr-list pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Details</span></a></li>
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
                                            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div class="card dash-widget ctm-border-radius shadow-sm">
                                                    <div class="card-body">
                                                        <div class="card-icon bg-primary">
                                                            <i class="fa fa-signal" aria-hidden="true"></i>
                                                        </div>
                                                        <div class="card-right">
                                                            <h4 class="card-title">Casual Leave</h4>
                                                            <h4 class="card-title">Total : 3</h4>
                                                            <h4 class="card-title">Available : 1</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-3 col-lg-6 col-sm-6 col-12">
                                                <div class="card dash-widget ctm-border-radius shadow-sm">
                                                    <div class="card-body">
                                                        <div class="card-icon bg-warning">
                                                            <i class="fa fa-signal" aria-hidden="true"></i>
                                                        </div>
                                                        <div class="card-right">
                                                            <h4 class="card-title">Sick Leave</h4>
                                                            <h4 class="card-title">Total : 5</h4>
                                                            <h4 class="card-title">Available : 2</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-3 col-lg-6 col-sm-6 col-12">
                                                <div class="card dash-widget ctm-border-radius shadow-sm">
                                                    <div class="card-body">
                                                        <div className="card-icon bg-danger">
                                                            <i class="fa fa-signal" aria-hidden="true"></i>
                                                        </div>
                                                        <div class="card-right">
                                                            <h4 class="card-title">Half Day</h4>
                                                            <h4 class="card-title">Total : 3</h4>
                                                            <h4 class="card-title">Available : 0</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-3 col-lg-6 col-sm-6 col-12">
                                                <div class="card dash-widget ctm-border-radius shadow-sm">
                                                    <div class="card-body">
                                                        <div class="card-icon bg-success">
                                                            <i class="fa fa-signal" aria-hidden="true"></i>
                                                        </div>
                                                        <div class="card-right">
                                                            <h4 class="card-title">Other Leave</h4>
                                                            <h4 class="card-title">Total : 6</h4>
                                                            <h4 class="card-title">Available : 2</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card shadow-sm ctm-border-radius">
                                            <div class="card-body">
                                                <span><i class="fa fa-bell text-warning" aria-hidden="true"></i></span>
                                                <span class="ml-4">You Have Some Leave Requests For Your Approval.</span>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-8">
                                                <div class="card ctm-border-radius shadow-sm">
                                                    <div class="card-header">
                                                        <h5 class="card-title mb-0 font-weight-normal">Apply Leaves</h5>
                                                    </div>
                                                    <div class="card-body">
                                                        <form>
                                                            <div class="row">
                                                                <div class="col-sm-6">
                                                                    <div class="form-group">
                                                                        <label>
                                                                            Leave Type
															<span class="text-danger">*</span>
                                                                        </label>
                                                                        <select class="form-control select">
                                                                            <option>Select Leave</option>
                                                                            <option>Casual Leave</option>
                                                                            <option>Sick Leave</option>
                                                                            <option>Half Day</option>
                                                                            <option>Other Leave</option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                {/* <div class="col-sm-6 leave-col">
                                                                    <div class="form-group">
                                                                        <label>Remaining Leaves</label>
                                                                        <input type="text" class="form-control" placeholder="10" disabled />
                                                                    </div>
                                                                </div> */}
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-sm-6">
                                                                    <div class="form-group">
                                                                        <label>Dates</label>
                                                                        <input type="text" class="form-control datetimepicker" />
                                                                    </div>
                                                                </div>
                                                                {/* <div class="col-sm-6 leave-col">
                                                                    <div class="form-group">
                                                                        <label>To</label>
                                                                        <input type="text" class="form-control datetimepicker" />
                                                                    </div>
                                                                </div> */}
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-sm-6 leave-col">
                                                                    <div class="form-group">
                                                                        <label>Doctor Certificate </label>&nbsp;&nbsp;
                                                                        <input type="radio" id="male" name="gender" value="male" />&nbsp;
                                                                        <label for="male">Yes</label>&nbsp;&nbsp;
                                                                        <input type="radio" id="male" name="gender" value="male" />&nbsp;
                                                                        <label for="male">No</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div class="col-sm-6 leave-col">
                                                                    <div class="input-group">
                                                                        <div class="custom-file">
                                                                            <input type="file" class="custom-file-input" id="inputGroupFile01"
                                                                                aria-describedby="inputGroupFileAddon01" />
                                                                            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <br />
                                                            <div class="row">
                                                                <div class="col-sm-8">
                                                                    <div class="form-group mb-0">
                                                                        <label>Reason</label>
                                                                        <textarea class="form-control" rows="4" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* <div class="text-center">
                                                                <a href="" class="btn btn-theme apply-leave text-white ctm-border-radius mt-4 mr-5" data-toggle="modal" data-target="#add-information">Apply</a>
                                                                <a href="" class="btn cancel-leave text-white ctm-border-radius mt-4">Cancel</a>
                                                            </div> */}
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <div className="col-4">
                                                <Calendar
                                                    onChange={this.onChange}
                                                    value={this.state.date}
                                                />
                                            </div> */}




                                            <div class="col-xl-4 col-lg-12 col-md-12">
                                                <div class="row">
                                                    <div class="col-xl-12 col-lg-6 col-md-6 d-flex">
                                                        
                                                        <Calendar
                                                            onChange={this.onChange}
                                                            value={this.state.date}
                                                        />
                                                    </div>

                                                    <div class="col-xl-12 col-lg-6 col-md-6 d-flex mt-4">
                                                        <div class="card bg-none mb-3" style={{ width: "19rem" }}>
                                                            {/* <div class="card-header">Events Happening During this period</div> */}
                                                            <div class="card-body" style={{ height: "7rem" }}>
                                                                <span><i class="fa fa-calendar fa-size-dash" aria-hidden="true"></i></span>
                                                            </div>
                                                            <h6 className="text-center font-weight-normal">No events happening<br /> during this period</h6>
                                                            <p className="font-italic text-center  small">Public holidays, shifts etc. will be shown here.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Leave Request DIV */}
                                        <div class="row">
                                            <div class="col-md-6 col-xl-12 col-lg-6 d-flex">
                                                <div class="card ctm-border-radius shadow-sm flex-fill">
                                                    <div class="card-header">
                                                        <h5 class="card-title mb-0 font-weight-normal">Leave Request waiting For My Approval</h5>
                                                    </div>
                                                    <div class="card-body">
                                                        <table class="table table-hover table-bordered table-sm">
                                                            {/* <thead>
                                                                <tr>
                                                                    <th width="9%" scope="col">Name</th>
                                                                    <th width="9%" scope="col">Leave Type</th>
                                                                    <th width="17%" scope="col">From-To</th>
                                                                    <th width="5%" scope="col">Action</th>
                                                                </tr>
                                                            </thead> */}
                                                            <tbody>
                                                                <tr>
                                                                    <td>Ravi Lavanjan</td>
                                                                    <td>Casual Leave</td>
                                                                    <td>2020.04.03 - 2020.04.05</td>
                                                                    <td className="text-center">
                                                                        <a href="/leave_action" class="btn btn-primary font-weight-bold view-btn btn-sm">View</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Linges Sivapiriyan</td>
                                                                    <td>Sick Leave</td>
                                                                    <td>2020.04.06 - 2020.04.08</td>
                                                                    <td className="text-center">
                                                                        <button type="button" class="btn btn-primary font-weight-bold view-btn btn-sm">View</button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Jeya Sathurya</td>
                                                                    <td>Half Day</td>
                                                                    <td>2020.04.08</td>
                                                                    <td className="text-center">
                                                                        <button type="button" class="btn btn-primary font-weight-bold view-btn btn-sm">View</button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Sinthu Wamsan</td>
                                                                    <td>Sick Leave</td>
                                                                    <td>2020.04.08 - 2020.04.09</td>
                                                                    <td className="text-center">
                                                                        <button type="button" class="btn btn-primary font-weight-bold view-btn btn-sm">View</button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Hritik Roshan</td>
                                                                    <td>Casual Leave</td>
                                                                    <td>2020.05.09 - 2020.05.12</td>
                                                                    <td className="text-center">
                                                                        <button type="button" class="btn btn-primary font-weight-bold view-btn btn-sm">View</button>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <div className="row">
                                                        <div className="col-8">
                                                            <span className="ml-4 font-italic">Showing 1 to 5 of 15 new requests</span>
                                                        </div>
                                                        <div className="col-4 justify-content-end">
                                                            <a href = "/leave_process"><span className = "text-right">View more...</span></a>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    
                                                </div>

                                            </div>
                                            {/* <div className="col-4">
                                                <div class="card shadow-sm ctm-border-radius">
                                                    <div class="card-body">
                                                        <span class="avatar" data-toggle="tooltip" data-placement="top" title="Jenni Sims"><img src={tiger} alt="image" class="img-fluid" /></span>
                                                        <span class="ml-4">Tiger shroff is working from home today.</span>
                                                    </div>
                                                </div>
                                                <div class="card shadow-sm ctm-border-radius">
                                                    <div class="card-body">
                                                        <span class="avatar" data-toggle="tooltip" data-placement="top" title="Jenni Sims"><img src={hritik} alt="image" class="img-fluid" /></span>
                                                        <span class="ml-4">Hritik Roshan is away today.</span>
                                                    </div>
                                                </div>
                                            </div> */}

                                        </div>
                                        {/* End of Leave Request DIV */}
                                        <div className="row">
                                            <div className="remain-leave-table col-12">
                                                {/* <Calendar
                                                    onChange={this.onChange}
                                                    value={this.state.date}
                                                /> */}
                                                <div class="card ctm-border-radius shadow-sm">
                                                    <div class="card-header">
                                                        <h5 class="card-title mb-0 font-weight-normal">My Recent Leave Activities</h5>
                                                    </div>
                                                    {/* <div className="card-body"> */}
                                                        <table class="table table-hover leave-action-table ">

                                                            <tbody>


                                                                <tr>
                                                                    <td width="50%" className="">2020.03.25 (Mon) to 2020.03.27 (Wed)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-pencil-square-o text-dark" aria-hidden="true"></i>&nbsp;&nbsp; <i class="fa fa-trash text-danger" aria-hidden="true"></i> <br />Sick Leave</td>
                                                                    <td>2days</td>
                                                                    <td>Applied on 2020.03.24 13:45:19</td>
                                                                    <td>Waiting For Approval</td>
                                                                </tr>

                                                                <tr>
                                                                    <td className="">2020.03.25 (Mon) to 2020.03.27 (Wed)<br />Sick Leave <br />Rejected By Alan Sathyathas (Manager at SGIC) on 2020.03.25</td>
                                                                    <td>3days</td>
                                                                    <td>Applied on 2020.03.24 13:45:19</td>
                                                                    <td>Rejected</td>
                                                                </tr>

                                                                <tr>
                                                                    <td className="">2020.03.25 (Mon) to 2020.03.27 (Wed)<br />Sick Leave <br />Approved By Alan Sathyathas (Manager at SGIC) on 2020.03.24</td>
                                                                    <td>1days</td>
                                                                    <td>Applied on 2020.03.24 13:45:19</td>
                                                                    <td>Approved</td>
                                                                </tr>



                                                            </tbody>
                                                        </table>

                                                    {/* </div> */}

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>


                    {/* Confirm Leave */}

                    <div class="modal fade" id="add-information" role="document">
                        <div class="modal-dialog modal-lg modal-top modal-full-height ">
                            <div class="modal-content">
                                <div class="modal-body style-add-modal">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    <h4 class="modal-title mb-3">Confirm Leave For - Sick Leave</h4>
                                    <div class="row">
                                        <table class="table table-borderless leave-action-table">

                                            <tbody>

                                                <tr>
                                                    <td width="20%" className="bold-let">Sick Leave </td>
                                                    <td colSpan="3">2020.04.26 (Fri) to 2020.04.29 (Mon)</td>

                                                </tr>

                                                <tr>
                                                    <td className="bold-let">Leave Duration :  </td>
                                                    <td width="30%">2 Days</td>
                                                    <td width="20%" className="bold-let">Calendar Days :  </td>
                                                    <td>4 Days</td>
                                                </tr>

                                                <tr>
                                                    <td className="bold-let">Reason : </td>
                                                    <td colspan="5">Writers write descriptive paragraphs because their purpose is to describe something. Their point is that something is beautiful or disgusting or strangely intriguing.</td>
                                                </tr>
                                                <tr>

                                                    <td colSpan="4">
                                                        <div class="alert alert-info">
                                                            <strong>Warning!</strong> Supporting document required to be attached as the leave duration exceeds 1 days.
                                                            </div>
                                                    </td>
                                                </tr>


                                            </tbody>
                                        </table>

                                    </div>
                                    <NotificationContainer />
                                    <button type="button" className="btn btn-info text-white ctm-border-radius float-right mt-0 mr-5" data-dismiss="modal" onClick={this.createNotification('success')}>Back</button>
                                    <button type="button" className="btn btn-warning text-white ctm-border-radius float-right  mr-4" data-dismiss="modal">Confirm</button>

                                </div>
                            </div>
                        </div>
                    </div>






                    {/* New Team the modal */}
                    <div class="modal fade" id="addNewType">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    <h4 class="modal-title mb-3">Create New Date Type</h4>
                                    <div class="form-group">
                                        <div class="input-group mb-3">
                                            <input class="form-control date-enter" type="text" placeholder="Date Type" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group mb-3">
                                            <input class="form-control datetimepicker date-enter" type="text" placeholder="Key Date" />
                                        </div>
                                    </div>
                                    <button type="button" class="btn btn-danger ctm-border-radius float-right ml-3" data-dismiss="modal">Cancel</button>
                                    <button type="button" class="btn text-white ctm-border-radius btn-theme  button-1 float-right">Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Add basic info modal */}
                    <div class="modal fade" id="add_basicInformation">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    <h4 class="modal-title mb-3">Basic Information</h4>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Add Preferred Name" />
                                    </div>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="First Name" />
                                    </div>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Last Name" />
                                    </div>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Add Nationality" />
                                    </div>
                                    <div class="input-group mb-3">
                                        <input class="form-control datetimepicker date-enter" type="text" placeholder="Add Date of Birth" />
                                    </div>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Add Gender" />
                                    </div>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Add Blood Group" />
                                    </div>
                                    <button type="button" class="btn btn-danger text-white ctm-border-radius float-right ml-3" data-dismiss="modal">Cancel</button>
                                    <button type="button" class="btn btn-theme  button-1 text-white ctm-border-radius float-right">Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Edit basic Infor mation modal */}
                    <div class="modal fade" id="edit_basicInformation">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    <h4 class="modal-title mb-3">Edit Basic Information</h4>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Add Preferred Name" value="Maria" />
                                    </div>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="First Name" value="Maria" />
                                    </div>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Last Name" value="Cotton" />
                                    </div>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Add Nationality" value="American" />
                                    </div>
                                    <div class="input-group mb-3">
                                        <input class="form-control datetimepicker date-enter" type="text" placeholder="Add Date of Birth" value="05-07-1990" />
                                    </div>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Add Gender" value="Female" />
                                    </div>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Add Blood Group" value="A+" />
                                    </div>
                                    <button type="button" class="btn btn-danger float-right ml-3" data-dismiss="modal">Cancel</button>
                                    <button type="button" class="btn btn-theme  button-1 text-white ctm-border-radius float-right">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Edit Contact the Modal */}
                    <div class="modal fade" id="edit_Contact">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    <h4 class="modal-title mb-3">Edit Contact</h4>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Add Phone Number" value="987654321" />
                                    </div>
                                    <div class="input-group mb-3">
                                        <input type="email" class="form-control" placeholder="Login Email" value="mariacotton@example.com" />
                                    </div>
                                    <div class="input-group mb-3">
                                        <input type="email" class="form-control" placeholder="Add Personal Email" value="maria@example.com" />
                                    </div>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Add Seconary Phone Number" value="986754231" />
                                    </div>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Add Web Site" value="www.focustechnology.com" />
                                    </div>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Connect Your Linkedin" value="#mariacotton" />
                                    </div>
                                    <button type="button" class="btn btn-danger text-white ctm-border-radius float-right ml-3" data-dismiss="modal">Cancel</button>
                                    <button type="button" class="btn btn-theme  button-1 text-white ctm-border-radius float-right">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Add contact the modal */}
                    <div class="modal fade" id="add_Contact">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">

                                <div class="modal-body">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    <h4 class="modal-title mb-3">Add Contact</h4>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Add Phone Number" />
                                    </div>
                                    <div class="input-group mb-3">
                                        <input type="email" class="form-control" placeholder="Login Email" />
                                    </div>
                                    <div class="input-group mb-3">
                                        <input type="email" class="form-control" placeholder="Add Personal Email" />
                                    </div>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Add Seconary Phone Number" />
                                    </div>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Add Web Site" />
                                    </div>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Connect Your Linkedin" />
                                    </div>
                                    <button type="button" class="btn btn-danger text-white ctm-border-radius float-right ml-3" data-dismiss="modal">Cancel</button>
                                    <button type="button" class="btn btn-theme  button-1 text-white ctm-border-radius float-right">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Add a key date modal */}
                    <div class="modal fade" id="addKeyDate">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    <h4 class="modal-title mb-3">Add New Date</h4>
                                    <div class="form-group">
                                        <div class="input-group mb-1">
                                            <input class="form-control datetimepicker date-enter" type="text" placeholder="Date Type" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group mb-3">
                                            <input class="form-control datetimepicker date-enter" type="text" placeholder="Key Date" />
                                        </div>
                                    </div>
                                    <button type="button" class="btn btn-danger text-white ctm-border-radius float-right ml-3" data-dismiss="modal">Cancel</button>
                                    <button type="button" class="btn btn-theme  button-1 text-white ctm-border-radius float-right">Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Edit Date Modal */}
                    <div class="modal fade" id="edit_Dates">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    <h4 class="modal-title mb-3">Edit Date</h4>
                                    <div class="form-group">
                                        <div class="input-group mb-1">
                                            <input class="form-control datetimepicker date-enter" type="text" placeholder="Start Date" value="06-07-2017" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group mb-3">
                                            <input class="form-control datetimepicker date-enter" type="text" placeholder="Visa Expiry Date" value="06 -07-2020" />
                                        </div>
                                    </div>
                                    <button type="button" class="btn btn-danger text-white ctm-border-radius float-right ml-3" data-dismiss="modal">Cancel</button>
                                    <button type="button" class="btn btn-theme  button-1 text-white ctm-border-radius float-right">Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default HR_Dashboard