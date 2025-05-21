import React, { useState, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import emailjs from "@emailjs/browser";

const ConsultationModal = ({ isOpen, onClose }) => {
	const [selectedDate, setSelectedDate] = useState(null);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		reason: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
	const [showSuccess, setShowSuccess] = useState(false);
	const formRef = useRef();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		e.stopPropagation();

		if (!selectedDate) {
			setSubmitStatus({
				type: "error",
				message: "Please select a preferred date",
			});
			return;
		}

		setIsSubmitting(true);
		setSubmitStatus({ type: "", message: "" });

		try {
			// Format the date for email
			const formattedDate = selectedDate.toLocaleDateString("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric",
			});

			// Prepare template parameters
			const templateParams = {
				from_name: formData.name,
				from_email: formData.email,
				phone: formData.phone,
				preferred_date: formattedDate,
				reason: formData.reason,
				to_name: "Thrive Physiotherapy",
			};

			// Send email using EmailJS
			await emailjs.send(
				"service_d1jb09a",
				"template_58u37tg",
				templateParams,
				"rVThJft0mEh2z1jPH"
			);

			setShowSuccess(true);
			setSubmitStatus({
				type: "success",
				message: "",
			});

			// Reset form
			setFormData({
				name: "",
				email: "",
				phone: "",
				reason: "",
			});
			setSelectedDate(null);

			// Clear success state after animation and close modal
			setTimeout(() => {
				setShowSuccess(false);
				onClose();
			}, 2000);
		} catch (error) {
			console.error("Error sending email:", error);
			setSubmitStatus({
				type: "error",
				message: "Failed to send appointment request. Please try again.",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	if (!isOpen) return null;

	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<div className="modal-header">
					<h3>Book an Appointment</h3>
					<button className="close-button" onClick={onClose}>
						<FaTimes />
					</button>
				</div>
				<div className="modal-body">
					{showSuccess ? (
						<div className="success-animation">
							<svg
								className="checkmark"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 52 52"
							>
								<circle
									className="checkmark__circle"
									cx="26"
									cy="26"
									r="25"
									fill="none"
								/>
								<path
									className="checkmark__check"
									fill="none"
									d="M14.1 27.2l7.1 7.2 16.7-16.8"
								/>
							</svg>
							<div className="success-message">
								Appointment Request Sent Successfully!
							</div>
						</div>
					) : (
						<>
							{submitStatus.type === "error" && (
								<div
									className="alert alert-danger alert-dismissible fade show"
									role="alert"
								>
									{submitStatus.message}
									<button
										type="button"
										className="btn-close"
										onClick={() => setSubmitStatus({ type: "", message: "" })}
										aria-label="Close"
									></button>
								</div>
							)}
							<form ref={formRef} onSubmit={handleSubmit} noValidate>
								<input
									className="form-control"
									type="text"
									name="name"
									placeholder="Name"
									value={formData.name}
									onChange={handleChange}
									required
									disabled={isSubmitting}
								/>
								<input
									className="form-control"
									type="email"
									name="email"
									placeholder="Email"
									value={formData.email}
									onChange={handleChange}
									required
									disabled={isSubmitting}
								/>
								<input
									className="form-control"
									type="text"
									name="phone"
									placeholder="Phone"
									value={formData.phone}
									onChange={handleChange}
									required
									disabled={isSubmitting}
								/>
								<div className="datepicker__item d-flex align-items-center position-relative mb-3">
									<LocalizationProvider dateAdapter={AdapterDateFns}>
										<DatePicker
											className="mb-3"
											value={selectedDate}
											onChange={(newValue) => setSelectedDate(newValue)}
											disabled={isSubmitting}
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
									disabled={isSubmitting}
								></textarea>
								<button
									type="submit"
									className="site-btn"
									disabled={isSubmitting}
								>
									{isSubmitting ? "Sending..." : "Book Appointment"}
								</button>
							</form>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default ConsultationModal;
