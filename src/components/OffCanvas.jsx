import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/img/offcanvas_logo.png";

const OffCanvas = ({ menuOpen, setMenuOpen }) => {
	return (
		<>
			{menuOpen && (
				<div
					className="offcanvas-menu-overlay"
					style={{
						position: "fixed",
						top: "85px",
						left: 0,
						width: "100%",
						height: "calc(100% - 100px)",
						backgroundColor: "rgba(0, 0, 0, 0.5)",
						zIndex: 9999,
						opacity: 1,
						transition: "opacity 0.3s ease-in-out",
					}}
				/>
			)}
			<div
				className={`offcanvas-menu-wrapper ${menuOpen ? "active" : ""}`}
				style={{
					zIndex: 10000,
					position: "fixed",
					right: menuOpen ? 0 : "-300px",
					width: "300px",
					backgroundColor: "#fff",
					transition: "right 0.3s ease-in-out",
					visibility: menuOpen ? "visible" : "hidden",
				}}
			>
				<div className="offcanvas__logo" style={{ padding: "20px" }}>
					<Link to="/">
						<img
							src={logo}
							alt="Logo"
							className="img-fluid d-flex"
							style={{ transform: "scale(1.3); transform-origin: center" }}
							onClick={() => setMenuOpen(!menuOpen)}
						/>
					</Link>
				</div>
				<div id="mobile-menu-wrap">
					<ul
						className="offcanvas__widget"
						onClick={() => setMenuOpen(!menuOpen)}
					>
						<li className="active">
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/services">Services</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</div>
				<div className="offcanvas__btn">
					<Link
						href="#"
						className="primary-btn"
						data-toggle="modal"
						data-target="#appointmentModal"
					>
						Appointment
					</Link>
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
		</>
	);
};

export default OffCanvas;
