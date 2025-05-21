import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";

const Consultation = () => {
	const [selectedDate, setSelectedDate] = useState(null);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		reason: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		e.stopPropagation();
		// Handle form submission logic here
		console.log("Form submitted:", formData, "Selected Date:", selectedDate);
		alert("Appointment booked successfully!");
	};

	return (
		<section className="consultation">
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<div
							className="consultation__form"
							style={{ position: "relative", zIndex: 1003 }}
						>
							<div className="section-title">
								<span>REQUEST FOR AN</span>
								<h2>Appointment</h2>
							</div>
							<form onSubmit={handleSubmit} noValidate>
								<input
									className="form-control"
									type="text"
									name="name"
									placeholder="Name"
									value={formData.name}
									onChange={handleChange}
									required
								/>
								<input
									className="form-control"
									type="email"
									name="email"
									placeholder="Email"
									value={formData.email}
									onChange={handleChange}
									required
								/>
								<input
									className="form-control"
									type="text"
									name="phone"
									placeholder="Phone"
									value={formData.phone}
									onChange={handleChange}
									required
								/>
								<div className="datepicker__item d-flex align-items-center position-relative mb-3">
									<LocalizationProvider dateAdapter={AdapterDateFns}>
										<DatePicker
											className="mb-3"
											value={selectedDate}
											onChange={(newValue) => setSelectedDate(newValue)}
											slotProps={{
												textField: {
													className: "form-control datepicker",
													placeholder: "Preferred Date",
													required: true,
													fullWidth: true,
													sx: {
														"& .MuiInputBase-root": {
															height: "100%",
															width: "100%",
														},
														"& .MuiInputBase-input": {
															height: "100%",
															padding: "10px 15px",
														},
														"& .MuiOutlinedInput-notchedOutline": {
															border: "none",
														},
														"& .MuiInputAdornment-root": {
															position: "absolute",
															right: "10px",
															top: "50%",
															transform: "translateY(-50%)",
														},
													},
												},
												popper: {
													sx: {
														"& .MuiPaper-root": {
															width: "100%",
															maxWidth: "320px",
														},
													},
												},
											}}
											minDate={new Date()}
										/>
									</LocalizationProvider>
								</div>
								<textarea
									className="form-control mb-3"
									name="reason"
									placeholder="Reason for appointment"
									rows="5"
									value={formData.reason}
									onChange={handleChange}
									required
								></textarea>
								<button
									type="button"
									onClick={handleSubmit}
									className="site-btn"
								>
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
									<h5 className="mb-3" style={{ color: "#13a2b7" }}>
										What is Physiotherapy?
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
