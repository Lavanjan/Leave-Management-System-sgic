import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import manager_img from './../assets/images/manager/manager.png'
import Accounting_Table from './../assets/tables/Accounting_Table'
import Development_Table from './../assets/tables/Development_Table'
import HR_Table from './../assets/tables/HR_Table'
import QA_Table from './../assets/tables/QA_Tables'


function Department() {
	let { path, url } = useRouteMatch();
	return (
		<Router>
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
															<li class="breadcrumb-item d-inline-block active">Department</li>
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
										<Link to={`${url}/development_table`}>
											<div class="card-body">
												<div class="card-icon bg-primary">
													<i class="fa fa-laptop-code" aria-hidden="true"></i>
												</div>
												<div class="card-right">
													<h4 class="card-title">Development</h4>
												</div>
											</div>
										</Link>
									</div>
								</div>
								<div class="col-xl-3 col-lg-6 col-sm-6 col-12">
									<div class="card dash-widget ctm-border-radius shadow-sm">
										<Link to={`${url}/qa_table`}>
											<div class="card-body">
												<div class="card-icon bg-warning">
													<i class="fa fa-stethoscope" aria-hidden="true"></i>
												</div>
												<div class="card-right">
													<h4 class="card-title">QA</h4>
												</div>
											</div>
										</Link>

									</div>
								</div>
								<div class="col-xl-3 col-lg-6 col-sm-6 col-12">
									<div class="card dash-widget ctm-border-radius shadow-sm">
										<Link to={`${url}/accounting_table`}>
											<div class="card-body">
												<div className="card-icon bg-danger">
													<i class="fa fa-chart-line" aria-hidden="true"></i>
												</div>
												<div class="card-right">
													<h4 class="card-title">Accounts</h4>
												</div>
											</div>
										</Link>
									</div>
								</div>

								<div class="col-xl-3 col-lg-6 col-sm-6 col-12">
									<div class="card dash-widget ctm-border-radius shadow-sm">
										<Link to={`${url}/hr_table`}>
											<div class="card-body">
												<div class="card-icon bg-success">
													<i class="fa fa-users" aria-hidden="true"></i>
												</div>
												<div class="card-right">
													<h4 class="card-title">HR</h4>
												</div>
											</div>
										</Link>
									</div>
								</div>


							</div>

							<div class="row">
								<div class="col-md-6 col-xl-12 col-lg-6 d-flex">
									<Switch>
										<Route exact path={path}>
											<h3>Please select a topic.</h3>
										</Route>
										<Route path={`${path}/development_table`}>
											<Development_Table />
										</Route>
										<Route path={`${path}/qa_table`}>
											<QA_Table />
										</Route>
										<Route path={`${path}/hr_table`}>
											<HR_Table />
										</Route>
										<Route path={`${path}/accounting_table`}>
											<Accounting_Table />
										</Route>
									</Switch>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</Router>
	);
}

export default Department