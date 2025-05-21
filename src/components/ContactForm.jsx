const ContactForm = () => {
	return (
		<div className="col-lg-6 col-md-6">
			<div className="contact__form text-center">
				<h3>Get in touch</h3>
				<form action="#">
					<input
						className="form-control"
						type="text"
						placeholder="Name"
						required
					/>
					<input
						className="form-control"
						type="text"
						placeholder="Email"
						required
					/>
					<input
						className="form-control"
						type="text"
						placeholder="Phone"
						required
					/>
					<textarea
						className="form-control"
						rows="3"
						placeholder="Message"
						required
					></textarea>
					<button type="submit" className="site-btn">
						Send Message
					</button>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
