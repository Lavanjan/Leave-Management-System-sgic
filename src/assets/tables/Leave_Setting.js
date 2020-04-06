import React, { Fragment, useState } from 'react'

import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

import './../css/style.css'

export default function Leave_Setting() {
    return (
        <Fragment>
            <div class="row">
                <div class="col-md-6 d-flex">
                    <div class="card flex-fill ctm-border-radius shadow-sm">
                        <div class="card-header">
                            <h4 class="card-title mb-0">
                                <span>Working Week</span><a href="" class="float-right text-primary" data-toggle="modal" data-target="#addWorkWeek"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a>
                            </h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12">
                                    <span className="badge cus-badge badge-color">Mon</span>
                                    <span class="badge cus-badge badge-color">Tue</span>
                                    <span class="badge cus-badge badge-color">Wed</span>
                                    <span class="badge cus-badge badge-color">Thu</span>
                                    <span class="badge cus-badge badge-color">Fri</span>
                                    <span class="badge cus-badge">Sat</span>
                                    <span class="badge cus-badge">Sun</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 d-flex">
                    <div class="card flex-fill ctm-border-radius shadow-sm">
                        <div class="card-header">
                            <h4 class="card-title mb-0">
                                <span>Manage Public Holidays</span><a href="" class="float-right text-primary" data-toggle="modal" data-target="#addholiday"><i class="fa fa-calendar" aria-hidden="true"></i>
                                </a>
                                <a href="" class="float-right text-primary" data-toggle="modal" data-target="#addholiday"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                </a>&nbsp;&nbsp;&nbsp;
                            </h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12">
                                    <span className="badge cus-badge badge-color">12</span>
                                    <span class="badge cus-badge badge-color">16</span>
                                    <span class="badge cus-badge badge-color">18</span>
                                    <span class="badge cus-badge badge-color">20</span>                                                                 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="row">
                <div class="col-md-12 d-flex">
                    <div class="card flex-fill ctm-border-radius shadow-sm">
                        <div class="card-header">
                            <h4 class="card-title mb-0">
                                <span>Manage Leave Types</span><a href="" class="float-right text-primary" data-toggle="modal" data-target="#addLeaveType"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a>
                            </h4>
                        </div>

                        <table class="table custom-table table-borderless table-hover">
                            <thead>
                                <tr>
                                    <th width="60%">Leave Type Name</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Casual Leave</td>

                                    <td>
                                        <div class="dropdown action-label drop-active">
                                            <a href="javascript:void(0)" class="btn btn-white btn-sm dropdown-toggle" data-toggle="dropdown"> Enabled <i class="caret"></i></a>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="">Enabled</a>
                                                <a class="dropdown-item" href="">Disabled</a>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="table-action">

                                            <a href="javascript:void(0);" class="btn btn-sm btn-outline-danger" data-toggle="modal" data-target="#delete">
                                                <span class="lnr lnr-trash"></span> Delete
																		</a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Sick Leave</td>
                                    <td>
                                        <div class="dropdown action-label drop-active">
                                            <a href="javascript:void(0)" class="btn btn-white btn-sm dropdown-toggle" data-toggle="dropdown"> Enabled <i class="caret"></i></a>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="">Enabled</a>
                                                <a class="dropdown-item" href="">Disabled</a>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="table-action">

                                            <a href="javascript:void(0);" class="btn btn-sm btn-outline-danger" data-toggle="modal" data-target="#delete">
                                                <span class="lnr lnr-trash"></span> Delete
																		</a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Half Day</td>

                                    <td>
                                        <div class="dropdown action-label drop-active">
                                            <a href="javascript:void(0)" class="btn btn-white btn-sm dropdown-toggle" data-toggle="dropdown"> Disabled <i class="caret"></i></a>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="">Enabled</a>
                                                <a class="dropdown-item" href="">Disabled</a>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="table-action">

                                            <a href="javascript:void(0);" class="btn btn-sm btn-outline-danger" data-toggle="modal" data-target="#delete">
                                                <span class="lnr lnr-trash"></span> Delete
																		</a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Annual Leave</td>

                                    <td>
                                        <div class="dropdown action-label drop-active">
                                            <a href="javascript:void(0)" class="btn btn-white btn-sm dropdown-toggle" data-toggle="dropdown"> Enabled <i class="caret"></i></a>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="">Enabled</a>
                                                <a class="dropdown-item" href=""> Disabled</a>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="table-action">

                                            <a href="javascript:void(0);" class="btn btn-sm btn-outline-danger" data-toggle="modal" data-target="#delete">
                                                <span class="lnr lnr-trash"></span> Delete
																		</a>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            {/* Add Work Week Modal */}
            <div class="modal fade" id="addWorkWeek">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body">
                            <form>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title mb-3">Edit Working Week</h4>
                                <div class=" custom-control custom-checkbox mb-3 d-inline-block mr-3">
                                    <input type="checkbox" id="Mon" class="custom-control-input" checked />
                                    <label class="mb-0 custom-control-label" for="Mon">Mon</label>
                                </div>
                                <div class=" custom-control custom-checkbox mb-3 d-inline-block mr-3">
                                    <input type="checkbox" id="Tue" class="custom-control-input" checked />
                                    <label class="mb-0 custom-control-label" for="Tue">Tue</label>
                                </div>
                                <div class=" custom-control custom-checkbox mb-3 d-inline-block mr-3">
                                    <input type="checkbox" id="Wed" class="custom-control-input" checked />
                                    <label class="mb-0 custom-control-label" for="Wed">Wed</label>
                                </div>
                                <div class=" custom-control custom-checkbox mb-3 d-inline-block mr-3">
                                    <input type="checkbox" id="Thu" class="custom-control-input" checked />
                                    <label class="mb-0 custom-control-label" for="Thu">Thu
								</label>
                                </div>
                                <div class=" custom-control custom-checkbox mb-3 d-inline-block mr-3">
                                    <input type="checkbox" id="Fri" class="custom-control-input" checked />
                                    <label class="mb-0 custom-control-label" for="Fri">Fri</label>
                                </div>
                                <div class=" custom-control custom-checkbox mb-3 d-inline-block mr-3">
                                    <input type="checkbox" id="Sat" class="custom-control-input" />
                                    <label class="mb-0 custom-control-label" for="Sat">Sat</label>
                                </div>
                                <div class=" custom-control custom-checkbox mb-3 d-inline-block mr-3">
                                    <input type="checkbox" id="Sun" class="custom-control-input" />
                                    <label class="mb-0 custom-control-label" for="Sun">Sun</label>
                                </div>
                                <br />
                                <button type="button" class="btn btn-danger text-white ctm-border-radius float-right ml-3" data-dismiss="modal">Cancel</button>
                                <button type="button" class="btn btn-theme button-1 text-white ctm-border-radius float-right">Add</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Holiday Add Modal */}
            <div class="modal fade" id="addholiday">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body">
                            <form>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title mb-3">Edit Private Holidays</h4>
                                <div class=" custom-control custom-checkbox mb-3 d-inline-block mr-3">
                                    <input type="checkbox" id="Mon" class="custom-control-input" checked />
                                    <label class="mb-0 custom-control-label" for="Mon">12</label>
                                </div>
                                <div class=" custom-control custom-checkbox mb-3 d-inline-block mr-3">
                                    <input type="checkbox" id="Tue" class="custom-control-input" checked />
                                    <label class="mb-0 custom-control-label" for="Tue">16</label>
                                </div>
                                <div class=" custom-control custom-checkbox mb-3 d-inline-block mr-3">
                                    <input type="checkbox" id="Wed" class="custom-control-input" checked />
                                    <label class="mb-0 custom-control-label" for="Wed">18</label>
                                </div>
                                <div class=" custom-control custom-checkbox mb-3 d-inline-block mr-3">
                                    <input type="checkbox" id="Thu" class="custom-control-input" checked />
                                    <label class="mb-0 custom-control-label" for="Thu">20
								</label>
                                </div>
                                <div class=" custom-control custom-checkbox mb-3 d-inline-block mr-3">
                                    <input type="checkbox" id="Fri" class="custom-control-input" checked />
                                    <label class="mb-0 custom-control-label" for="Fri">25</label>
                                </div>
                                <div class=" custom-control custom-checkbox mb-3 d-inline-block mr-3">
                                    <input type="checkbox" id="Sat" class="custom-control-input" />
                                    <label class="mb-0 custom-control-label" for="Sat">30</label>
                                </div>
                                <br />
                                <button type="button" class="btn btn-danger text-white ctm-border-radius float-right ml-3" data-dismiss="modal">Cancel</button>
                                <button type="button" class="btn btn-theme button-1 text-white ctm-border-radius float-right">Add</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



            {/* Add Leave Type Modal */}
            <div class="modal fade" id="addLeaveType">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Add New Leave Type</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label>Leave Type Name</label>
                                    <input class="form-control form-white" placeholder="Enter name" type="text" name="category-name" />
                                </div>

                                <div class="submit-section text-center">
                                    <button type="button" class="btn btn-theme ctm-border-radius text-white save-category submit-btn ml-6 mt-3 apply-leave" data-dismiss="modal">Save</button>
                                    <button type="button" class="btn btn-theme ctm-border-radius text-white save-category submit-btn ml-3 mt-3 cancel-leave" data-dismiss="modal">Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="edit_timedefault">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">


                        <div class="modal-body">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title mb-3">Company Default</h4>
                            <div class="form-group">
                                <label>Time Off Allowance</label>
                                <input type="text" class="form-control" placeholder="Name" value="25 Days" />
                            </div>
                            <div class="form-group">
                                <label>Year Start</label>
                                <input type="text" class="form-control datetpicker" placeholder="Year Start" value="01-01-2019" />
                            </div>
                            <button type="button" class="btn btn-danger text-white ctm-border-radius float-right ml-3" data-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-theme button-1 text-white ctm-border-radius float-right">Add</button>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
