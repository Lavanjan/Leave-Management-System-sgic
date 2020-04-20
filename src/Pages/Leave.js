import React from 'react'
import { BrowserRouter, Switch, Route, Link, useParams, useRouteMatch, Router } from 'react-router-dom'

import tiger from './../assets/images/Employees/Leave_Employees/tiger.png'
import hritik from './../assets/images/Employees/Leave_Employees/hritik.png'

import Apply_Leave from './../assets/tables/Apply_Leave'
import Leave_History from './../assets/tables/Leave_History'
import './../assets/css/style.css'

function Leave() {
	let { path, url } = useRouteMatch();
	return (
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
															<li class="breadcrumb-item d-inline-block active">Leave</li>
														</ol>
														<h4 class="text-dark">Leave</h4>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="quicklink-sidebar-menu ctm-border-radius shadow-sm bg-white card">
									<div class="card-body">
										<ul class="list-group">
											<Link to={`${url}/`}>
												<li class="list-group-item text-center apply-leave-btn text-white">Apply Leave</li>
											</Link>
											<Link to={`${url}/leave-history`}>
												<li class="list-group-item text-center button-6"><a class="text-dark">Leave History</a></li>
											</Link>
											<Link to={`${url}/leave-settings`}>
												<li class="list-group-item text-center button-6"><a class="text-dark">Leave Settings</a></li>
											</Link>
										</ul>
									</div>
								</div>

								<div class="card shadow-sm ctm-border-radius">
									<div class="card-body">
										<span class="avatar" data-toggle="tooltip" data-placement="top" title="Jenni Sims"><img src={tiger} alt="Images" class="img-fluid" />
										</span><span class="ml-4">Tiger Shroff is working from home today.</span>
									</div>
								</div>
								<div class="card shadow-sm ctm-border-radius">
									<div class="card-body">
										<span class="avatar" data-toggle="tooltip" data-placement="top" title="Jenni Sims"><img src={hritik} alt="Images" class="img-fluid" />
										</span><span class="ml-4">Hritik Roshan is away today.</span>
									</div>
								</div>


							</aside>
						</div>


						<div class="col-xl-9 col-lg-8 col-md-12">
							
							<div class="row">
								<div class="col-md-12">
									<Switch>
										<Route exact path={`${path}/`}>
											<Apply_Leave />
										</Route>
										<Route path={`${path}/leave-history`}>
											<Leave_History />
										</Route>
										
									</Switch>
									<div class="card ctm-border-radius shadow-sm">
										<div class="card-header">
											<h4 class="card-title mb-0">Apply Leaves</h4>
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
													<div class="col-sm-6 leave-col">
														<div class="form-group">
															<label>Remaining Leaves</label>
															<input type="text" class="form-control" placeholder="10" disabled/>
														</div>
													</div>
												</div>
												<div class="row">
													<div class="col-sm-6">
														<div class="form-group">
															<label>From</label>
															<input type="text" class="form-control datetimepicker"/>
														</div>
													</div>
													<div class="col-sm-6 leave-col">
														<div class="form-group">
															<label>To</label>
															<input type="text" class="form-control datetimepicker"/>
														</div>
													</div>
												</div>
												<div class="row">
													
												</div>
												<div class="row">
													<div class="col-sm-12">
														<div class="form-group mb-0">
															<label>Reason</label>
															<textarea class="form-control" rows = "4" />
														</div>
													</div>
												</div>
												<div class="text-center">
													<a href="" class="btn btn-theme apply-leave text-white ctm-border-radius mt-4 mr-5">Apply</a>
													<a href="" class="btn cancel-leave text-white ctm-border-radius mt-4">Cancel</a>
												</div>
											</form>
										</div>
									</div>
								</div>
								<div class="col-md-12">
									<div class="card ctm-border-radius shadow-sm">
										<div class="card-header">
											<h4 class="card-title mb-0">Leave Details</h4>
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default Leave