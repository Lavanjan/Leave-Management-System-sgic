import React from 'react'

export default function All_Table() {
    return (
        <div class="card ctm-border-radius shadow-sm flex-fill">
            <div class="card-header">
                <h4 class="card-title mb-0">All Departments</h4>
            </div>
            <div class="card-body">
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
                            <th width="8%" scope="col">Department</th>
                            <th width="7%" scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ravi Lavanjan</td>
                            <td>SGIC/DP/001</td>
                            <td>Team Lead</td>
                            <td>Development</td>
                            <td className="text-center">
                                <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;Action</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Linges Sivapiriyan</td>
                            <td>SGIC/QA/001</td>
                            <td>Software Engineer</td>
                            <td>Quality Assurance</td>
                            <td className="text-center">
                                <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;Action</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Jeya Sathurya</td>
                            <td>SGIC/HR/001</td>
                            <td>Head</td>
                            <td>Human Resource</td>
                            <td className="text-center">
                                <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;Action</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Sinthu Wamsan</td>
                            <td>SGIC/AC/001</td>
                            <td>Auditor</td>
                            <td>Accounts</td>
                            <td className="text-center">
                                <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;Action</button>
                            </td>
                        </tr>
                        <tr></tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}
