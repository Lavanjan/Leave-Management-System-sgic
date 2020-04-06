import React, { Fragment } from 'react'
import manager_img from './../../images/manager/manager.png'

export default function vishwa() {
    return (
        <div class="modal fade-modal-xl" id="vishwa">
            <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h7 class="modal-title">profile</h7>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="container">
                            <div class="row my-2">
                                <div class="col-lg-12 order-lg-2">
                                    <ul class="nav nav-tabs">
                                        <li class="nav-item">
                                            <a href="" data-target="#profile" data-toggle="tab" class="nav-link active">Profile</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="" data-target="#messages" data-toggle="tab" class="nav-link">Messages</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="" data-target="#edit" data-toggle="tab" class="nav-link">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content py-4">
                                        <div class="tab-pane active" id="profile">
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <img src={manager_img} alt="User Avatar" class="img-fluid rounded-circle" width="175" />
                                                </div>
                                                <div class="col-md-5">
                                                    <h3 class="mb-8">Santhiraboss vishwa</h3>
                                                    <table class='table' >
                                                        <tr>
                                                            <td>Deparment </td>
                                                            <td>Development</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Employee ID </td>
                                                            <td>SGIC/DP/002</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Designation </td>
                                                            <td>Software Engineer</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Mail </td>
                                                            <td>VishwaBoss@gmail.com</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Conatct Number </td>
                                                            <td>0778569124</td>
                                                        </tr>
                                                    </table>                                                    
                                                </div>
                                                <div class="col-md-4">                                                
                                                <h5>Reviews</h5>
                                                    <table>
                                                        <tr>
                                                            <td>Team Work</td>
                                                            <td><i class="fa fa-star text-primary"></i>&nbsp;
                                        <i class="fa fa-star text-primary"></i>&nbsp;
                                        <i class="fa fa-star text-primary"></i>&nbsp;
                                        <i class="fa fa-star text-primary"></i>&nbsp;
                                        <i class="fa fa-star"></i>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Technology Skills</td>
                                                            <td><i class="fa fa-star text-primary"></i>&nbsp;
                                        <i class="fa fa-star text-primary"></i>&nbsp;
                                        <i class="fa fa-star"></i>&nbsp;
                                        <i class="fa fa-star"></i>&nbsp;
                                        <i class="fa fa-star"></i>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Project Skills</td>
                                                            <td><i class="fa fa-star text-primary"></i>&nbsp;
                                        <i class="fa fa-star text-primary"></i>&nbsp;
                                        <i class="fa fa-star text-primary"></i>&nbsp;
                                        <i class="fa fa-star"></i>&nbsp;
                                        <i class="fa fa-star"></i>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Communication Skills</td>
                                                            <td><i class="fa fa-star text-primary"></i>&nbsp;
                                                            <i class="fa fa-star"></i>&nbsp;
                                        <i class="fa fa-star"></i>&nbsp;
                                        <i class="fa fa-star"></i>&nbsp;
                                        <i class="fa fa-star"></i>&nbsp;</td>
                                                        </tr>                                                        
                                                    </table>  
                                                                                                                                                  
                                                </div>
                                            </div>
                                            <hr></hr>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <p class="font-weight-bold">Technologies</p>
                                                    <a href="#" class="badge badge-dark badge-pill">html5</a>
                                                    <a href="#" class="badge badge-dark badge-pill">react</a>
                                                    <a href="#" class="badge badge-dark badge-pill">java</a>
                                                    <a href="#" class="badge badge-dark badge-pill">angularjs</a>
                                                    <a href="#" class="badge badge-dark badge-pill">css3</a>
                                                    <a href="#" class="badge badge-dark badge-pill">jquery</a>
                                                    <a href="#" class="badge badge-dark badge-pill">bootstrap</a>
                                                    <a href="#" class="badge badge-dark badge-pill">responsive-design</a>
                                                    <hr />
                                                    <span class="badge badge-primary"><i class="fa fa-user"></i> 900 Followers</span>
                                                    <span class="badge badge-success"><i class="fa fa-cog"></i> 43 Forks</span>
                                                    <span class="badge badge-danger"><i class="fa fa-eye"></i> 245 Views</span>
                                                    <hr />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <h5 class="mt-2"><span class="fa fa-clock-o ion-clock float-right"></span> Recent Activity</h5>
                                                    <table class="table table-sm table-hover table-striped">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <strong>Abby</strong> joined ACME Project Team in <strong>`Collaboration`</strong>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <strong>Gary</strong> deleted My Board1 in <strong>`Discussions`</strong>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <strong>Kensington</strong> deleted MyBoard3 in <strong>`Discussions`</strong>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <strong>John</strong> deleted My Board1 in <strong>`Discussions`</strong>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <strong>Skell</strong> deleted his post Look at Why this is.. in <strong>`Discussions`</strong>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="tab-pane" id="messages">
                                            <div class="alert alert-info alert-dismissable">
                                                <a class="panel-close close" data-dismiss="alert">×</a> This is an <strong>.alert</strong>. Use this to show important messages to the user.
                                            </div>
                                            <table class="table table-hover table-striped">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <span class="float-right font-weight-bold">3 hrs ago</span> Here is your a link to the latest summary report from the..
                                </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span class="float-right font-weight-bold">Yesterday</span> There has been a request on your account since that was..
                                </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span class="float-right font-weight-bold">9/10</span> Porttitor vitae ultrices quis, dapibus id dolor. Morbi venenatis lacinia rhoncus.
                                </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span class="float-right font-weight-bold">9/4</span> Vestibulum tincidunt ullamcorper eros eget luctus.
                                </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span class="float-right font-weight-bold">9/4</span> Maxamillion ais the fix for tibulum tincidunt ullamcorper eros.
                                </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="tab-pane" id="edit">
                                            <div class="container py-2">
                                                <div class="row my-2">
                                                    <div class="col-lg-4">
                                                        <h2 class="text-center font-weight-light">Edit Profile</h2>
                                                    </div>
                                                    <div class="col-lg-8">
                                                        <div class="alert alert-info alert-dismissable"> <a class="panel-close close" data-dismiss="alert">×</a> This is a edit page. Use this to edit user profile data easily!. </div>
                                                    </div>
                                                    <div class="col-lg-8 order-lg-1 personal-info">
                                                        <form role="form">                                                            
                                                            <div class="form-group row">
                                                                <label class="col-lg-3 col-form-label form-control-label">First name</label>
                                                                <div class="col-lg-9">
                                                                    <input class="form-control" type="text" value="Vishwa" />
                                                                </div>
                                                            </div>
                                                            <div class="form-group row">
                                                                <label class="col-lg-3 col-form-label form-control-label">Last name</label>
                                                                <div class="col-lg-9">
                                                                    <input class="form-control" type="text" value="Santhiraboos" />
                                                                </div>
                                                            </div>
                                                            <div class="form-group row">
                                                                <label class="col-lg-3 col-form-label form-control-label">Email</label>
                                                                <div class="col-lg-9">
                                                                    <input class="form-control" type="email" value="VishwaBoss@gmail.com" />
                                                                </div>
                                                            </div>
                                                            <div class="form-group row">
                                                                <label class="col-lg-3 col-form-label form-control-label">Contact Number</label>
                                                                <div class="col-lg-9">
                                                                    <input class="form-control" type="text" value="0773695256" />
                                                                </div>
                                                            </div>
                                                            <div class="form-group row">
                                                                <label class="col-lg-3 col-form-label form-control-label">Designation</label>
                                                                <div class="col-lg-9">
                                                                    <input class="form-control" type="text" value="Software Engineer" />
                                                                </div>
                                                            </div>
                                                            <div class="form-group row">
                                                                <label class="col-lg-3 col-form-label form-control-label">Address</label>
                                                                <div class="col-lg-9">
                                                                    <input class="form-control" type="text" value="" placeholder="Valvedithurai,Paruthithurai" />
                                                                </div>
                                                            </div>
                                                            <div class="form-group row">
                                                                <label class="col-lg-3 col-form-label form-control-label"></label>
                                                                <div class="col-lg-9">
                                                                    <input type="reset" class="btn btn-secondary" value="Cancel" />
                                                                    <input type="button" class="btn btn-primary" value="Save Changes" />
                                                                </div>
                                                            </div>

                                                        </form>
                                                    </div>
                                                    <div class="col-lg-4 order-lg-0 text-center">
                                                        <img src={manager_img} alt="User Avatar" class="img-fluid rounded-circle" width="175" />
                                                        <h6 class="my-4">Upload a new photo</h6>
                                                        <div class="input-group px-xl-4">
                                                            <div class="custom-file">
                                                                <input type="file" class="custom-file-input" id="inputGroupFile02" />
                                                                <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02"></label>
                                                            </div>
                                                            <div class="input-group-append">
                                                                <button class="btn btn-secondary"><i class="fa fa-upload"></i></button>
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
        </div>
    )
}
