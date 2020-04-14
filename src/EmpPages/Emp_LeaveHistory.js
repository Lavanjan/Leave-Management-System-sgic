import React, { Fragment } from 'react'

import hritik from './../assets/images/Employees/Leave_Employees/hritik.png'

export default function Emp_LeaveHistory() {
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
                                                        <h4 class="text-dark">Leave History</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="quicklink-sidebar-menu ctm-border-radius shadow-sm bg-white card">
                                    <div class="card-body">
                                        <ul class="list-group">
                                            <li class="mr-1 "><a class="btn-ctm-space btn-dec" href="/Emp_Dashboard"><span class="lnr lnr-home pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Home</span></a></li>
                                            <li class="mr-1"><a class="btn-ctm-space btn-dec" href="/Emp_Details"><span class="lnr lnr-list pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Details</span></a></li>
                                            <li class="mr-1"><a class="btn-ctm-space btn-dec " href="/Emp_Holiday"><span class="lnr lnr-apartment pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Public Holidays</span></a></li>
                                            <li class="mr-1 active"><a class="btn-ctm-space text-white emp-calen-btn" href="/Emp_LeaveHistory"><span class="lnr lnr-briefcase pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Leave History</span></a></li>
                                            <li class="mr-1"><a class="btn-ctm-space btn-dec" href="Emp_Setting"><span class="lnr lnr-cog pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Settings</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </aside>
                        </div>

                        <div class="col-xl-9 col-lg-8  col-md-12">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-xl-12 col-lg-12 col-md-7 col-12 d-flex">
                                            <div class="card ctm-border-radius shadow-sm flex-fill">
                                                <div class="card-header">
                                                    <h4 class="card-title mb-0">Holidays List </h4>
                                                </div>
                                                <div class="card-body">
                                                    <div class="row">                                                      
                                                        <table class="table table-borderless table-sm mt-3">

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
                                                                            <option value="1">Approved</option>
                                                                            <option value="2">Rejected</option>
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
                                                        {/*  */}
                                                        <div class="col-12">
                                                            <div class="tab-content py-0" id="pills-tabContent">
                                                                <div class="tab-pane py-0 active" id="tabs-1" role="tabpanel">
                                                                    <div class="table-responsive table-hover">
                                                                        <table class="table table-bordered table-hover">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th className=" th-bold" scope="col">Date <span className="float-right sort-opacity"><i class="fa fa-sort" aria-hidden="true"></i></span></th>
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
                                                                                    <td>Sick Leave</td>
                                                                                    <td >2020.03.26</td>
                                                                                    <td >2020.03.28</td>
                                                                                    <td ><span class="badge badge-success">Approved</span></td>
                                                                                    <td className = "text-center">
                                                                                        <button type="button" class="btn btn-primary font-weight-bold view-btn btn-sm" data-toggle="modal" data-target="#view-information">View</button>
                                                                                    </td>
                                                                                </tr>

                                                                                <tr>
                                                                                    <td>2020.04.15</td>
                                                                                    <td>Casual Leave</td>
                                                                                    <td>2020.04.01</td>
                                                                                    <td>2020.04.03</td>
                                                                                    <td><span class="badge badge-success">Approved</span></td>
                                                                                    <td className = "text-center">
                                                                                        <button type="button" class="btn btn-primary font-weight-bold view-btn btn-sm">View</button>
                                                                                    </td>
                                                                                </tr>

                                                                                <tr>
                                                                                    <td>2020.04.15</td>
                                                                                    <td>Medical Leave</td>
                                                                                    <td >2020.04.21</td>
                                                                                    <td>2020.04.23</td>
                                                                                    <td><span class="badge badge-success">Approved</span></td>
                                                                                    <td className = "text-center">
                                                                                        <button type="button" class="btn btn-primary font-weight-bold view-btn btn-sm">View</button>
                                                                                    </td>
                                                                                </tr>

                                                                                <tr>
                                                                                    <td>2020.06.25</td>
                                                                                    <td>Sick Leave</td>
                                                                                    <td>2020.06.25</td>
                                                                                    <td>2020.06.25</td>
                                                                                    <td><span class="badge badge-success">Approved</span></td>
                                                                                    <td className = "text-center">
                                                                                        <button type="button" class="btn btn-primary font-weight-bold view-btn btn-sm">View</button>
                                                                                    </td>
                                                                                </tr>

                                                                                <tr>
                                                                                    <td>2020.08.10</td>
                                                                                    <td>Casual Leave</td>
                                                                                    <td>2020.08.14</td>
                                                                                    <td>2020.08.15</td>
                                                                                    <td><span class="badge badge-danger">Rejected</span></td>
                                                                                    <td className = "text-center">
                                                                                        <button type="button" class="btn btn-primary font-weight-bold view-btn btn-sm">View</button>
                                                                                    </td>
                                                                                </tr>

                                                                                <tr>
                                                                                    <td >2020.09.25</td>
                                                                                    <td>Annual Leave</td>
                                                                                    <td >2020.09.16</td>
                                                                                    <td>2020.09.18</td>
                                                                                    <td><span class="badge badge-success">Approved</span></td>
                                                                                    <td className = "text-center">
                                                                                        <button type="button" class="btn btn-primary font-weight-bold view-btn btn-sm">View</button>
                                                                                    </td>
                                                                                </tr>

                                                                                <tr>
                                                                                    <td>2020.09.25</td>
                                                                                    <td>Sick Leave</td>
                                                                                    <td>2020.09.26</td>
                                                                                    <td>2020.09.90</td>
                                                                                    <td><span class="badge badge-success">Approved</span></td>
                                                                                    <td className = "text-center">
                                                                                        <button type="button" class="btn btn-primary font-weight-bold view-btn btn-sm">View</button>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                                <div class="tab-pane py-0" id="tabs-2" role="tabpanel">
                                                                    <div class="table-responsive table-hover">
                                                                        {/* Employees History */}
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
                                                                                    <td><span class="badge badge-success">Approved</span></td>
                                                                                    <td>
                                                                                        <button type="button" class="btn btn-outline-info view-btn btn-sm" data-toggle="modal" data-target="#view-emp-information">View</button>
                                                                                    </td>
                                                                                </tr>

                                                                                <tr>
                                                                                    <td>2020.04.15</td>
                                                                                    <td>Sivapriyan</td>
                                                                                    <td>Casual Leave</td>
                                                                                    <td>2020.04.01</td>
                                                                                    <td>2020.04.03</td>
                                                                                    <td><span class="badge badge-success">Approved</span></td>
                                                                                    <td>
                                                                                        <button type="button" class="btn btn-outline-info view-btn btn-sm">View</button>
                                                                                    </td>
                                                                                </tr>

                                                                                <tr>
                                                                                    <td>2020.04.15</td>
                                                                                    <td>Saathurya</td>
                                                                                    <td>Medical Leave</td>
                                                                                    <td >2020.04.21</td>
                                                                                    <td>2020.04.23</td>
                                                                                    <td><span class="badge badge-danger">Rejected</span></td>
                                                                                    <td>
                                                                                        <button type="button" class="btn btn-outline-info view-btn btn-sm">View</button>
                                                                                    </td>
                                                                                </tr>

                                                                                <tr>
                                                                                    <td>2020.06.25</td>
                                                                                    <td>Hritik</td>
                                                                                    <td>Sick Leave</td>
                                                                                    <td>2020.06.25</td>
                                                                                    <td>2020.06.25</td>
                                                                                    <td><span class="badge badge-success">Approved</span></td>
                                                                                    <td>
                                                                                        <button type="button" class="btn btn-outline-info view-btn btn-sm">View</button>
                                                                                    </td>
                                                                                </tr>

                                                                                <tr>
                                                                                    <td>2020.08.10</td>
                                                                                    <td>TigerShroff</td>
                                                                                    <td>Casual Leave</td>
                                                                                    <td>2020.08.14</td>
                                                                                    <td>2020.08.15</td>
                                                                                    <td><span class="badge badge-success">Approved</span></td>
                                                                                    <td>
                                                                                        <button type="button" class="btn btn-outline-info view-btn btn-sm">View</button>
                                                                                    </td>
                                                                                </tr>

                                                                                <tr>
                                                                                    <td >2020.09.25</td>
                                                                                    <td>Vidyut</td>
                                                                                    <td>Annual Leave</td>
                                                                                    <td >2020.09.16</td>
                                                                                    <td>2020.09.18</td>
                                                                                    <td><span class="badge badge-success">Approved</span></td>
                                                                                    <td>
                                                                                        <button type="button" class="btn btn-outline-info view-btn btn-sm">View</button>
                                                                                    </td>
                                                                                </tr>

                                                                                <tr>
                                                                                    <td>2020.09.25</td>
                                                                                    <td>JohnAbraham</td>
                                                                                    <td>Sick Leave</td>
                                                                                    <td>2020.09.26</td>
                                                                                    <td>2020.09.90</td>
                                                                                    <td><span class="badge badge-success">Approved</span></td>
                                                                                    <td>
                                                                                        <button type="button" class="btn btn-outline-info view-btn btn-sm">View</button>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
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
