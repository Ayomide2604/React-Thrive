import physiotherapist from "../assets/img/icons/physiotherapist.svg";
import certified from "../assets/img/icons/certified.svg";
import homeCare from "../assets/img/icons/homecare.svg";
const ChooseUs = () => {
	return (
		<section className="chooseus spad">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 text-center">
						<div className="section-title">
							<h2 style={{ color: "#13a2b7" }}>Why Choose Us?</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="chooseus__item">
							<img src={physiotherapist} alt="Qualified Physiotherapists" />
							<h5 style={{ color: "#13a2b7" }}>Qualified Physiotherapists</h5>
							<p>
								Our team consists of highly trained and certified professionals
								dedicated to your well-being.
							</p>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="chooseus__item">
							<img src={certified} alt="Certified Services" />
							<h5 style={{ color: "#13a2b7" }}>Certified Services</h5>
							<p>
								Our services are certified and meet the highest standards of
								quality and safety.
							</p>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="chooseus__item">
							<img src={homeCare} alt="Home Care" />
							<h5 style={{ color: "#13a2b7" }}>Home Care</h5>
							<p>
								Experience the convenience of professional physiotherapy
								services in the comfort of your own home.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ChooseUs;
