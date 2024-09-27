import React, { Fragment } from 'react'

import leave_emp from './../assets/images/Employees/Leave_Employees/hritik.png'

import './../assets/css/style.css'

export default function Leave_Action() {
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
                                                            <li class="breadcrumb-item d-inline-block"><a href="index.html" class="text-dark">Home</a></li>
                                                            <li class="breadcrumb-item d-inline-block active">Leave</li>
                                                        </ol>
                                                        <h4 class="text-dark">Action</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="user-card card shadow-sm bg-white text-center ctm-border-radius">
                                    <div class="user-info card-body">
                                        <div class="user-avatar mb-4">
                                            <img src={leave_emp} alt="User Image" class="img-fluid rounded-circle" width="100" />
                                        </div>
                                        <div class="user-details">
                                            <h4><b>Mr. Hritik Roshan</b></h4>
                                            <p>Software Engineer</p>
                                            <i class="fa fa-star text-primary"></i>&nbsp;
                                        <i class="fa fa-star text-primary"></i>&nbsp;
                                        <i class="fa fa-star text-primary"></i>&nbsp;
                                        <i class="fa fa-star text-primary"></i>&nbsp;
                                        <i class="fa fa-star"></i>&nbsp;
									</div>
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

                                        <table class="table table-hover leave-action-table">

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
                                                    <td className="bold-let">Leave Status : </td>
                                                    <td colspan="5" className="text-warning font-weight-bold">Requested</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div class="text-center">
                                            <a href="" class="btn btn-theme apply-leave text-white ctm-border-radius mt-1 mr-5">Accept</a>
                                            <a href="" class="btn cancel-leave text-white ctm-border-radius mt-1" data-toggle="modal" data-target="#add-information">Reject</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
