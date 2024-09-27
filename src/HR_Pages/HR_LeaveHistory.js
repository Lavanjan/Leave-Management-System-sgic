import React, { Fragment } from 'react'
import hritik from './../assets/images/Employees/Leave_Employees/hritik.png'


export default function HR_LeaveHistory() {
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
                                                            <li class="breadcrumb-item d-inline-block"><a href="/" class="text-dark">SGIC</a></li>
                                                            <li class="breadcrumb-item d-inline-block active">Human Resource</li>
                                                        </ol>
                                                        <h4 class="text-dark">Leave History</h4>
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

                        <div class="col-xl-9 col-lg-8  col-md-12">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-xl-12 col-lg-12 col-md-7 col-12 d-flex">
                                            <div class="card ctm-border-radius shadow-sm flex-fill">
                                                <div class="card-header">
                                                    <h4 class="card-title mb-0">Employee Leave History </h4>
                                                </div>
                                                <div class="card-body">
                                                    <div class="row">
                                                        {/* <div class="col-md-7 col-sm-6 ">
                                                            <ul class="nav his-pills" id="pills-tab" role="tablist">
                                                                <li class="nav-item mr-md-1">
                                                                    <a class="btn his-link active " id="pills-home-tab" data-toggle="pill" href="#tabs-1" role="tab" aria-controls="pills-home" aria-selected="true">Personal leave history</a>
                                                                </li>
                                                                <li class="nav-item">
                                                                    <a class="btn his-link" id="pills-profile-tab" data-toggle="pill" href="#tabs-2" role="tab" aria-controls="pills-profile" aria-selected="false">Employees leave history</a>
                                                                </li>
                                                            </ul>
                                                        </div> */}

                                                        <table class="table table-borderless table-sm mt-3">

                                                            <tbody>
                                                                <tr>
                                                                    <td className="text-center mb-4" width="4%">Show</td>
                                                                    <td width="6%">
                                                                        <select class="custom-select custom-select-sm">
                                                                            <option selected>10</option>
                                                                            <option value="1">15</option>
                                                                            <option value="2">20</option>
                                                                            <option value="3">25</option>
                                                                        </select>
                                                                    </td>
                                                                    <td className="text-center mb-4" width="1%">Entries</td>
                                                                    <td width="8%">
                                                                        <select class="custom-select custom-select-sm">
                                                                            <option selected>Status</option>
                                                                            <option value="1">Approved</option>
                                                                            <option value="2">Rejected</option>
                                                                        </select>
                                                                    </td>
                                                                    <td width="20%"></td>
                                                                    <td className="text-center mb-4" width="2%"></td>
                                                                    <td className="mr-4" width="12%">
                                                                        <input class="form-control search-box" type="text" placeholder="Search" aria-label="Search" />
                                                                    </td>
                                                                </tr>
                                                            </tbody>

                                                        </table>
                                                        {/*  */}
                                                        <div class="col-12">
                                                            <div class="tab-content py-0" id="pills-tabContent">
                                                                <div class="tab-pane py-0 active" id="tabs-1" role="tabpanel">
                                                                    <div class="table-responsive table-hover">
                                                                    <table class="table table-bordered table-hover">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th className=" th-bold" scope="col">Date <span className="float-right sort-opacity"><i class="fa fa-sort" aria-hidden="true"></i></span></th>
                                                                                    <th className=" th-bold" scope="col">Employee Name</th>
                                                                                    <th className=" th-bold" scope="col">Leave Type</th>
                                                                                    <th className=" th-bold" scope="col">From</th>
                                                                                    <th className=" th-bold" scope="col">To</th>
                                                                                    <th className=" th-bold" scope="col">Status</th>
                                                                                    <th className=" th-bold" scope="col">Action</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>2020.03.25</td>
                                                                                    <td >Lavanjan</td>
                                                                                    <td>Sick Leave</td>
                                                                                    <td >2020.03.26</td>
                                                                                    <td >2020.03.28</td>
                                                                                    <td><span class="badge badge-success">Approved</span></td>
                                                                                    <td className="text-center">
                                                                                        <button type="button" class="btn btn-primary font-weight-bold view-btn btn-sm" data-toggle="modal" data-target="#view-emp-information">View</button>
                                                                                    </td>
                                                                                </tr>

                                                                                <tr>
                                                                                    <td>2020.04.15</td>
                                                                                    <td>Sivapriyan</td>
                                                                                    <td>Casual Leave</td>
                                                                                    <td>2020.04.01</td>
                                                                                    <td>2020.04.03</td>
                                                                                    <td><span class="badge badge-success">Approved</span></td>
                                                                                    <td className="text-center">
                                                                                        <button type="button" class="btn btn-primary font-weight-bold view-btn btn-sm">View</button>
                                                                                    </td>
                                                                                </tr>

                                                                                <tr>
                                                                                    <td>2020.04.15</td>
                                                                                    <td>Saathurya</td>
                                                                                    <td>Medical Leave</td>
                                                                                    <td >2020.04.21</td>
                                                                                    <td>2020.04.23</td>
                                                                                    <td><span class="badge badge-danger">Rejected</span></td>
                                                                                    <td className="text-center">
                                                                                        <button type="button" class="btn btn-primary font-weight-bold view-btn btn-sm">View</button>
                                                                                    </td>
                                                                                </tr>

                                                                                <tr>
                                                                                    <td>2020.06.25</td>
                                                                                    <td>Hritik</td>
                                                                                    <td>Sick Leave</td>
                                                                                    <td>2020.06.25</td>
                                                                                    <td>2020.06.25</td>
                                                                                    <td><span class="badge badge-success">Approved</span></td>
                                                                                    <td className="text-center">
                                                                                        <button type="button" class="btn btn-primary font-weight-bold view-btn btn-sm">View</button>
                                                                                    </td>
                                                                                </tr>

                                                                                <tr>
                                                                                    <td>2020.08.10</td>
                                                                                    <td>TigerShroff</td>
                                                                                    <td>Casual Leave</td>
                                                                                    <td>2020.08.14</td>
                                                                                    <td>2020.08.15</td>
                                                                                    <td><span class="badge badge-success">Approved</span></td>
                                                                                    <td className="text-center">
                                                                                        <button type="button" class="btn btn-primary font-weight-bold view-btn btn-sm">View</button>
                                                                                    </td>
                                                                                </tr>

                                                                                <tr>
                                                                                    <td >2020.09.25</td>
                                                                                    <td>Vidyut</td>
                                                                                    <td>Annual Leave</td>
                                                                                    <td >2020.09.16</td>
                                                                                    <td>2020.09.18</td>
                                                                                    <td><span class="badge badge-success">Approved</span></td>
                                                                                    <td className="text-center">
                                                                                        <button type="button" class="btn btn-primary font-weight-bold view-btn btn-sm">View</button>
                                                                                    </td>
                                                                                </tr>

                                                                                <tr>
                                                                                    <td>2020.09.25</td>
                                                                                    <td>JohnAbraham</td>
                                                                                    <td>Sick Leave</td>
                                                                                    <td>2020.09.26</td>
                                                                                    <td>2020.09.90</td>
                                                                                    <td><span class="badge badge-success">Approved</span></td>
                                                                                    <td className="text-center">
                                                                                        <button type="button" class="btn btn-primary font-weight-bold view-btn btn-sm">View</button>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>

                                                                    </div>
                                                                </div>
                                                                <div class="tab-pane py-0" id="tabs-2" role="tabpanel">
                                                                    <div class="table-responsive table-hover">
                                                                        {/* Employees History */}
                                                                                                                                            </div>
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-4">
                                                                    <span className="ml-4 font-italic">Showing 1 to 10 of 35 entries</span>
                                                                </div>
                                                                <div className="col-8">
                                                                    <nav className="mr-3" aria-label="Page navigation example">
                                                                        <ul class="pagination justify-content-end">
                                                                            <li class="page-item disabled">
                                                                                <a class="page-link" href="#" tabindex="-1">Previous</a>
                                                                            </li>
                                                                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                                                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                                            <li class="page-item">
                                                                                <a class="page-link" href="#">Next</a>
                                                                            </li>
                                                                        </ul>
                                                                    </nav>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                {/* View Leave Details Modal form */}
                <div class="modal fade" id="view-information" role="document">
                    <div class="modal-dialog modal-xl modal-top modal-full-height ">
                        <div class="modal-content ">
                            <div class="modal-body style-add-modal">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title mb-3">Leave Details</h4>
                                <div class="row">
                                    <table class="table table-hover table-borderless leave-action-table">

                                        <tbody>
                                            <tr>
                                                <td width="16%" className="bold-let">Leave Type : </td>
                                                <td>Casual Leave</td>
                                                <td className="bold-let">Leave Date : </td>
                                                <td>2020.03.02 to 2020.03.03</td>
                                                <td className="bold-let">Posting Date : </td>
                                                <td>2020.03.01</td>
                                            </tr>

                                            <tr>
                                                <td className="bold-let">Leave Description : </td>
                                                <td colspan="5">Writers write descriptive paragraphs because their purpose is to describe something. Their point is that something is beautiful or disgusting or strangely intriguing.</td>
                                            </tr>
                                            <tr>
                                                <td className="bold-let">Leave Status : </td>
                                                <td colspan="5" className="text-success font-weight-bold">Approved</td>
                                            </tr>
                                            <tr>
                                                <td className="bold-let">Manager Comments : </td>
                                                <td colspan="5">Writers write descriptive paragraphs because their purpose is to describe something. Their point is that something is beautiful or disgusting or strangely intriguing.</td>
                                            </tr>
                                            <tr>
                                                <td className="bold-let">Manager Action Taken Date : </td>
                                                <td colSpan="5">2020.03.01 &nbsp;13:45:19</td>
                                            </tr>

                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="view-emp-information" role="document">
                    <div class="modal-dialog modal-xl modal-top modal-full-height ">
                        <div class="modal-content ">
                            <div class="modal-body style-add-modal">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title mb-3">Leave Details</h4>
                                <div class="row">
                                    <table class="table table-hover leave-action-table">

                                        <tbody>
                                            <tr>
                                                <td width="18%" className="bold-let">Employee Name :</td>
                                                <td width="21%" className="text-primary bold-let">John Abraham</td>
                                                <td width="13%" className="bold-let">Emp ID : </td>
                                                <td width="22%">EMP358584</td>
                                                <td width="14%" className="bold-let">Gender : </td>
                                                <td width="15%">Male</td>
                                            </tr>

                                            <tr>
                                                <td width="16%" className="bold-let">Emp Email ID : </td>
                                                <td>johnabraham@gmail.com</td>
                                                <td className="bold-let">Contact No : </td>
                                                <td colSpan="3">0758557861</td>
                                            </tr>

                                            <tr>
                                                <td width="16%" className="bold-let">Leave Type : </td>
                                                <td>Casual Leave</td>
                                                <td className="bold-let">Leave Date : </td>
                                                <td>2020.03.02 to 2020.03.03</td>
                                                <td className="bold-let">Posting Date : </td>
                                                <td>2020.03.01</td>
                                            </tr>

                                            <tr>
                                                <td className="bold-let">Employee Leave Description : </td>
                                                <td colspan="5">Writers write descriptive paragraphs because their purpose is to describe something. Their point is that something is beautiful or disgusting or strangely intriguing.</td>
                                            </tr>
                                            <tr>
                                                <td className="bold-let">Leave Status : </td>
                                                <td colspan="5" className="text-success font-weight-bold">Approved</td>
                                            </tr>
                                            <tr>
                                                <td className="bold-let">Manager Comments : </td>
                                                <td colspan="5">Writers write descriptive paragraphs because their purpose is to describe something. Their point is that something is beautiful or disgusting or strangely intriguing.</td>
                                            </tr>
                                            <tr>
                                                <td className="bold-let">Manager Action Taken Date : </td>
                                                <td colSpan="5">2020.03.01 &nbsp;13:45:19</td>
                                            </tr>

                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </Fragment>
    )
}
