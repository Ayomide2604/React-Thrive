import { useState } from "react";
import {
	FaFacebook,
	FaInstagram,
	FaWhatsapp,
	FaPhone,
	FaClock,
	FaBars,
	FaTimes,
} from "react-icons/fa";
import logo from "../assets/img/site_logo.png";
import OffCanvas from "./OffCanvas";
const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<header className="header">
			<div className="header__top">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<ul className="header__top__left">
								<li>
									<FaPhone /> <span className="ms-2">+(234) 812 666 0484</span>
								</li>
								<li>
									<FaClock />
									<span className="ms-2">Mon to Sat 9:00am to 06:00pm</span>
								</li>
							</ul>
						</div>
						<div className="col-lg-4">
							<div className="header__top__right">
								<a href="#">
									<FaFacebook />
								</a>
								<a href="#">
									<FaWhatsapp />
								</a>
								<a href="#">
									<FaInstagram />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className="d-flex justify-content-between align-items-center"
				style={{ backgroundColor: "#273a55", maxHeight: "100px" }}
			>
				<div className="row align-items-center">
					<div className="col-lg-2">
						<div className="header__logo">
							<a href="/">
								<img
									src={logo}
									alt="Logo"
									className="img-fluid d-md-block d-none"
								/>
								<img
									src={logo}
									alt="Logo"
									className="img-fluid d-md-none "
									style={{ width: "150px" }}
								/>
							</a>
						</div>
					</div>
					<div className="col-lg-10">
						<div className="header__menu__option">
							<nav className="header__menu">
								<ul>
									<li>
										<a href="">Home</a>
									</li>
									<li>
										<a href="../about.html/">About</a>
									</li>
									<li>
										<a href="../services.html">Services</a>
									</li>
									<li>
										<a href="../contact.html">Contact</a>
									</li>
								</ul>
							</nav>
							<div className="header__btn text-white">
								<a
									href="#"
									className="primary-btn"
									data-toggle="modal"
									data-target="#appointmentModal"
								>
									Appointment
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="mx-3 d-md-none ">
					{menuOpen ? (
						<FaTimes color="white" size={25} onClick={toggleMenu} />
					) : (
						<FaBars color="white" size={25} onClick={toggleMenu} />
					)}
				</div>
			</div>
			<OffCanvas menuOpen={menuOpen} />
		</header>
	);
};

export default Header;
