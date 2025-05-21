import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/img/site_logo.png";
import OffCanvas from "./OffCanvas";
import Topbar from "./Topbar";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [isTopbarVisible, setIsTopbarVisible] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			setIsTopbarVisible(currentScrollY <= 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<header className="header">
			<div className="d-md-block d-none">
				<Topbar />
			</div>
			<div
				className="d-flex justify-content-between align-items-center"
				style={{
					backgroundColor: "#273a55",
					maxHeight: "100px",
					position: "fixed",
					top:
						window.innerWidth >= 768 ? (isTopbarVisible ? "40px" : "0") : "0",
					left: 0,
					right: 0,
					zIndex: 1002,
					transition: "top 0.3s ease-in-out",
				}}
			>
				<div className="row align-items-center w-100">
					<div className="col-lg-2">
						<div className="header__logo">
							<Link to="/">
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
							</Link>
						</div>
					</div>
					<div className="col-lg-10">
						<div className="header__menu__option">
							<nav className="header__menu">
								<ul>
									<li>
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
			<OffCanvas menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
		</header>
	);
};

export default Header;
