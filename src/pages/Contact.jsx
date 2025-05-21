import { FaMap, FaPhone, FaEnvelope } from "react-icons/fa";
import contactImage from "../assets/img/contact_us.jpg";
import ContactForm from "../components/ContactForm";
const Contact = () => {
	return (
		<section className="contact spad">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-4 col-sm-6">
						<div className="contact__widget">
							<div className="contact__widget__icon">
								<FaMap />
							</div>
							<div className="contact__widget__text">
								<h5>Address</h5>
								<p>34, Isaac John , Ikeja GRA</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-6">
						<div className="contact__widget">
							<div className="contact__widget__icon">
								<FaPhone />
							</div>
							<div className="contact__widget__text">
								<h5>Hotline</h5>
								<p>+(234) 805 316 5091</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-6">
						<div className="contact__widget">
							<div className="contact__widget__icon">
								<FaEnvelope />
							</div>
							<div className="contact__widget__text">
								<h5>Email</h5>
								<p>Thrivephysiotherapy@gmail.com</p>
							</div>
						</div>
					</div>
				</div>
				<div className="contact__content">
					<div className="row">
						<div className="col-lg-6 col-md-6">
							<div className="contact__pic">
								<img src={contactImage} alt="contact us" />
							</div>
						</div>
						<ContactForm />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
