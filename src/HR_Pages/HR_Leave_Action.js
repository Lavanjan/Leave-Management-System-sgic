import React, { Fragment } from 'react'

import leave_emp from './../assets/images/Employees/Leave_Employees/hritik.png'

import './../assets/css/style.css'

export default function HR_Leave_Action() {
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
                                                            <li class="breadcrumb-item d-inline-block"><a href="index.html" class="text-dark">SGIC</a></li>
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
                                            <li class="mr-1 "><a class="btn-ctm-space btn-dec" href="/"><span class="lnr lnr-home pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Home</span></a></li>
                                            <li class="mr-1 active"><a class="btn-ctm-space text-white calen-btn" href="/leave_process"><span class="lnr lnr-hourglass pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Leave Process</span></a></li>
                                            <li class="mr-1 "><a class="btn-ctm-space btn-dec" href="/Emp_Dashboard"><span class="lnr lnr-home pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Leave Allocaion</span></a></li>
                                            <li class="mr-1 "><a class="btn-ctm-space btn-dec" href="/Emp_Dashboard"><span class="lnr lnr-users pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Manage Employee</span></a></li>
                                            <li class="mr-1"><a class="btn-ctm-space btn-dec" href="/HR_details"><span class="lnr lnr-list pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Details</span></a></li>
                                            <li class="mr-1"><a class="btn-ctm-space btn-dec " href="/Emp_Holiday"><span class="lnr lnr-apartment pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Public Holidays</span></a></li>
                                            <li class="mr-1"><a class="btn-ctm-space btn-dec" href="/Emp_LeaveHistory"><span class="lnr lnr-briefcase pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Leave History</span></a></li>
                                            <li class="mr-1"><a class="btn-ctm-space btn-dec" href="/Emp_Setting"><span class="lnr lnr-cog pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Settings</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </aside>
                        </div>

                        <div class="col-xl-9 col-lg-8 col-md-12">
                            <div class="row">
                                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="card dash-widget ctm-border-radius shadow-sm">
                                        <div class="card-body">
                                            <div class="card-icon bg-primary">
                                                <i class="fa fa-info-circle" aria-hidden="true"></i>
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
                                                <i class="fa fa-info-circle" aria-hidden="true"></i>
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
                                                <i class="fa fa-info-circle" aria-hidden="true"></i>
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
                                                <i class="fa fa-info-circle" aria-hidden="true"></i>
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
                            <div class="row">
                                <div class="col-md-6 col-xl-12 col-lg-6 d-flex">
                                    <div class="card ctm-border-radius shadow-sm flex-fill">
                                        <div class="card-header">
                                            <h4 class="card-title mb-0">
                                                Employee Details
                                        {/* <a href="javascript:void(0)" class="float-right text-primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a> */}
                                            </h4>
                                        </div>

                                        <table class="table table-borderless leave-action-table">

                                            <tbody>
                                                <tr>
                                                    <td width="18%" className="bold-let">Employee Name :</td>
                                                    <td width="21%" className="text-primary bold-let">Hritik Roshan</td>
                                                    <td width="13%" className="bold-let">Emp ID : </td>
                                                    <td width="22%">EMP254584</td>
                                                    <td width="14%" className="bold-let">Gender : </td>
                                                    <td width="15%">Male</td>
                                                </tr>

                                                <tr>
                                                    <td width="16%" className="bold-let">Emp Email ID : </td>
                                                    <td>lavan@gmail.com</td>
                                                    <td className="bold-let">Contact No : </td>
                                                    <td colSpan="3">0755517771</td>
                                                </tr>

                                                <tr>
                                                    <td width="16%" className="bold-let">Leave Type : </td>
                                                    <td>Casual Leave</td>
                                                    <td className="bold-let">Leave Date : </td>
                                                    <td>2020.04.02 to 2020.04.04</td>
                                                    <td className="bold-let">Posting Date : </td>
                                                    <td>2020.04.01</td>
                                                </tr>

                                                <tr>
                                                    <td className="bold-let">Employee Leave Description : </td>
                                                    <td colspan="5">Writers write descriptive paragraphs because their purpose is to describe something. Their point is that something is beautiful or disgusting or strangely intriguing.</td>
                                                </tr>
                                                <tr>
                                                    <td className="bold-let">Documents : </td>
                                                       <td colSpan = "4"><i class="fa fa-file-pdf-o fa-lg text-danger" aria-hidden="true"></i>&nbsp;<span>Medical certificate</span></td>
                                                </tr>
                                                <tr>
                                                    <td className="bold-let">Comments : </td>
                                                    <td colSpan = "3"> <textarea class="form-control" rows="3" /></td>
                                                    <td colSpan = "2"><a href="" class="btn btn-theme send-btn btn-primary ctm-border-radius mt-3 ml-4">Approve</a>
                                                    <span className = "rej-center">Decline</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div class="text-center">
                                            {/* <a href="" class="btn btn-theme send-btn btn-primary ctm-border-radius mt-1 mr-5">Approve</a> */}
                                            {/* <a href="" class="btn cancel-leave text-white ctm-border-radius mt-1" data-toggle="modal" data-target="#add-information">Reject</a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Other Leave */}
                            <div class="row">
                                <div class="col-md-6 col-xl-6 col-lg-6 d-flex">
                                    <div class="card ctm-border-radius shadow-sm flex-fill">
                                        <div class="card-header">
                                            <h6 class="card-title mb-0">
                                                Leave requests during same time
                                            </h6>
                                        </div>
                                        <div class="card-body" style={{ height: "7rem" }}>
                                            <span><i class="fa fa-calendar fa-size" aria-hidden="true"></i></span>
                                        </div>
                                        <h6 className="text-center font-weight-normal">No leave requests during<br />  this period</h6>
                                        <p className="font-italic text-center  small">All employees leave requests. will be shown here.</p>


                                    </div>
                                </div>

                                <div class="col-md-6 col-xl-6 col-lg-6 d-flex">
                                    <div class="card ctm-border-radius shadow-sm flex-fill">
                                        <div class="card-header">
                                            <h6 class="card-title mb-0">
                                                Events happening during this period
                                            </h6>
                                        </div>
                                        <div class="card-body" style={{ height: "7rem" }}>
                                            <span><i class="fa fa-calendar fa-size" aria-hidden="true"></i></span>
                                        </div>
                                        <h6 className="text-center font-weight-normal">No events happening<br /> during this period</h6>
                                        <p className="font-italic text-center  small">Public holidays, shifts etc. will be shown here.</p>
                                    </div>
                                </div>
                            </div>

                            {/* End of other leave */}
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="add-information" role="document">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body style-add-modal">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title mb-3">Enter the Reson</h4>
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="form-group mb-0">
                                        <label>Reason</label>
                                        <textarea class="form-control" rows="5" />
                                    </div>
                                </div>
                            </div>
                            <button type="button" class="btn apply-leave text-white ctm-border-radius float-right mt-2 ml-3" data-dismiss="modal">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
