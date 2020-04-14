import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route, Link, useParams, useRouteMatch, Router } from 'react-router-dom'

import tiger from './../assets/images/Employees/Leave_Employees/tiger.png'
import hritik from './../assets/images/Employees/Leave_Employees/hritik.png'

import Apply_Leave from './../assets/tables/Apply_Leave'
import Leave_History from './../assets/tables/Leave_History'
import Leave_Setting from './../assets/tables/Leave_Setting'
import Setting_Page from './../assets/tables/Setting_Landpage'
import logo from './../assets/images/logo_change.png'

import 'bootstrap/dist/css/bootstrap.min.css'

import './../assets/css/style.css'
import Setting_Landpage from './../assets/tables/Setting_Landpage'

function Settings() {
	let { path, url } = useRouteMatch();
	return (
		<Fragment>
			<BrowserRouter>
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
																<li class="breadcrumb-item d-inline-block active">Settings</li>
															</ol>
															<h4 class="text-dark">Setting</h4>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="quicklink-sidebar-menu ctm-border-radius shadow-sm bg-white card">
										<div class="card-body">
										<ul class="list-group">
                                                <li class="mr-1 active"><a class="btn-ctm-space text-white calen-btn" href="/settings"><span class="lnr lnr-home pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">System</span></a></li>
                                                <li class="mr-1"><a class="btn-ctm-space btn-dec" href="/leave_setting"><span class="lnr lnr-unlink pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Leave Setting</span></a></li>
                                                <li class="mr-1"><a class="btn-ctm-space btn-dec " href="/Emp_Holiday"><span class="lnr lnr-apartment pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Calendar</span></a></li>
                                            </ul>
										</div>
									</div>
								</aside>
							</div>


							<div class="col-xl-9 col-lg-8  col-md-12">
							<div class="row">
			<div class="col-md-6 d-flex">
				<div class="card ctm-border-radius shadow-sm company-logo flex-fill">
					<div class="card-header">
						<h4 class="card-title mb-0">Company Logo</h4>
					</div>
					<div class="card-body">
						<form>
							<div class="row">
								<div class="col-12">
									<div class="avatar-upload">
										<div class="avatar-edit">
											<input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
											<label for="imageUpload"></label>
										</div>
										<div class="avatar-preview">
											<img src={logo} />
											{/* <div id="imagePreview"> */}
											{/* </div> */}
										</div>
									</div>
								</div>

							</div>
						</form>
					</div>
				</div>
			</div>
			<div class="col-lg-6 d-flex">
				<div class="card flex-fill ctm-border-radius shadow-sm">
					<div class="card-header">
						<h4 class="card-title mb-0">Change Password</h4>
						<span class="ctm-text-sm">Your password needs to be at least 8 characters long.</span>
					</div>
					<div class="card-body">
						<div class="form-group">
							<input type="password" class="form-control" placeholder="Current Password" />
						</div>
						<div class="form-group">
							<input type="password" class="form-control" placeholder="New Password" id="pwd" />
						</div>
						<div class="form-group">
							<input type="password" class="form-control" placeholder="Repeat Password" />
						</div>
						<div class="text-center">
							<a href="javascript:void(0)" class="btn btn-theme ctm-border-radius text-white apply-leave-btn text-center">Change My Password</a>
						</div>
					</div>
				</div>
			</div>
		</div>
							</div>
						
							
							
							
						</div>
					</div>
				</div>
				<div class="modal fade" id="delete">
					<div class="modal-dialog modal-dialog-centered">
						<div class="modal-content">
							<div class="modal-body">
								<button type="button" class="close" data-dismiss="modal">&times;</button>
								<h4 class="modal-title mb-4">Are You Sure Want to Delete?</h4>
								<button type="button" class="btn btn-danger text-white text-center ctm-border-radius mb-2 mr-3" data-dismiss="modal">Cancel</button>
								<button type="button" class="btn btn-theme button-1 text-white text-center ctm-border-radius mb-2" data-dismiss="modal">Delete</button>
							</div>
						</div>
					</div>
				</div>
			</BrowserRouter>
		</Fragment>
	);
}

export default Settings