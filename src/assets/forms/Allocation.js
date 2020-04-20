import React from 'react';
import NumericInput from 'react-numeric-input';


export default function Allocation() {
    return (
        <div class="modal fade" id="allocation" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Leave Allocation</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col md-12">
                                <table>
                                    <tr>
                                        <td>Casual</td>
                                        <td>Sick</td>
                                        <td>Half Day</td>
                                        <td>Other</td>
                                    </tr>
                                    <tr>
                                        <td><NumericInput min={0} max={100} value={5} /></td>
                                        <td><NumericInput min={0} max={100} value={5} /></td>
                                        <td><NumericInput min={0} max={100} value={10} /></td>
                                        <td><NumericInput min={0} max={100} value={3} /></td>
                                    </tr>

                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}
