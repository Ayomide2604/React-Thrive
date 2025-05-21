import {
	FaFacebook,
	FaInstagram,
	FaWhatsapp,
	FaPhone,
	FaClock,
} from "react-icons/fa";
import { useState, useEffect } from "react";

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
			className="header__top d-none d-md-block py-1 "
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
								<FaPhone /> <span className="mx-2">+(234) 812 666 0484</span>
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
	);
};

export default Topbar;
