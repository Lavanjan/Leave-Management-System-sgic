import React from 'react'

export default function Add_New_Staff_form() {
    return (
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Add New Staff</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputFirstName4">First Name</label>
                                <input type="text" class="form-control" id="inputFirstName4" placeholder="First Name" />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="LastName4">Last Name</label>
                                <input type="text" class="form-control" id="LastName4" placeholder="Last Name" />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="ContactNumber4">Contact Number</label>
                                <input type="text" class="form-control" id="ContactNumber4" placeholder="Contact Number" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputAddress">Address</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div class="form-group">
                            <label for="DateofBirth2">Date of Birth</label>
                            <input type="date" class="form-control" id="DateofBirth2" placeholder="Date of Birth" />
                        </div>
                        <div class="form-group">
                            <label for="MarriedStatus">Gender</label>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                <label class="form-check-label" for="exampleRadios1">
                                    Male
                                            </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                <label class="form-check-label" for="exampleRadios2" >
                                    Female
                                            </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                <label class="form-check-label" for="exampleRadios2" >
                                    Other
                                            </label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="MarriedStatus">Married Status</label>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios1" id="exampleRadios1" value="option1" checked />
                                <label class="form-check-label" for="exampleRadios1">
                                    Married
                                            </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios1" id="exampleRadios2" value="option2" />
                                <label class="form-check-label" for="exampleRadios2" >
                                    Unmarried
                                            </label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputState">Designation</label>
                            <select id="inputState" class="form-control">
                                <option selected>Choose...</option>
                                <option>######</option>
                                <option>######</option>
                                <option>######</option>
                                <option>######</option>
                                <option>######</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck" />
                                <label class="form-check-label" for="gridCheck">
                                    Check me out
                                        </label>
                            </div>
                        </div>
                        
                            <button type="submit" class="btn btn-success">Add</button>                      
                        
                            <button type="submit" class="btn btn-danger">Cancel</button>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}
