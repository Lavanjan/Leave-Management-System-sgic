import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Accounts_Table from '../assets/tables/Accounts_Table copy'
import Development_Table from './../assets/tables/Development_Table copy'
import HR_Table from './../assets/tables/HR_Table copy'
import QA_Table from './../assets/tables/QA_Tables copy'


function LeaveAllocation() {
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
                                                            <li class="breadcrumb-item d-inline-block active">Manage Leave</li>
                                                        </ol>
                                                        <h4 class="text-dark">Leave Allocaion</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="quicklink-sidebar-menu ctm-border-radius shadow-sm bg-white card">
                                        <div class="card-body">
                                            <ul class="list-group">
                                            <li class="mr-1 "><a class="btn-ctm-space btn-dec" href="/leave_process"><span class="lnr lnr-hourglass pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Manage Leave</span></a></li>
                                            <li class="mr-1 "><a class="btn-ctm-space btn-dec" href="/leave_allocation"><span class="lnr lnr-home pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Leave Allocaion</span></a></li>
                                            <li class="mr-1 active"><a class="btn-ctm-space btn-dec text-white calen-btn" href="/HR_leave-history"><span class="lnr lnr-briefcase pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Emplyee Leave History</span></a></li>
                                            <li class="mr-1"><a class="btn-ctm-space btn-dec" href="/leave_setting"><span class="lnr lnr-cog pr-0 pr-lg-2"></span><span class="d-none d-lg-inline">Leave Settings</span></a></li>
                 
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
                                            <Development_Table/>
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

export default LeaveAllocation