// import React, { Fragment } from 'react'
// import { BrowserRouter, Switch, Route, Link, useParams, useRouteMatch, Router } from 'react-router-dom'

// import tiger from './../assets/images/Employees/Leave_Employees/tiger.png'
// import hritik from './../assets/images/Employees/Leave_Employees/hritik.png'

// import Apply_Leave from './../assets/tables/Apply_Leave'
// import Leave_History from './../assets/tables/Leave_History'

// import employee_details from './../assets/Tables_Employee/Employee_Details'
// import Employee_Details from './../assets/Tables_Employee/Employee_Details'
// import Employee_ProfileLandpage from '../assets/Tables_Employee/Employee_ProfileLandpage'
// import Employee_HolidayPage from './../assets/Tables_Employee/Employee_HolidayHistory'
// import Employee_Calendar from './../assets/Tables_Employee/Employee_Calendar'
// import Employee_LeaveHistory from './../assets/Tables_Employee/Employee_LeaveHistory'
// import View_Leave_Details from './../assets/Tables_Employee/View_LeaveDetails'
// import Employee_Setting from './../assets/Tables_Employee/Employee_Settings'

// import './../assets/css/style.css'

// export default function Employees_Profile() {
//     let { path, url } = useRouteMatch();
//     return (
//         <Fragment>
//             <BrowserRouter>
//                 <div class="page-wrapper">
//                     <div class="container-fluid">
//                         <div class="row">
//                             <div class=" col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
//                                 <aside class="sidebar sidebar-user">
//                                     <div class="card ctm-border-radius shadow-sm">
//                                         <div class="card-body py-4">
//                                             <div class="row">
//                                                 <div class="col-md-12 mr-auto text-left">
//                                                     <div class="custom-search input-group">
//                                                         <div class="custom-breadcrumb">
//                                                             <ol class="breadcrumb no-bg-color d-inline-block p-0 m-0 mb-2">
//                                                                 <li class="breadcrumb-item d-inline-block"><a href="/" class="text-dark">Home</a></li>
//                                                                 <li class="breadcrumb-item d-inline-block active">Leave</li>
//                                                             </ol>
//                                                             <h4 class="text-dark">Leave</h4>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div class="user-card card shadow-sm bg-white text-center ctm-border-radius">
//                                         <div class="user-info card-body">
//                                             <div class="user-avatar mb-4">
//                                                 <img src={hritik} alt="User Avatar" class="img-fluid rounded-circle" width="100" />
//                                             </div>
//                                             <div class="user-details">
//                                                 <h4><b>Welcome Mr. Raveen</b></h4>
//                                                 <p>Sun, 29 Nov 2019</p>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div class="quicklink-sidebar-menu ctm-border-radius shadow-sm bg-white card">
//                                         <div class="card-body">
//                                             <ul class="list-group">
//                                                 <Link to={`${url}`}>
//                                                     <li class="list-group-item text-center apply-leave-btn text-white">Profile</li>
//                                                 </Link>
//                                                 <Link to={`${url}/employee_details`}>
//                                                     <li class="list-group-item text-center button-6"><a class="text-dark">Details</a></li>
//                                                 </Link>
//                                                 <Link to={`${url}/holiday_history`}>
//                                                     <li class="list-group-item text-center button-6"><a class="text-dark">Public Holidays</a></li>
//                                                 </Link>
//                                                 <Link to={`${url}/employee_calendar`}>
//                                                     <li class="list-group-item text-center button-6"><a class="text-dark">Calendar</a></li>
//                                                 </Link>
//                                                 <Link to={`${url}/employee_leave_history`}>
//                                                     <li class="list-group-item text-center button-6"><a class="text-dark">Leave History</a></li>
//                                                 </Link>
//                                                 <Link to={`${url}/employee_settings`}>
//                                                     <li class="list-group-item text-center button-6"><a class="text-dark">Settings</a></li>
//                                                 </Link>
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </aside>
//                             </div>

//                             <div class="col-xl-9 col-lg-8  col-md-12">
//                                 <div class="row">
//                                 <div class="col-md-12">
//                                     <Switch>
//                                         <Route exact path={`${path}`}>
//                                             <Employee_ProfileLandpage />
//                                         </Route>
//                                         <Route path={`${path}/employee_details`}>
//                                             <Employee_Details />
//                                         </Route>
//                                         <Route path={`${path}/holiday_history`}>
//                                             <Employee_HolidayPage />
//                                         </Route>
//                                         <Route path={`${path}/employee_calendar`}>
//                                             <Employee_Calendar />
//                                         </Route>
//                                         <Route path={`${path}/employee_leave_history`}>
//                                             <Employee_LeaveHistory />
//                                         </Route>
//                                         <Route path={`${path}/employee_settings`}>
//                                             <Employee_Setting />
//                                         </Route>
                                        
//                                     </Switch>
//                                 </div>

//                                 </div>

//                             </div>
//                         </div>
//                     </div>

//                     {/* New Team the modal */}
//                     <div class="modal fade" id="addNewType">
//                         <div class="modal-dialog modal-dialog-centered">
//                             <div class="modal-content">
//                                 <div class="modal-body">
//                                     <button type="button" class="close" data-dismiss="modal">&times;</button>
//                                     <h4 class="modal-title mb-3">Create New Date Type</h4>
//                                     <div class="form-group">
//                                         <div class="input-group mb-3">
//                                             <input class="form-control date-enter" type="text" placeholder="Date Type" />
//                                         </div>
//                                     </div>
//                                     <div class="form-group">
//                                         <div class="input-group mb-3">
//                                             <input class="form-control datetimepicker date-enter" type="text" placeholder="Key Date" />
//                                         </div>
//                                     </div>
//                                     <button type="button" class="btn btn-danger ctm-border-radius float-right ml-3" data-dismiss="modal">Cancel</button>
//                                     <button type="button" class="btn text-white ctm-border-radius btn-theme  button-1 float-right">Add</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     {/* Add basic info modal */}
//                     <div class="modal fade" id="add_basicInformation">
//                         <div class="modal-dialog modal-dialog-centered">
//                             <div class="modal-content">
//                                 <div class="modal-body">
//                                     <button type="button" class="close" data-dismiss="modal">&times;</button>
//                                     <h4 class="modal-title mb-3">Basic Information</h4>
//                                     <div class="input-group mb-3">
//                                         <input type="text" class="form-control" placeholder="Add Preferred Name" />
//                                     </div>
//                                     <div class="input-group mb-3">
//                                         <input type="text" class="form-control" placeholder="First Name" />
//                                     </div>
//                                     <div class="input-group mb-3">
//                                         <input type="text" class="form-control" placeholder="Last Name" />
//                                     </div>
//                                     <div class="input-group mb-3">
//                                         <input type="text" class="form-control" placeholder="Add Nationality" />
//                                     </div>
//                                     <div class="input-group mb-3">
//                                         <input class="form-control datetimepicker date-enter" type="text" placeholder="Add Date of Birth" />
//                                     </div>
//                                     <div class="input-group mb-3">
//                                         <input type="text" class="form-control" placeholder="Add Gender" />
//                                     </div>
//                                     <div class="input-group mb-3">
//                                         <input type="text" class="form-control" placeholder="Add Blood Group" />
//                                     </div>
//                                     <button type="button" class="btn btn-danger text-white ctm-border-radius float-right ml-3" data-dismiss="modal">Cancel</button>
//                                     <button type="button" class="btn btn-theme  button-1 text-white ctm-border-radius float-right">Add</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     {/* Edit basic Infor mation modal */}
//                     <div class="modal fade" id="edit_basicInformation">
//                         <div class="modal-dialog modal-dialog-centered">
//                             <div class="modal-content">
//                                 <div class="modal-body">
//                                     <button type="button" class="close" data-dismiss="modal">&times;</button>
//                                     <h4 class="modal-title mb-3">Edit Basic Information</h4>
//                                     <div class="input-group mb-3">
//                                         <input type="text" class="form-control" placeholder="Add Preferred Name" value="Maria" />
//                                     </div>
//                                     <div class="input-group mb-3">
//                                         <input type="text" class="form-control" placeholder="First Name" value="Maria" />
//                                     </div>
//                                     <div class="input-group mb-3">
//                                         <input type="text" class="form-control" placeholder="Last Name" value="Cotton" />
//                                     </div>
//                                     <div class="input-group mb-3">
//                                         <input type="text" class="form-control" placeholder="Add Nationality" value="American" />
//                                     </div>
//                                     <div class="input-group mb-3">
//                                         <input class="form-control datetimepicker date-enter" type="text" placeholder="Add Date of Birth" value="05-07-1990" />
//                                     </div>
//                                     <div class="input-group mb-3">
//                                         <input type="text" class="form-control" placeholder="Add Gender" value="Female" />
//                                     </div>
//                                     <div class="input-group mb-3">
//                                         <input type="text" class="form-control" placeholder="Add Blood Group" value="A+" />
//                                     </div>
//                                     <button type="button" class="btn btn-danger float-right ml-3" data-dismiss="modal">Cancel</button>
//                                     <button type="button" class="btn btn-theme  button-1 text-white ctm-border-radius float-right">Save</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     {/* Edit Contact the Modal */}
//                     <div class="modal fade" id="edit_Contact">
//                         <div class="modal-dialog modal-dialog-centered">
//                             <div class="modal-content">
//                                 <div class="modal-body">
//                                     <button type="button" class="close" data-dismiss="modal">&times;</button>
//                                     <h4 class="modal-title mb-3">Edit Contact</h4>
//                                     <div class="input-group mb-3">
//                                         <input type="text" class="form-control" placeholder="Add Phone Number" value="987654321" />
//                                     </div>
//                                     <div class="input-group mb-3">
//                                         <input type="email" class="form-control" placeholder="Login Email" value="mariacotton@example.com" />
//                                     </div>
//                                     <div class="input-group mb-3">
//                                         <input type="email" class="form-control" placeholder="Add Personal Email" value="maria@example.com" />
//                                     </div>
//                                     <div class="input-group mb-3">
//                                         <input type="text" class="form-control" placeholder="Add Seconary Phone Number" value="986754231" />
//                                     </div>
//                                     <div class="input-group mb-3">
//                                         <input type="text" class="form-control" placeholder="Add Web Site" value="www.focustechnology.com" />
//                                     </div>
//                                     <div class="input-group mb-3">
//                                         <input type="text" class="form-control" placeholder="Connect Your Linkedin" value="#mariacotton" />
//                                     </div>
//                                     <button type="button" class="btn btn-danger text-white ctm-border-radius float-right ml-3" data-dismiss="modal">Cancel</button>
//                                     <button type="button" class="btn btn-theme  button-1 text-white ctm-border-radius float-right">Save</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     {/* Add contact the modal */}
//                     <div class="modal fade" id="add_Contact">
//                         <div class="modal-dialog modal-dialog-centered">
//                             <div class="modal-content">

//                                 <div class="modal-body">
//                                     <button type="button" class="close" data-dismiss="modal">&times;</button>
//                                     <h4 class="modal-title mb-3">Add Contact</h4>
//                                     <div class="input-group mb-3">
//                                         <input type="text" class="form-control" placeholder="Add Phone Number" />
//                                     </div>
//                                     <div class="input-group mb-3">
//                                         <input type="email" class="form-control" placeholder="Login Email" />
//                                     </div>
//                                     <div class="input-group mb-3">
//                                         <input type="email" class="form-control" placeholder="Add Personal Email" />
//                                     </div>
//                                     <div class="input-group mb-3">
//                                         <input type="text" class="form-control" placeholder="Add Seconary Phone Number" />
//                                     </div>
//                                     <div class="input-group mb-3">
//                                         <input type="text" class="form-control" placeholder="Add Web Site" />
//                                     </div>
//                                     <div class="input-group mb-3">
//                                         <input type="text" class="form-control" placeholder="Connect Your Linkedin" />
//                                     </div>
//                                     <button type="button" class="btn btn-danger text-white ctm-border-radius float-right ml-3" data-dismiss="modal">Cancel</button>
//                                     <button type="button" class="btn btn-theme  button-1 text-white ctm-border-radius float-right">Save</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Add a key date modal */}
//                     <div class="modal fade" id="addKeyDate">
//                         <div class="modal-dialog modal-dialog-centered">
//                             <div class="modal-content">
//                                 <div class="modal-body">
//                                     <button type="button" class="close" data-dismiss="modal">&times;</button>
//                                     <h4 class="modal-title mb-3">Add New Date</h4>
//                                     <div class="form-group">
//                                         <div class="input-group mb-1">
//                                             <input class="form-control datetimepicker date-enter" type="text" placeholder="Date Type" />
//                                         </div>
//                                     </div>
//                                     <div class="form-group">
//                                         <div class="input-group mb-3">
//                                             <input class="form-control datetimepicker date-enter" type="text" placeholder="Key Date" />
//                                         </div>
//                                     </div>
//                                     <button type="button" class="btn btn-danger text-white ctm-border-radius float-right ml-3" data-dismiss="modal">Cancel</button>
//                                     <button type="button" class="btn btn-theme  button-1 text-white ctm-border-radius float-right">Add</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     {/* Edit Date Modal */}
//                     <div class="modal fade" id="edit_Dates">
//                         <div class="modal-dialog modal-dialog-centered">
//                             <div class="modal-content">
//                                 <div class="modal-body">
//                                     <button type="button" class="close" data-dismiss="modal">&times;</button>
//                                     <h4 class="modal-title mb-3">Edit Date</h4>
//                                     <div class="form-group">
//                                         <div class="input-group mb-1">
//                                             <input class="form-control datetimepicker date-enter" type="text" placeholder="Start Date" value="06-07-2017" />
//                                         </div>
//                                     </div>
//                                     <div class="form-group">
//                                         <div class="input-group mb-3">
//                                             <input class="form-control datetimepicker date-enter" type="text" placeholder="Visa Expiry Date" value="06 -07-2020" />
//                                         </div>
//                                     </div>
//                                     <button type="button" class="btn btn-danger text-white ctm-border-radius float-right ml-3" data-dismiss="modal">Cancel</button>
//                                     <button type="button" class="btn btn-theme  button-1 text-white ctm-border-radius float-right">Add</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </BrowserRouter>
//         </Fragment>
//     )
// }
