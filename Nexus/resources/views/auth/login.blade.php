@extends('layouts.guest')

@section('content')

<div class="content-bg-wrap"></div>

<div class="container py-4">
	<div class="row display-flex">
		<div class="col-md-6">
			<div class="landing-content">
				<h1>Welcome to the Biggest Social Network in the World</h1>
				<p>We are the best and biggest social network with 5 billion active users all around the world. Share your items, buy, sell, auctions and much more!
				</p>
				<a href="#" class="btn btn-md btn-border c-white">Register Now!</a>
			</div>
		</div>

		<div class="col-md-6">
			
			<!-- Login-Registration Form  -->
			
			<div class="registration-login-form">
				<!-- Nav tabs -->
				<ul class="nav nav-tabs" role="tablist">
					<li class="nav-item">
						<a class="nav-link" data-toggle="tab" href="#home" role="tab">
							<svg class="olymp-login-icon"><use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-login-icon') }}"></use></svg>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link active" data-toggle="tab" href="#profile" role="tab">
							<svg class="olymp-register-icon"><use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-register-icon') }}"></use></svg>
						</a>
					</li>
				</ul>
			
				<!-- Tab panes -->
				<div class="tab-content">
					<div class="tab-pane" id="home" role="tabpanel" data-mh="log-tab">
						<div class="title h6">Register to Nexus</div>
                        <form method="POST" action="{{ route('register') }}" class="content">
                        @csrf
							<div class="row">
								<div class="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
									<div class="form-group label-floating is-empty">
										<label class="control-label">First Name</label>
										<input class="form-control" placeholder="" type="text" name="fname">
									</div>
								</div>
								<div class="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
									<div class="form-group label-floating is-empty">
										<label class="control-label">Last Name</label>
										<input class="form-control" placeholder="" type="text" name="lname">
									</div>
								</div>
								<div class="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
									<div class="form-group label-floating is-empty">
										<label class="control-label">Your Email</label>
										<input class="form-control" placeholder="" type="email" name="email">
									</div>
									<div class="form-group label-floating is-empty">
										<label class="control-label">Your Password</label>
										<input class="form-control" placeholder="" type="password" name="password">
									</div>
			
									<div class="form-group date-time-picker label-floating">
										<label class="control-label">Your Birthday</label>
										<input name="datetimepicker" value="10/24/1984" / name="dob">
										<span class="input-group-addon">
														<svg class="olymp-calendar-icon"><use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-calendar-icon') }}"></use></svg>
													</span>
									</div>
			
									<div class="form-group label-floating is-select">
										<label class="control-label">Your Gender</label>
										<select class="selectpicker form-control" name="gender">
											<option value="MA">Male</option>
											<option value="FE">Female</option>
										</select>
									</div>
			
									<div class="remember">
										<div class="checkbox">
											<label>
												<input name="optionsCheckboxes" type="checkbox" name="terms">
												I accept the <a href="#">Terms and Conditions</a> of the website
											</label>
										</div>
									</div>
			
									<button type="submit" href="#" class="btn btn-purple btn-lg full-width">Complete Registration!</button>
								</div>
							</div>
						</form>
					</div>
			
					<div class="tab-pane active" id="profile" role="tabpanel" data-mh="log-tab">
						<div class="title h6">Login to your Account</div>
                        <form class="content" method="POST" action="{{ route('login') }}">
                            @csrf
							<div class="row">
								<div class="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
									<div class="form-group label-floating is-focused is-empty" v-bind:class="{ 'has-error': _.has(errors, 'email') }">
										<label class="control-label">Your Email</label>
                                        <input class="form-control" placeholder="" type="email"
										name="email" v-model="email">
										
                                        <span role="alert">
                                            <strong>
											@if ($errors->has('email'))
												{{ $errors->first('email') }}
											@endif
											@{{ errors.email }}
											</strong>
                                        </span>
                                       
									</div>
									<div class="form-group label-floating is-empty" v-bind:class="{ 'has-error': _.has(errors, 'password') }">
										<label class="control-label">Your Password</label>
										<input class="form-control" placeholder="" type="password" name="password" v-model="password">
										<span role="alert">
                                            <strong>
											@if ($errors->has('password'))
												{{ $errors->first('password') }}
											@endif
											@{{ errors.password }}
											</strong>
                                        </span>
									</div>
			
									<div class="remember">
			
										<div class="checkbox">
											<label>
												<input name="remember" id="remember" type="checkbox">
												Remember Me
											</label>
										</div>
										<a href="{{ route('password.request') }}" class="forgot">Forgot my Password</a>
									</div>
			
									<button type="submit" href="#" class="btn btn-lg btn-primary full-width">Login</button>
			
									<div class="or"></div>
			
									<a href="#" class="btn btn-lg bg-facebook full-width btn-icon-left"><i class="fab fa-facebook-f" aria-hidden="true"></i>Login with Facebook</a>
			
									<a href="#" class="btn btn-lg bg-twitter full-width btn-icon-left"><i class="fab fa-twitter" aria-hidden="true"></i>Login with Twitter</a>
			
			
									<p>Don’t you have an account? <a data-toggle="tab" href="#home" role="tab">Register Now!</a> it’s really simple and you can start enjoing all the benefits!</p>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			
            <!-- ... end Login-Registration Form  -->		
        </div>
	</div>
</div>
@endsection
