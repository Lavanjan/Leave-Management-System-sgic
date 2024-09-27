import React, { Fragment } from 'react'
import Add_New_Staff_Form from './../forms/Add_New_Staff_form'

export default function HR_Table() {
    return (
        <Fragment>
        <div class="card ctm-border-radius shadow-sm flex-fill">
        <div class="card-header">
            <h4 class="card-title mb-0">Human Resoures Department</h4>
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
                        <td>Abiramy Silambarasan</td>
                        <td>SGIC/HR/001</td>
                        <td>HR Director</td>
                        <td><span class="badge badge-success">On Work</span></td>
                        <td className="text-center">
                            <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;Action</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Ullakurunathan Piriyanka</td>
                        <td>SGIC/HR/002</td>
                        <td>Chief Human Resource Officer</td>
                        <td><span class="badge badge-danger">On Leave</span></td>
                        <td className="text-center">
                            <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;Action</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Madona Sebastian</td>
                        <td>SGIC/HR/003</td>
                        <td>General HR Manager</td>
                        <td><span class="badge badge-success">On Work</span></td>
                        <td className="text-center">
                            <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;Action</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Mahgesh Babu</td>
                        <td>SGIC/HR/004</td>
                        <td>Senior  Executive HR</td>
                        <td><span class="badge badge-success">On Work</span></td>
                        <td className="text-center">
                            <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;Action</button>
                        </td>
                    </tr>
                    <tr>
                    <th scope="row">5</th>
                        <td>Shane Watson</td>
                        <td>SGIC/HR/005</td>
                        <td>HR Administrator</td>
                        <td><span class="badge badge-success">On Work</span></td>
                        <td className="text-center">
                            <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;Action</button>
                        </td>
                    </tr>
                    <tr>
                    <th scope="row">6</th>
                        <td>Aron Finch</td>
                        <td>SGIC/HR/006</td>
                        <td>Associate Executive HR</td>
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
