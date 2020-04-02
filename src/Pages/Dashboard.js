import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import manager_img from './../assets/images/manager/manager.png'

function Dashboard() {
	return (
		<div class="page-wrapper">
			<div class="container-fluid">
				<div class="row">
					<div class="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
						<aside class="sidebar sidebar-user">
							<div class="card ctm-border-radius shadow-sm">
								<div class="card-body py-4">
									<div class="row">
										<div class="col-md-12 mr-auto text-left">
											<div class="custom-search input-group">
												<div class="custom-breadcrumb">
													<ol class="breadcrumb no-bg-color d-inline-block p-0 m-0 mb-2">
														<li class="breadcrumb-item d-inline-block"><a href="/" class="text-dark">Home</a></li>
														<li class="breadcrumb-item d-inline-block active">Dashboard</li>
													</ol>
													<h4 class="text-dark">Manager Dashboard</h4>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="user-card card shadow-sm bg-white text-center ctm-border-radius">
								<div class="user-info card-body">
									<div class="user-avatar mb-4">
										<img src={manager_img} alt="User Avatar" class="img-fluid rounded-circle" width="100" />
									</div>
									<div class="user-details">
										<h4><b>Welcome Manager</b></h4>
										<p>Sun, 29 Nov 2019</p>
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
										<h4 class="card-title mb-0">Leave Request</h4>
									</div>
									<div class="card-body">
										<table class="table table-bordered">
											<thead>
												<tr>
													<th width="5%" scope="col">No</th>
													<th width="20%" scope="col">Employee Name</th>
													<th width="13%" scope="col">Leave Type</th>
													<th width="17%" scope="col">From-To</th>
													<th width="8%" scope="col">Status</th>
													<th width="7%" scope="col">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th scope="row">1</th>
													<td>Ravi Lavanjan</td>
													<td>Casual Leave</td>
													<td>2020.04.03 - 2020.04.05</td>
													<td>Approved</td>
													<td className="text-center">
														<button type="button" class="btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;Action</button>
													</td>
												</tr>
												<tr>
													<th scope="row">2</th>
													<td>Linges Sivapiriyan</td>
													<td>Sick Leave</td>
													<td>2020.04.06 - 2020.04.08</td>
													<td>Approved</td>
													<td className="text-center">
														<button type="button" class="btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;Action</button>
													</td>
												</tr>
												<tr>
													<th scope="row">3</th>
													<td>Jeya Sathurya</td>
													<td>Half Day</td>
													<td>2020.04.08</td>
													<td>Waiting</td>
													<td className="text-center">
														<button type="button" class="btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;Action</button>
													</td>
												</tr>
												<tr>
													<th scope="row">4</th>
													<td>Sinthu Wamsan</td>
													<td>Sick Leave</td>
													<td>2020.04.08 - 2020.04.09</td>
													<td>Approved</td>
													<td className="text-center">
														<button type="button" class="btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;Action</button>
													</td>
												</tr>
												<tr></tr>

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


	);
}

export default Dashboard