import Service from "../components/Service";
import services from "../data/services";
const Services = () => {
	return (
		<section
			className="services spad set-bg"
			data-setbg="."
			style={{ backgroundImage: "url(services-bg.jpg)" }}
		>
			<div className="container">
				<div className="row">
					<div className="col-lg-12 text-center">
						<div className="section-title">
							<h2>Our Services</h2>
						</div>
					</div>
				</div>
				<div className="row">
					{services.map((service) => (
						<Service key={service.id} service={service} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
