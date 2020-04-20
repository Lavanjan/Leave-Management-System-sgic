import React, { Fragment } from 'react'
import Add_New_Staff_Form from './../forms/Add_New_Staff_form'

export default function Accounts_Table() {
    return (
        <Fragment>
            <div class="card ctm-border-radius shadow-sm flex-fill">
                <div class="card-header">
                    <h4 class="card-title mb-0">Accounts Department</h4>
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
                                <th width="17%" scope="col">Alloctaions</th>
                                <th width="7%" scope="col">Allocate Leave</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Viki Kuruparan</td>
                                <td>SGIC/AC/001</td>
                                <td>
                                    <table>
                                        <tr>
                                            <td>Casual</td>
                                            <td>Sick</td>
                                            <td>Half Day</td>
                                            <td>Other</td>
                                        </tr>
                                        <tr>
                                            <td>05</td>
                                            <td>05</td>
                                            <td>10</td>
                                            <td>03</td>
                                        </tr>
                                    </table>
                                </td>

                                <td className="text-center">
                                    <button type="button" class="btn btn-primary btn-sm"><i class="fas fa-tools" aria-hidden="true"></i>&nbsp;Allocate</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Sunthar Umakanthan</td>
                                <td>SGIC/AC/002</td>
                                <td>
                                    <table>
                                        <tr>
                                            <td>Casual</td>
                                            <td>Sick</td>
                                            <td>Half Day</td>
                                            <td>Other</td>
                                        </tr>
                                        <tr>
                                            <td>05</td>
                                            <td>05</td>
                                            <td>10</td>
                                            <td>03</td>
                                        </tr>
                                    </table>
                                </td>

                                <td className="text-center">
                                    <button type="button" class="btn btn-primary btn-sm"><i class="fas fa-tools" aria-hidden="true"></i>&nbsp;Allocate</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Kirushna Ajith</td>
                                <td>SGIC/AC/003</td>
                                <td>
                                    <table>
                                        <tr>
                                            <td>Casual</td>
                                            <td>Sick</td>
                                            <td>Half Day</td>
                                            <td>Other</td>
                                        </tr>
                                        <tr>
                                            <td>05</td>
                                            <td>05</td>
                                            <td>10</td>
                                            <td>03</td>
                                        </tr>
                                    </table>
                                </td>

                                <td className="text-center">
                                    <button type="button" class="btn btn-primary btn-sm"><i class="fas fa-tools" aria-hidden="true"></i>&nbsp;Allocate</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Logesh Ragul </td>
                                <td>SGIC/AC/004</td>
                                <td>
                                    <table>
                                        <tr>
                                            <td>Casual</td>
                                            <td>Sick</td>
                                            <td>Half Day</td>
                                            <td>Other</td>
                                        </tr>
                                        <tr>
                                            <td>05</td>
                                            <td>05</td>
                                            <td>10</td>
                                            <td>03</td>
                                        </tr>
                                    </table>
                                </td>

                                <td className="text-center">
                                    <button type="button" class="btn btn-primary btn-sm"><i class="fas fa-tools" aria-hidden="true"></i>&nbsp;Allocate</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Suresh Raina</td>
                                <td>SGIC/AC/005</td>
                                <td>
                                    <table>
                                        <tr>
                                            <td>Casual</td>
                                            <td>Sick</td>
                                            <td>Half Day</td>
                                            <td>Other</td>
                                        </tr>
                                        <tr>
                                            <td>05</td>
                                            <td>05</td>
                                            <td>10</td>
                                            <td>03</td>
                                        </tr>
                                    </table>
                                </td>

                                <td className="text-center">
                                    <button type="button" class="btn btn-primary btn-sm"><i class="fas fa-tools" aria-hidden="true"></i>&nbsp;Allocate</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>Hatrik Pandiya</td>
                                <td>SGIC/AC/006</td>
                                <td>
                                    <table>
                                        <tr>
                                            <td>Casual</td>
                                            <td>Sick</td>
                                            <td>Half Day</td>
                                            <td>Other</td>
                                        </tr>
                                        <tr>
                                            <td>05</td>
                                            <td>05</td>
                                            <td>10</td>
                                            <td>03</td>
                                        </tr>
                                    </table>
                                </td>

                                <td className="text-center">
                                    <button type="button" class="btn btn-primary btn-sm"><i class="fas fa-tools" aria-hidden="true"></i>&nbsp;Allocate</button>
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
