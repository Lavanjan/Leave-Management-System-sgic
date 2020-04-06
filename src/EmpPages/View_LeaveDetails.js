import React, { Fragment } from 'react'

import hritik from './../assets/images/Employees/Leave_Employees/hritik.png'


export default function View_LeaveDetails() {
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
                                           <li class="mr-1 "><a href="Emp_profile" class="btn-ctm-space btn-dec "><span class="lnr lnr-user pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Profile</span></a></li>
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
                                        Leave Details
                                        {/* <a href="javascript:void(0)" class="float-right text-primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a> */}
                                    </h4>
                                </div>
                                
                                <table class="table table-hover leave-action-table">
        
                                    <tbody>
                                        <tr>
                                        <td width = "18%" className = "bold-let">Employee Name :</td>
                                        <td width = "21%" className = "text-primary bold-let">Raveen Rajah</td>
                                        <td width = "13%" className = "bold-let">Emp ID : </td>
                                        <td width = "22%">EMP358584</td>
                                        <td width = "14%" className = "bold-let">Gender : </td>
                                        <td width = "15%">Male</td>
                                        </tr>

                                        <tr>
                                        <td width = "16%" className = "bold-let">Emp Email ID : </td>
                                        <td>Raveenrajah@gmail.com</td>
                                        <td className = "bold-let">Contact No : </td>
                                        <td colSpan = "3">0758557861</td>
                                        </tr>

                                        <tr>
                                        <td width = "16%" className = "bold-let">Leave Type : </td>
                                        <td>Casual Leave</td>
                                        <td className = "bold-let">Leave Date : </td>
                                        <td>2020.03.02 to 2020.03.03</td>
                                        <td className = "bold-let">Posting Date : </td>
                                        <td>2020.03.01</td>
                                        </tr>

                                        <tr>
                                        <td className = "bold-let">Employee Leave Description : </td>
                                        <td colspan="5">Writers write descriptive paragraphs because their purpose is to describe something. Their point is that something is beautiful or disgusting or strangely intriguing.</td>
                                        </tr>
                                        <tr>
                                        <td className = "bold-let">Leave Status : </td>
                                        <td colspan="5" className = "text-success font-weight-bold">Approved</td>
                                        </tr>
                                        <tr>
                                        <td className = "bold-let">Manager Reply Description : </td>
                                        <td colspan="5">Writers write descriptive paragraphs because their purpose is to describe something. Their point is that something is beautiful or disgusting or strangely intriguing.</td>
                                        </tr>
                                        <tr>
                                        <td className = "bold-let">Manager Action Taken Date : </td>
                                        <td colspan="5">2020.03.01 &nbsp;13:45:19</td>
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
          
        </Fragment>
    )
}
