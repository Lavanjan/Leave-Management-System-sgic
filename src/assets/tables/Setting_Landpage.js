import React, { useState } from 'react'


import logo from './../images/logo_change.png'

export default function Setting_Landpage() {

	return (
		<div class="row">
			<div class="col-md-6 d-flex">
				<div class="card ctm-border-radius shadow-sm company-logo flex-fill">
					<div class="card-header">
						<h4 class="card-title mb-0">Company Logo</h4>
					</div>
					<div class="card-body">
						<form>
							<div class="row">
								<div class="col-12">
									<div class="avatar-upload">
										<div class="avatar-edit">
											<input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
											<label for="imageUpload"></label>
										</div>
										<div class="avatar-preview">
											<img src={logo} />
											{/* <div id="imagePreview"> */}
											{/* </div> */}
										</div>
									</div>
								</div>

							</div>
						</form>
					</div>
				</div>
			</div>
			<div class="col-lg-6 d-flex">
				<div class="card flex-fill ctm-border-radius shadow-sm">
					<div class="card-header">
						<h4 class="card-title mb-0">Change Password</h4>
						<span class="ctm-text-sm">Your password needs to be at least 8 characters long.</span>
					</div>
					<div class="card-body">
						<div class="form-group">
							<input type="password" class="form-control" placeholder="Current Password" />
						</div>
						<div class="form-group">
							<input type="password" class="form-control" placeholder="New Password" id="pwd" />
						</div>
						<div class="form-group">
							<input type="password" class="form-control" placeholder="Repeat Password" />
						</div>
						<div class="text-center">
							<a href="javascript:void(0)" class="btn btn-theme ctm-border-radius text-white apply-leave-btn text-center">Change My Password</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
