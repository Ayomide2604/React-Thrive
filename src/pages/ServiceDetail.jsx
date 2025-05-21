import { useParams } from "react-router-dom";
import services from "../data/services";
import { FaRegCheckCircle } from "react-icons/fa";
import BackButton from "../components/BackButton";
const ServiceDetail = () => {
	const { id } = useParams();

	const service = services.find((s) => s.id === parseInt(id));
	return (
		<div>
			<section className="service-detail spad">
			<BackButton />
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-title">
								<h2>{service.name}</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div
								dangerouslySetInnerHTML={{ __html: service.detailHeader }}
								className="service-detail__text"
							></div>
						</div>
						<div className="col-lg-6">
							<div className="service-detail__img mb-5">
								<img src={service.detailImage} alt={service.name} />
							</div>
						</div>
						<div className="col-lg-6 ">
							<h4 className="mb-3">Our Approach Includes:</h4>
							<ul>
								{service.detailItems.map((item) => (
									<div key={item} className="d-flex align-items-center mb-2">
										<FaRegCheckCircle className="mx-2" />
										<li className="list-unstyled">{item}</li>
									</div>
								))}
							</ul>
							<div className="service-detail__cta text-left">
								<a href="../contact.html">Book an Appointment</a>
							</div>
						</div>
						<div
							className="service-detail__text p-3"
							dangerouslySetInnerHTML={{ __html: service.detailFooter }}
						></div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ServiceDetail;
