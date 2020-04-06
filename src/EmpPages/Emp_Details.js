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
                                                        <h4 class="text-dark">Infromations</h4>
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
                                           <li class="mr-1 "><a href="Emp_profile" class="btn-dec btn-ctm-space btn-dec"><span class="lnr lnr-user pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Profile</span></a></li>
										<li class="mr-1 active"><a class="btn-ctm-space emp-calen-btn" href="/Emp_Details"><span class="lnr lnr-list pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Details</span></a></li>
										<li class="mr-1"><a class="btn-ctm-space btn-dec " href="/Emp_Holiday"><span class="lnr lnr-apartment pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Public Holidays</span></a></li>
										<li class="mr-1"><a class="btn-ctm-space btn-dec" href="/Emp_Calendar"><span class="lnr lnr-calendar-full pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Calendar</span></a></li>
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
                                    <div class="row">
                                        <div class="col-xl-4 col-lg-6 col-md-6 d-flex">
                                            <div class="card flex-fill ctm-border-radius shadow-sm">
                                                <div class="card-header">
                                                    <h4 class="font-weight-normal mb-0">Basic Information</h4>
                                                </div>
                                                <div class="card-body text-center">
                                                    <p class="card-text mb-3"><span class="text-primary">Preferred Name </span> Hritik</p>
                                                    <p class="card-text mb-3"><span class="text-primary">First Name :</span> Hritik</p>
                                                    <p class="card-text mb-3"><span class="text-primary">Last Name : </span>Roshan</p>
                                                    <p class="card-text mb-3"><span class="text-primary">Nationality :</span> SriLankan</p>
                                                    <p class="card-text mb-3"><span class="text-primary">Date of Birth </span><br></br> 05 December 1980</p>
                                                    <p class="card-text mb-3"><span class="text-primary">Gender : </span>Male</p>
                                                    <p class="card-text mb-3"><span class="text-primary">Blood Group :</span> O+</p>
                                                    <a href="" class="btn Emp-edit-btn text-white ctm-border-radius mt-4" data-toggle="modal" data-target="#edit_basicInformation">Edit</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-4 col-lg-6 col-md-6 d-flex">
                                            <div class="card flex-fill  ctm-border-radius shadow-sm">
                                                <div class="card-header">
                                                    <h4 class="card-title mb-0">Contact</h4>
                                                </div>
                                                <div class="card-body text-center">
                                                    <p class="card-text mb-3"><span class="text-primary">Phone Number </span><br></br>077 458 6942</p>
                                                    <p class="card-text mb-3"><span class="text-primary">Personal Email  </span><br></br>hritikroshan@gmail.com</p>
                                                    <p class="card-text mb-3"><span class="text-primary">Secondary Number </span><br></br>021-226 5698</p>
                                                    <p class="card-text mb-3"><span class="text-primary">Web Site  </span><br></br>www.medium.com/hritk</p>
                                                    <p class="card-text mb-3"><span class="text-primary">Linkedin  </span><br></br>github.com/hritk</p>
                                                    <a href="" class="btn Emp-edit-btn text-white ctm-border-radius mt-4" data-toggle="modal" data-target="#edit_basicInformation">Edit</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-4 col-lg-12 col-md-12">
                                            <div class="row">
                                                <div class="col-xl-12 col-lg-6 col-md-6 d-flex">
                                                    <div class="card ctm-border-radius shadow-sm flex-fill">
                                                        <div class="card-header">
                                                            <h4 class="font-weight-normal mb-0">Payroll Details</h4>
                                                        </div>
                                                        <div class="card-body text-center">
                                                            <p class="card-text mb-3"><span class="text-primary">Bank Name  <br></br></span>Commercial Bank PLC</p>
                                                            <p class="card-text mb-3"><span class="text-primary">Bank Account Number  <br></br></span>800608945</p>
                                                            <p class="card-text mb-3"><span class="text-primary">Bank Contact Number <br></br> </span>021-200 5689</p>

                                                            <a href="javascript:void(0)" class="btn btn-theme ctm-border-radius text-white btn-sm" data-toggle="modal" data-target="#edit_Dates"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="col-xl-12 col-lg-6 col-md-6 d-flex">
                                                    <div class="card ctm-border-radius shadow-sm flex-fill">
                                                        <div class="card-header">
                                                            <h4 class="font-weight-normal d-inline-block mb-0">Join Date</h4>
                                                        </div>
                                                        <div class="card-body">
                                                            <h5 className="font-weight-normal">2015 January 15</h5>
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
