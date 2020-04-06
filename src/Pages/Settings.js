import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route, Link, useParams, useRouteMatch, Router } from 'react-router-dom'

import tiger from './../assets/images/Employees/Leave_Employees/tiger.png'
import hritik from './../assets/images/Employees/Leave_Employees/hritik.png'

import Apply_Leave from './../assets/tables/Apply_Leave'
import Leave_History from './../assets/tables/Leave_History'
import Leave_Setting from './../assets/tables/Leave_Setting'
import Setting_Page from './../assets/tables/Setting_Landpage'

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
											<Link to={`${url}`}>
													<li class="list-group-item text-center apply-leave-btn text-white">Settings</li>
												</Link><br></br>
												<Link to={`${url}/leave_settings`}>
													<li class="list-group-item text-center apply-leave-btn text-white">Leave Settings</li>
												</Link>
												{/* <Link to={`${url}/manager_leave_history`}>
												<li class="list-group-item text-center button-6"><a class="text-dark">Your Leave History</a></li>
											</Link>
											<Link to={`${url}/leave-history`}>
												<li class="list-group-item text-center button-6"><a class="text-dark">Employees Leave History</a></li>
											</Link> */}
											</ul>
										</div>
									</div>
								</aside>
							</div>


							<div class="col-xl-9 col-lg-8  col-md-12">

								<Switch>
								<Route exact path={`${path}`}>
										<Setting_Landpage />
									</Route>
									<Route exact path={`${path}/leave_settings`}>
										<Leave_Setting />
									</Route>
									{/* <Route path={`${path}/leave-history`}>
										<Leave_History />
									</Route> */}

								</Switch>
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