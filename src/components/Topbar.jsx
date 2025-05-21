import {
	FaFacebook,
	FaInstagram,
	FaWhatsapp,
	FaPhone,
	FaClock,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			setIsVisible(currentScrollY <= 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div
			className="header__top d-none d-md-block"
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				zIndex: 1001,
				transition: "transform 0.3s ease-in-out",
				transform: isVisible ? "translateY(0)" : "translateY(-100%)",
			}}
		>
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<ul className="header__top__left">
							<li>
								<FaPhone /> <span className="mx-2">+(234) 703 970 8403</span>
							</li>
							<li>
								<FaClock />
								<span className="mx-2">Mon to Sat 9:00am to 06:00pm</span>
							</li>
						</ul>
					</div>
					<div className="col-lg-4">
						<div className="header__top__right">
							<a href="#">
								<FaFacebook />
							</a>
							<Link to="https://wa.me/+2347039708403/" target="_blank">
								<FaWhatsapp />
							</Link>
							<a href="#">
								<FaInstagram />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Topbar;
