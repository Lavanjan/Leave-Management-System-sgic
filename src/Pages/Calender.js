import React, { Fragment } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';


class Calender extends React.Component {
    render() {
        return (
            <Fragment>
                <div class="page-wrapper">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
                                <aside class="sidebar sidebar-user">
                                    <div class="card ctm-border-radius shadow-sm">
                                        <div class="card-body py-4">
                                            <div class="row">
                                                <div class="col-md-12 mr-auto text-left">
                                                    <div class="custom-search input-group">
                                                        <div class="custom-breadcrumb">
                                                            <ol class="breadcrumb no-bg-color d-inline-block p-0 m-0 mb-2">
                                                                <li class="breadcrumb-item d-inline-block"><a href="index.html" class="text-dark">Home</a></li>
                                                                <li class="breadcrumb-item d-inline-block active">Calendar</li>
                                                            </ol>
                                                            <h4 class="text-dark">Calendar</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card ctm-border-radius shadow-sm">
                                        <div class="card-body">
                                            <a href="javascript:void(0)" class="btn ctm-border-radius text-white btn-block btn-theme calen-btn" data-toggle="modal" data-target="#add_event"><span><i class="fe fe-plus"></i></span> Create New</a>
                                        </div>
                                    </div>
                                    <div class="card ctm-border-radius shadow-sm">
                                        <div class="card-body">
                                            <h4 class="card-title">Drag & Drop Event</h4>
                                            <div id="calendar-events" class="mb-3">
                                                <div class="calendar-events" data-class="bg-info"><i class="fa fa-star text-primary"></i> Team Member Meet</div>
                                                <div class="calendar-events" data-class="bg-success"><i class="fa fa-star text-success"></i> Employee Review</div>
                                                <div class="calendar-events" data-class="bg-danger"><i class="fa fa-star text-danger"></i> Team Lead Meet</div>
                                                <div class="calendar-events" data-class="bg-warning"><i class="fa fa-star text-warning"></i> Office Day Funtion</div>
                                                <div class="calendar-events" data-class="bg-warning"><i class="fa fa-star text-success"></i> Group Photo</div>
                                                <div class="calendar-events" data-class="bg-warning"><i class="fa fa-star text-warning"></i> Certification</div>
                                                <div class="calendar-events" data-class="bg-warning"><i class="fa fa-star text-success"></i> Deepavali</div>
                                                <div class="calendar-events" data-class="bg-warning"><i class="fa fa-star text-primary"></i> CEO Meeting</div>
                                            </div>


                                        </div>
                                    </div>
                                </aside>
                            </div>

                            <div class="col-xl-9 col-lg-8  col-md-12">
                                <div class="card ctm-border-radius shadow-sm">
                                    <div class="card-body">
                                        <div><FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]}
                                            events={[
                                                { title: 'Client Meeting', date: '2020-04-01' },
                                                { title: 'Employees Meeting', date: '2020-04-08' },
                                                { title: 'HR Meeting', date: '2020-04-12' }
                                            ]}
                                        />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div class="sidebar-overlay" id="sidebar_overlay"></div>

                <div id="add_event" class="modal fade" role="dialog">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Add Event</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label>Event Name <span class="text-danger">*</span></label>
                                        <input class="form-control" type="text" />
                                    </div>
                                    <div class="form-group">
                                        <label>Event Date <span class="text-danger">*</span></label>
                                        <div class="cal-icon">
                                            <input class="form-control datetimepicker" type="text" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Category</label>
                                        <select class="form-control select" name="category">
                                            <option value="bg-danger">Danger</option>
                                            <option value="bg-success">Success</option>
                                            <option value="bg-purple">Purple</option>
                                            <option value="bg-primary">Primary</option>
                                            <option value="bg-info">Info</option>
                                            <option value="bg-warning">Warning</option>
                                        </select>
                                    </div>
                                    <div class="submit-section text-center">
                                        <button class="btn btn-theme ctm-border-radius text-white submit-btn button-1">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade none-border" id="my_event" role="dialog">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">Add Event</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body"></div>
                            <div class="modal-footer justify-content-center">
                                <button type="button" class="btn btn-theme ctm-border-radius text-white save-event submit-btn button-1">Create event</button>
                                <button type="button" class="btn btn-danger ctm-border-radius delete-event submit-btn" data-dismiss="modal">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="add_new_event">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">Add Category</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label>Category Name</label>
                                        <input class="form-control form-white" placeholder="Enter name" type="text" name="category-name" />
                                    </div>
                                    <div class="form-group mb-0">
                                        <label>Choose Category Color</label>
                                        <select class="form-control select form-white" data-placeholder="Choose a color..." name="category-color">
                                            <option value="success">Success</option>
                                            <option value="danger">Danger</option>
                                            <option value="info">Info</option>
                                            <option value="primary">Primary</option>
                                            <option value="warning">Warning</option>
                                            <option value="inverse">Inverse</option>
                                        </select>
                                    </div>
                                    <div class="submit-section text-center">
                                        <button type="button" class="btn btn-theme ctm-border-radius text-white save-category submit-btn mt-3 button-1" data-dismiss="modal">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>

        );
    }
    handleDateClick = (arg) => { // bind with an arrow function
        alert(arg.dateStr)
    }
}
export default Calender

