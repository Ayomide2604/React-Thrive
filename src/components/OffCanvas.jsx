import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/img/offcanvas_logo.png";
const OffCanvas = ({ menuOpen }) => {
	return (
		<div>
			<div className="offcanvas-menu-overlay"></div>
			<div className={`offcanvas-menu-wrapper ${menuOpen ? "active" : ""}`}>
				<div className="offcanvas__logo" style={{ padding: "20px" }}>
					<a href="/">
						<img
							src={logo}
							alt="Logo"
							className="img-fluid d-flex"
							style={{ transform: "scale(1.3); transform-origin: center" }}
						/>
					</a>
				</div>
				<div id="mobile-menu-wrap">
					<ul className="offcanvas__widget">
						<li className="active">
							<a href="/">Home</a>
						</li>
						<li>
							<a href="../about.html">About</a>
						</li>
						<li>
							<a href="../services.html">Services</a>
						</li>
						<li>
							<a href="../contact.html">Contact</a>
						</li>
					</ul>
				</div>
				<div className="offcanvas__btn">
					<a
						href="#"
						className="primary-btn"
						data-toggle="modal"
						data-target="#appointmentModal"
					>
						Appointment
					</a>
				</div>
				<div className="offcanvas__social">
					<a href="https://www.facebook.com" target="_blank">
						<FaFacebook size={25} />
					</a>
					<a href="https://www.twitter.com" target="_blank">
						<FaWhatsapp size={25} />
					</a>
					<a href="https://www.instagram.com" target="_blank">
						<FaInstagram size={25} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default OffCanvas;
