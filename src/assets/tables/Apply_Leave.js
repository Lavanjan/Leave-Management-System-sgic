import React from 'react'

export default function Apply_Leave() {
    return (
        
             
                    <div class="card ctm-border-radius shadow-sm">
                        <div class="card-header">
                            <h4 class="card-title mb-0">Apply Leaves</h4>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>
                                                Leave Type
															<span class="text-danger">*</span>
                                            </label>
                                            <select class="form-control select">
                                                <option>Select Leave</option>
                                                <option>Casual Leave</option>
                                                <option>Sick Leave</option>
                                                <option>Half Day</option>
                                                <option>Other Leave</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 leave-col">
                                        <div class="form-group">
                                            <label>Remaining Leaves</label>
                                            <input type="text" class="form-control" placeholder="10" disabled />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>From</label>
                                            <input type="text" class="form-control datetimepicker" />
                                        </div>
                                    </div>
                                    <div class="col-sm-6 leave-col">
                                        <div class="form-group">
                                            <label>To</label>
                                            <input type="text" class="form-control datetimepicker" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">

                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group mb-0">
                                            <label>Reason</label>
                                            <textarea class="form-control" rows="4" />
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <a href="" class="btn btn-theme apply-leave text-white ctm-border-radius mt-4 mr-5">Apply</a>
                                    <a href="" class="btn cancel-leave text-white ctm-border-radius mt-4">Cancel</a>
                                </div>
                            </form>
                        </div>
                    </div>
                
                

    )
}
