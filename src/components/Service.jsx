import { FaRegCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const Service = ({ service }) => {
	return (
		<div className="col-lg-6 col-md-6">
			<div className="services__item">
				<Link to={`/services/${service.id}`}>
					<div className="services__item__icon">
						<img src={service.image} alt={service.name} />
					</div>
					<div className="services__item__text text-dark">
						<h5>{service.name} </h5>
						<p>{service.title}</p>
						<ul>
							{service.items.map((item) => (
								<div
									key={item}
									className="d-flex list-unstyled mb-1 align-items-center"
								>
									<FaRegCheckCircle color="#13a2b7" className="mx-2" />
									<li>{item}</li>
								</div>
							))}
						</ul>
						{service.subTitle}
						<p />
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Service;
