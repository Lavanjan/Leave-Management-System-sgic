import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import manager_img from './../assets/images/manager/manager.png'
import Accounts_Table from '../assets/tables/Accounts_Table'
import Development_Table from './../assets/tables/Development_Table'
import HR_Table from './../assets/tables/HR_Table'
import QA_Table from './../assets/tables/QA_Tables'
import All_table from './../assets/tables/All_Table'


function HR_ManageEmp() {
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
                                                            <li class="breadcrumb-item d-inline-block"><a href="/" class="text-dark">SGIC</a></li>
                                                            <li class="breadcrumb-item d-inline-block active">Human Resource</li>
                                                        </ol>
                                                        <h4 class="text-dark">Manage Employees</h4>
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
                                                <li class="mr-1 "><a class="btn-ctm-space btn-dec" href="/leave_process"><span class="lnr lnr-hourglass pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Leave Process</span></a></li>
                                                <li class="mr-1 "><a class="btn-ctm-space btn-dec" href="/Emp_Dashboard"><span class="lnr lnr-home pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Leave Allocaion</span></a></li>
                                                <li class="mr-1 active"><a class="btn-ctm-space text-white calen-btn" href="/manage_employee"><span class="lnr lnr-users pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Manage Employee</span></a></li>
                                                <li class="mr-1"><a class="btn-ctm-space btn-dec" href="/HR_details"><span class="lnr lnr-list pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Details</span></a></li>
                                                <li class="mr-1"><a class="btn-ctm-space btn-dec " href="/Emp_Holiday"><span class="lnr lnr-apartment pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Public Holidays</span></a></li>
                                                <li class="mr-1"><a class="btn-ctm-space btn-dec" href="/HR_leave-history"><span class="lnr lnr-briefcase pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Leave History</span></a></li>
                                                <li class="mr-1"><a class="btn-ctm-space btn-dec" href="/HR_Settings"><span class="lnr lnr-cog pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Settings</span></a></li>
                                            </ul>
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
                                                    <h4 class="card-title font-weight-bold">Development</h4>
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
                                                    <h4 class="card-title font-weight-bold">QA</h4>
                                                </div>
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-sm-6 col-12">
                                    <div class="card dash-widget ctm-border-radius shadow-sm">
                                        <Link to={`${url}/accounts_table`}>
                                            <div class="card-body">
                                                <div className="card-icon bg-danger">
                                                    <i class="fa fa-chart-line" aria-hidden="true"></i>
                                                </div>
                                                <div class="card-right">
                                                    <h4 class="card-title font-weight-bold">Accounts</h4>
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
                                                    <h4 class="card-title font-weight-bold">HR</h4>
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
                                            <All_table />
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
                                        <Route path={`${path}/accounts_table`}>
                                            <Accounts_Table />
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

export default HR_ManageEmp