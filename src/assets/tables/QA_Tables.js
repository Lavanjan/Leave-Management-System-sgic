import React, { Fragment } from 'react'
import Add_New_Staff_Form from './../forms/Add_New_Staff_form'

export default function QA_Tables() {
    return (
        <Fragment>
            <div class="card ctm-border-radius shadow-sm flex-fill">
                <div class="card-header">
                    <h4 class="card-title mb-0">Quality Assurance Department</h4>
                </div>
                <div class="card-body">
                    <div class="form-group float-left">
                        <button class="btn btn-success" data-toggle="modal" data-target="#add_new">
                            <i class="fas fa-user-plus"></i> Add New Staff
                    </button>
                    </div>
                    <div class="form-group float-right">
                        <form class="form-inline">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>

                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th width="5%" scope="col">No</th>
                                <th width="20%" scope="col">Employee Name</th>
                                <th width="13%" scope="col">Employee ID</th>
                                <th width="17%" scope="col">Designation</th>
                                <th width="8%" scope="col">Status</th>
                                <th width="7%" scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Vasu Menon</td>
                                <td>SGIC/QA/001</td>
                                <td>Manual QA Engineer</td>
                                <td><span class="badge badge-success">On Work</span></td>
                                <td className="text-center">
                                    <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;Action</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Joshop Kuruvilla</td>
                                <td>SGIC/QA/002</td>
                                <td>Test Automation Engineer</td>
                                <td><span class="badge badge-danger">On Leave</span></td>
                                <td className="text-center">
                                    <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;Action</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Wahaab Rizazz</td>
                                <td>SGIC/QA/003</td>
                                <td>Test Automation Analyst</td>
                                <td><span class="badge badge-success">On Work</span></td>
                                <td className="text-center">
                                    <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;Action</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Ricky Ponting</td>
                                <td>SGIC/QA/004</td>
                                <td>Accountant</td>
                                <td><span class="badge badge-success">On Work</span></td>
                                <td className="text-center">
                                    <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;Action</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Devid Hussy</td>
                                <td>SGIC/QA/005</td>
                                <td>Test Manager</td>
                                <td><span class="badge badge-success">On Work</span></td>
                                <td className="text-center">
                                    <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;Action</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>Michal Cleark</td>
                                <td>SGIC/QA/006</td>
                                <td>Junior Tester</td>
                                <td><span class="badge badge-danger">On Leave</span></td>
                                <td className="text-center">
                                    <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;Action</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="modal fade" id="add_new">
                <Add_New_Staff_Form></Add_New_Staff_Form>
            </div>
        </Fragment>
    )
}
