import {
	FaEnvelope,
	FaFacebook,
	FaInstagram,
	FaPhone,
	FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
	return (
		<footer className="footer mt-5">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-3 col-sm-6">
						<div className="footer__widget">
							<h5>Company</h5>
							<ul>
								<li>
									<Link to="/about">About Us</Link>
								</li>
								<li>
									<Link to="#">Our Mission</Link>
								</li>
								<li>
									<Link to="#">Careers</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-4 col-md-3 col-sm-6">
						<div className="footer__widget">
							<h5>Quick links</h5>
							<ul>
								<li>
									<Link href="#">Contact Us </Link>
								</li>
								<li>
									<Link href="#">FAQs </Link>
								</li>
								<li>
									<Link href="#">Blog </Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="footer__address">
							<h5>Contact Us</h5>
							<ul>
								<li>
									<FaPhone /> <span>+(234) 703 970 8403</span>
								</li>
								<li>
									<FaEnvelope />
									<span> Thrivephysiotherapy@gmail.com</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="footer__copyright">
				<div className="container">
					<div className="row">
						<div className="col-lg-7">
							<div className="footer__copyright__text">
								<p>
									Copyright &copy; {new Date().getFullYear()} Thrive
									Physiotherapy. All rights reserved.
								</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-12">
							<div className="footer__social">
								<a href="#">
									<FaFacebook />
								</a>
								<a href="#">
									<FaInstagram />
								</a>
								<a href="https://wa.me/+2347039708403/" target="_blank">
									<FaWhatsapp />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
