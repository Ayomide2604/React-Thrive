import { FaCalendar, FaPlay } from "react-icons/fa";
const Consultation = () => {
	return (
		<section className="consultation">
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<div className="consultation__form">
							<div className="section-title">
								<span>REQUEST FOR AN</span>
								<h2>Appointment</h2>
							</div>
							<form action="#">
								<input
									className="form-control"
									type="text"
									placeholder="Name"
									required
								/>
								<input
									className="form-control"
									type="email"
									placeholder="Email"
									required
								/>
								<input
									className="form-control"
									type="text"
									placeholder="Phone"
									required
								/>
								<div className="datepicker__item d-flex align-items-center">
									<input
										type="text"
										placeholder="Preferred Date"
										className="datepicker"
										required
									/>
									<FaCalendar
										style={{
											position: "absolute",
											right: "10px",
											top: "15px",
											cursor: "pointer",
										}}
									/>
								</div>
								<textarea
									className="form-control mb-3"
									placeholder="Reason for appointment"
									rows="5"
									required
								></textarea>
								<button type="submit" className="site-btn">
									Book Appointment
								</button>
							</form>
						</div>
					</div>
					<div className="col-lg-8">
						<div className="consultation__text">
							<div className="row">
								<div className="col-lg-6 col-md-6">
									<div className="consultation__text__item">
										<div className="section-title">
											<span>About Us</span>
											<h2>Your Path to Recovery Starts Here</h2>
										</div>
										<p>
											At Thrive Physiotherapy, we are committed to providing
											top-notch care tailored to your needs. Our team of
											experienced physiotherapists brings expertise and
											compassion to every session, ensuring you receive the best
											treatment possible.
										</p>
									</div>
								</div>
								<div className="col-lg-6 col-md-6">
									<h5 className="mb-3" color="#13a2b7">
										What is Physiotherapy ?
									</h5>
									<div
										className="consultation__video set-bg"
										style={{ backgroundImage: "url(/consultation_video.jpg)" }}
									>
										<a
											href="https://www.youtube.com/watch?v=DVvhOkRwdmQ"
											className="play-btn video-popup"
										>
											<FaPlay />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Consultation;
