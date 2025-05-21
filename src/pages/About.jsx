import { Link } from "react-router-dom";
import aboutImage from "../assets/img/about.jpg";
const About = () => {
	return (
		<section className="about spad">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-6">
						<div className="about__video">
							<img
								src={aboutImage}
								alt="About Us"
								style={{ height: "100%", width: "100%", objectFit: "contain" }}
							/>
						</div>
					</div>
					<div className="col-lg-6 col-md-6">
						<div className="about__text">
							<div className="section-title">
								<span>ABOUT US</span>
								<h2>Welcome to Thrive Physiotherapy</h2>
							</div>
							<p>
								Welcome to Thrive Physiotherapy Services, your trusted partner
								for in-home physiotherapy care in Nigeria. Founded in 2022,
								Thrive Physiotherapy Services believes everyone deserves access
								to excellent physiotherapy care, no matter their circumstances.
								We specialise in delivering high-quality physiotherapy services
								directly to individuals in the comfort of their homes.
							</p>
							<p>
								Our experienced team of physiotherapists are fully registered
								with the Medical Rehabilitation Therapist Board of Nigeria and
								can provide a comprehensive range of treatments and
								rehabilitation programs. Whether it is recovering from surgery,
								managing chronic pain, enhancing mobility and balance, or
								preventing falls, we tailor our services to the specific needs
								of each client.
							</p>
							<p>
								With a client-centered approach, evidence-based practices, and a
								commitment to holistic well-being, Thrive Home Physio is
								dedicated to helping individuals achieve their health and
								mobility goals at the convenience and ease of their homes
							</p>

							<Link to="/contact" className="primary-btn normal-btn">
								Contact us
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
