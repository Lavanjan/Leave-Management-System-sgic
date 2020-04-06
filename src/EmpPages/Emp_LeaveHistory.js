import React , { Fragment } from 'react'

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

                                <div class="user-card card shadow-sm bg-white text-center ctm-border-radius">
                                    <div class="user-info card-body">
                                        <div class="user-avatar mb-4">
                                            <img src={hritik} alt="User Avatar" class="img-fluid rounded-circle" width="100" />
                                        </div>
                                        <div class="user-details">
                                            <h4><b>Welcome Mr. Raveen</b></h4>
                                            <p>Sun, 29 Nov 2019</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="quicklink-sidebar-menu ctm-border-radius shadow-sm bg-white card">
                                    <div class="card-body">
                                    <ul class="list-group">
                                           <li class="mr-1 "><a href="Emp_profile" class="btn-ctm-space btn-dec"><span class="lnr lnr-user pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Profile</span></a></li>
										<li class="mr-1"><a class="btn-ctm-space btn-dec" href="/Emp_Details"><span class="lnr lnr-list pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Details</span></a></li>
										<li class="mr-1"><a class="btn-ctm-space btn-dec " href="/Emp_Holiday"><span class="lnr lnr-apartment pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Public Holidays</span></a></li>
										<li class="mr-1"><a class="btn-ctm-space btn-dec" href="/Emp_Calendar"><span class="lnr lnr-calendar-full pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Calendar</span></a></li>
										<li class="mr-1 active"><a class="btn-ctm-space emp-calen-btn" href="/Emp_LeaveHistory"><span class="lnr lnr-briefcase pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Leave History</span></a></li>
										<li class="mr-1"><a class="btn-ctm-space btn-dec" href="Emp_Setting"><span class="lnr lnr-cog pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Settings</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </aside>
                        </div>

                        <div class="col-xl-9 col-lg-8  col-md-12">
                            <div class="row">
                            <div class="col-md-12">
                            <div class="card shadow-sm ctm-border-radius">
                <div class="card-body align-center">
                    <div class="row filter-row">
                        <div class="col-sm-6 col-md-6 col-lg-6 col-xl-3">
                            <div class="form-group mb-xl-0 mb-md-2 mb-sm-2">
                                <select class="form-control select">
                                    <option selected>Start Date</option>
                                    <option>Date Of Birth</option>
                                    <option>Created At</option>
                                    <option>Leaving Date</option>
                                    <option>Visa Expiry Date</option>
                                </select>

                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-6 col-xl-3">
                            <div class="form-group mb-lg-0 mb-md-2 mb-sm-2">
                                <input type="text" class="form-control datetimepicker" placeholder="From" />
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-6 col-xl-3">
                            <div class="form-group mb-lg-0 mb-md-0 mb-sm-0">
                                <input type="text" class="form-control datetimepicker" placeholder="To" />
                            </div>
                        </div>

                        <div class="col-sm-6 col-md-6 col-lg-6 col-xl-3">
                            <a href="#" class="btn btn-theme apply-leave-btn text-white btn-block p-2 mb-md-0 mb-sm-0 mb-lg-0 mb-0"> Apply Filter </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card shadow-sm ctm-border-radius">
                <div class="card-body align-center">
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div class="card-header">
                                <h4 class="card-title mb-0">Your Leave History</h4>
                            </div>
                            <div class="card-body">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th width="5%" scope="col">No</th>
                                            <th width="13%" scope="col">Leave Type</th>
                                            <th width="17%" scope="col">From-To</th>
                                            <th width="17%" scope="col">Posting Date</th>
                                            <th width="8%" scope="col">Status</th>
                                            <th width="7%" scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td scope="row">1</td>
                                            <td>Casual Leave</td>
                                            <td>2020.04.03 - 2020.04.05</td>
                                            <td>2020.04.01</td>
                                            <td className="text-info text-center">Requested</td>
                                            <td className="text-center">
                                                <a href="/View_LeaveDetails" class="btn text-white btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;View</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">2</td>
                                            <td>Sick Leave</td>
                                            <td>2020.04.06 - 2020.04.08</td>
                                            <td>2020.04.04</td>
                                            <td className="text-info text-center">Requested</td>
                                            <td className="text-center">
                                                <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;View</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">5</td>
                                            <td>Sick Leave</td>
                                            <td>2020.04.08 - 2020.04.09</td>
                                            <td>2020.04.07</td>
                                            <td className="dark-yellow text-center">Waiting</td>
                                            <td className="text-center">
                                                <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;View</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">6</td>
                                            <td>Sick Leave</td>
                                            <td>2020.04.08 - 2020.04.09</td>
                                            <td>2020.04.06</td>
                                            <td className="dark-yellow text-center">Waiting</td>
                                            <td className="text-center">
                                                <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;View</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">3</td>
                                            <td>Half Day</td>
                                            <td>2020.04.08</td>
                                            <td>2020.04.07</td>
                                            <td className="text-success text-center">Approved</td>
                                            <td className="text-center">
                                                <a href="" class="btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;View</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">4</td>
                                            <td>Sick Leave</td>
                                            <td>2020.04.08 - 2020.04.09</td>
                                            <td>2020.04.07</td>
                                            <td className="text-success text-center">Approved</td>
                                            <td className="text-center">
                                                <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;View</button>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td scope="row">7</td>
                                            <td>Sick Leave</td>
                                            <td>2020.04.08 - 2020.04.09</td>
                                            <td>2020.04.06</td>
                                            <td className="text-danger text-center">Rejectesd</td>
                                            <td className="text-center">
                                                <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;View</button>
                                            </td>
                                        </tr>
                                        <tr></tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="text-center mt-3">
                            <a href="javascript:void(0)" class="btn btn-theme apply-leave-btn ctm-border-radius text-white">Download Report</a>
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
