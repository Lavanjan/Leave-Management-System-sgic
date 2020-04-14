import React, { Fragment } from 'react'
import hritik from './../assets/images/Employees/Leave_Employees/hritik.png'


export default function Emp_Details() {
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
                                                            <li class="breadcrumb-item d-inline-block active">Employees</li>
                                                        </ol>
                                                        <h4 class="text-dark">Holidays</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                               

                                <div class="quicklink-sidebar-menu ctm-border-radius shadow-sm bg-white card">
                                    <div class="card-body">
                                        <ul class="list-group">
                                        <li class="mr-1"><a class="btn-ctm-space btn-dec" href="/Emp_Dashboard"><span class="lnr lnr-home pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Home</span></a></li>
                                            <li class="mr-1"><a class="btn-ctm-space btn-dec" href="/Emp_Details"><span class="lnr lnr-list pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Details</span></a></li>
                                            <li class="mr-1 active"><a class="btn-ctm-space emp-calen-btn " href="/Emp_Holiday"><span class="lnr lnr-apartment pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Public Holidays</span></a></li>
                                            <li class="mr-1"><a class="btn-ctm-space btn-dec" href="/Emp_LeaveHistory"><span class="lnr lnr-briefcase pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Leave History</span></a></li>
                                            <li class="mr-1"><a class="btn-ctm-space btn-dec" href="Emp_Setting"><span class="lnr lnr-cog pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Settings</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </aside>
                        </div>

                        <div class="col-xl-9 col-lg-8  col-md-12">
                            <div class="row">
                                <div class="col-md-12">
                                    {/* <Switch>
                                    <Route exact path={`${path}`}>
                                        <Employee_ProfileLandpage />
                                    </Route>
                                    <Route path={`${path}/employee_details`}>
                                        <Employee_Details />
                                    </Route>
                                    <Route path={`${path}/holiday_history`}>
                                        <Employee_HolidayPage />
                                    </Route>
                                    <Route path={`${path}/employee_calendar`}>
                                        <Employee_Calendar />
                                    </Route>
                                    <Route path={`${path}/employee_leave_history`}>
                                        <Employee_LeaveHistory />
                                    </Route>
                                    <Route path={`${path}/employee_settings`}>
                                        <Employee_Setting />
                                    </Route>
                                    
                                </Switch> */}
                                    <div class="row">
                                        <div class="col-xl-6 col-lg-12 col-md-7 col-12 d-flex">
                                            <div class="card ctm-border-radius shadow-sm flex-fill">
                                                <div class="card-header">
                                                    <h4 class="card-title mb-0">Holidays List </h4>
                                                </div>
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-md-7 col-sm-6">
                                                            <ul class="nav his-pills" id="pills-tab" role="tablist">
                                                                <li class="nav-item mr-md-1">
                                                                    <a class="btn his-link active " id="pills-home-tab" data-toggle="pill" href="#tabs-1" role="tab" aria-controls="pills-home" aria-selected="true">Upcoming</a>
                                                                </li>
                                                                <li class="nav-item">
                                                                    <a class="btn his-link" id="pills-profile-tab" data-toggle="pill" href="#tabs-2" role="tab" aria-controls="pills-profile" aria-selected="false">History</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        {/*  */}
                                                        <div class="col-12">
                                                            <div class="tab-content py-0" id="pills-tabContent">
                                                                <div class="tab-pane py-0 active" id="tabs-1" role="tabpanel">
                                                                    <div class="table-responsive table-hover">
                                                                        <table class="table">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th>No</th>
                                                                                    <th>Date</th>
                                                                                    <th>Leave Reason</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>1</td>
                                                                                    <td>Mon, 26 May 2020</td>
                                                                                    <td>Bank Holiday</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>2</td>
                                                                                    <td>Wed, 25 May 2020</td>
                                                                                    <td>Christmas Day</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>3</td>
                                                                                    <td>Thu, 26 June 2020</td>
                                                                                    <td>Poya Day</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>4</td>
                                                                                    <td>Wed, 1 July 2020</td>
                                                                                    <td>Bank Holiday</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>5</td>
                                                                                    <td>Mon, 6 Aug 2020</td>
                                                                                    <td>Poya Day</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>6</td>
                                                                                    <td>Fri, 17 Aug 2020</td>
                                                                                    <td>Public Holiday Day</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>7</td>
                                                                                    <td>Mon, 9 Sep 2020</td>
                                                                                    <td>Presidents' Day</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>8</td>
                                                                                    <td>Wed, 1 Sep 2020</td>
                                                                                    <td>Holi</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>9</td>
                                                                                    <td>Sat, 4 Oct 2020</td>
                                                                                    <td>Independence Day</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>10</td>
                                                                                    <td>Mon, 7 Nov 2020</td>
                                                                                    <td>Labor Day</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>11</td>
                                                                                    <td>Mon, 11 Nov 2020</td>
                                                                                    <td>Bank  Holiday</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>12</td>
                                                                                    <td>Fri, 25 Dec 2020</td>
                                                                                    <td>Christmas Day</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                                <div class="tab-pane py-0" id="tabs-2" role="tabpanel">
                                                                    <div class="table-responsive table-hover">
                                                                        <table class="table">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th>No</th>
                                                                                    <th>Date</th>
                                                                                    <th>Leave Reason</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>1</td>
                                                                                    <td>Tue, 1 Jan 2020</td>
                                                                                    <td>New Year's Day</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>2</td>
                                                                                    <td>Mon, 21 Jan 2020</td>
                                                                                    <td>Poya Day</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>3</td>
                                                                                    <td>Mon, 18 Feb 2019</td>
                                                                                    <td>Presidents' Day</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>4</td>
                                                                                    <td>Mon, 14 Oct 2019</td>
                                                                                    <td>Independence Day</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>5</td>
                                                                                    <td>Mon, 11 Nov 2019</td>
                                                                                    <td>Bank Holiday Day</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>6</td>
                                                                                    <td>Fri, 17 Jan 2019</td>
                                                                                    <td>Poya Day</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>7</td>
                                                                                    <td>Mon, 18 Feb 2019</td>
                                                                                    <td>Presidents' Day</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>8</td>
                                                                                    <td>Thu, 21 Mar 2019</td>
                                                                                    <td>Holi</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>9</td>
                                                                                    <td>Thu, 4 Jul 2019</td>
                                                                                    <td>Independence Day</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>11</td>
                                                                                    <td>Mon, 11 Nov 2019</td>
                                                                                    <td>Labours Day</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>10</td>
                                                                                    <td>Thu, 28 Nov 2019</td>
                                                                                    <td>Thanksgiving Day</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>12</td>
                                                                                    <td>Wed, 25 Dec 2019</td>
                                                                                    <td>Christmas Day</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
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
