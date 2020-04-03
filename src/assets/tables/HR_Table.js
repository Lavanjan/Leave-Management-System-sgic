import React from 'react'

export default function HR_Table() {
    return (
        <div class="card ctm-border-radius shadow-sm flex-fill">
            <div class="card-header">
                <h4 class="card-title mb-0">Human Resources Staffs</h4>
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
    )
}
