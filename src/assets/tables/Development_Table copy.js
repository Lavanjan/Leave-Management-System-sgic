import React, { Fragment } from 'react'
import Alloctaion from '../forms/Allocation'

export default function Development_Table() {
    return (
        <Fragment>
        <div class="card ctm-border-radius shadow-sm flex-fill">
        <div class="card-header">
            <h4 class="card-title mb-0">Development Department</h4>
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
                        <td>Siva Viji</td>
                        <td>SGIC/DP/001</td>
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
                                    <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#allocation"><i class="fas fa-tools" aria-hidden="true"></i>&nbsp;Allocate</button>
                                </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Santhiraboss Vishwa</td>
                        <td>SGIC/DP/002</td>
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
                                    <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#allocation"><i class="fas fa-tools" aria-hidden="true"></i>&nbsp;Allocate</button>
                                </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>sharma arathana</td>
                        <td>SGIC/DP/003</td>
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
                                    <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#allocation"><i class="fas fa-tools" aria-hidden="true"></i>&nbsp;Allocate</button>
                                </td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Kanesh Vageesh</td>
                        <td>SGIC/DP/004</td>
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
                                    <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#allocation"><i class="fas fa-tools" aria-hidden="true"></i>&nbsp;Allocate</button>
                                </td>
                    </tr>
                    <tr>
                    <th scope="row">5</th>
                        <td>Ramiya Anton</td>
                        <td>SGIC/DP/005</td>
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
                                    <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#allocation"><i class="fas fa-tools" aria-hidden="true"></i>&nbsp;Allocate</button>
                                </td>
                    </tr>
                    <tr>
                    <th scope="row">6</th>
                        <td>Raajan Sivathanushan</td>
                        <td>SGIC/DP/006</td>
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
                                    <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#allocation"><i class="fas fa-tools" aria-hidden="true"></i>&nbsp;Allocate</button>
                                </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
            <Alloctaion></Alloctaion>
    </Fragment>
    )
}
