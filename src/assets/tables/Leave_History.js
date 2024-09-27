import React, { Fragment } from 'react'

import './../css/style.css'


export default function Leave_History() {
    return (
        <Fragment>
            <div class="card shadow-sm ctm-border-radius">
                <div class="card-body align-center">
                    <ul class="nav his-pills" id="pills-tab" role="tablist">
                        <li class="nav-item mr-md-1">
                            <a class="btn his-link active " id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"><i class="fa fa-user" aria-hidden="true"></i>&nbsp;Personal Leave History</a>
                        </li>
                        <li class="nav-item">
                            <a class="btn his-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false"><i class="fa fa-users" aria-hidden="true"></i>&nbsp;Office Employees Leave History</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="card shadow-sm ctm-border-radius">
                <div class="card-body align-center">
                    <div class="row filter-row">
                        <div class="col-sm-6 col-md-6 col-lg-6 col-xl-3">
                            <div class="form-group mb-xl-0 mb-md-2 mb-sm-2">
                                <select class="form-control select">
                                    <option selected>Start Date</option>
                                    <option>Date Of Birth</option>
                                    <option>Created At</option>
                                    <option>Leaving Date</option>
                                    <option>Visa Expiry Date</option>
                                </select>

                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-6 col-xl-3">
                            <div class="form-group mb-lg-0 mb-md-2 mb-sm-2">
                                <input type="text" class="form-control datetimepicker" placeholder="From" />
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-6 col-xl-3">
                            <div class="form-group mb-lg-0 mb-md-0 mb-sm-0">
                                <input type="text" class="form-control datetimepicker" placeholder="To" />
                            </div>
                        </div>

                        <div class="col-sm-6 col-md-6 col-lg-6 col-xl-3">
                            <a href="#" class="btn btn-theme apply-leave-btn text-white btn-block p-2 mb-md-0 mb-sm-0 mb-lg-0 mb-0"> Apply Filter </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card shadow-sm ctm-border-radius">
                <div class="card-body align-center">
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div class="card-header">
                                <h4 class="card-title mb-0">Your Leave History</h4>
                            </div>
                            <div class="card-body">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th width="5%" scope="col">No</th>
                                            <th width="13%" scope="col">Leave Type</th>
                                            <th width="17%" scope="col">From-To</th>
                                            <th width="8%" scope="col">Status</th>
                                            <th width="7%" scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td scope="row">1</td>
                                            <td>Casual Leave</td>
                                            <td>2020.04.03 - 2020.04.05</td>
                                            <td className="text-info text-center">Requested</td>
                                            <td className="text-center">
                                                <a href="/leave_action" class="btn text-white btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;View</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">2</td>
                                            <td>Sick Leave</td>
                                            <td>2020.04.06 - 2020.04.08</td>
                                            <td className="text-info text-center">Requested</td>
                                            <td className="text-center">
                                                <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;View</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">3</td>
                                            <td>Half Day</td>
                                            <td>2020.04.08</td>
                                            <td className="text-success text-center">Approved</td>
                                            <td className="text-center">
                                                <a href="/leave_viewall" class="btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;View</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">4</td>
                                            <td>Sick Leave</td>
                                            <td>2020.04.08 - 2020.04.09</td>
                                            <td className="text-success text-center">Approved</td>
                                            <td className="text-center">
                                                <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;View</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">5</td>
                                            <td>Sick Leave</td>
                                            <td>2020.04.08 - 2020.04.09</td>
                                            <td className="dark-yellow text-center">Waiting</td>
                                            <td className="text-center">
                                                <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;View</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">6</td>
                                            <td>Sick Leave</td>
                                            <td>2020.04.08 - 2020.04.09</td>
                                            <td className="dark-yellow text-center">Waiting</td>
                                            <td className="text-center">
                                                <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;View</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">7</td>
                                            <td>Sick Leave</td>
                                            <td>2020.04.08 - 2020.04.09</td>
                                            <td className="text-danger text-center">Rejectesd</td>
                                            <td className="text-center">
                                                <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;View</button>
                                            </td>
                                        </tr>
                                        <tr></tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div class="card-header">
                                <h4 class="card-title mb-0">Employees Leave History</h4>
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
                                            <td scope="row">1</td>
                                            <td>Hritik Roshan</td>
                                            <td>Casual Leave</td>
                                            <td>2020.04.03 - 2020.04.05</td>
                                            <td className="text-info text-center">Requested</td>
                                            <td className="text-center">
                                                <a href="/leave_action" class="btn text-white btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;View</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">2</td>
                                            <td>Tiger Shroff</td>
                                            <td>Sick Leave</td>
                                            <td>2020.04.06 - 2020.04.08</td>
                                            <td className="text-info text-center">Requested</td>
                                            <td className="text-center">
                                                <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;View</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">3</td>
                                            <td>John Abraham</td>
                                            <td>Half Day</td>
                                            <td>2020.04.08</td>
                                            <td className="text-success text-center">Approved</td>
                                            <td className="text-center">
                                                <a href="/leave_viewall" class="btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;View</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">4</td>
                                            <td>Vidyut Yamwal</td>
                                            <td>Sick Leave</td>
                                            <td>2020.04.08 - 2020.04.09</td>
                                            <td className="text-success text-center">Approved</td>
                                            <td className="text-center">
                                                <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;View</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">5</td>
                                            <td>Ranbir kapoor</td>
                                            <td>Sick Leave</td>
                                            <td>2020.04.08 - 2020.04.09</td>
                                            <td className="dark-yellow text-center">Waiting</td>
                                            <td className="text-center">
                                                <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;View</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">6</td>
                                            <td>Raveer Singh</td>
                                            <td>Sick Leave</td>
                                            <td>2020.04.08 - 2020.04.09</td>
                                            <td className="dark-yellow text-center">Waiting</td>
                                            <td className="text-center">
                                                <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;View</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">7</td>
                                            <td>Shahid Kapoor</td>
                                            <td>Sick Leave</td>
                                            <td>2020.04.08 - 2020.04.09</td>
                                            <td className="text-danger text-center">Rejectesd</td>
                                            <td className="text-center">
                                                <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;View</button>
                                            </td>
                                        </tr>
                                        <tr></tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="text-center mt-3">
                            <a href="javascript:void(0)" class="btn btn-theme apply-leave-btn ctm-border-radius text-white">Download Report</a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
