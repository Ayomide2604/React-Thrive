import { Link } from "react-router-dom";

const BackButton = () => {
	return (
		<div className="col-lg-6 service-detail__cta text-left p-3">
			<Link to="/services" className="site-btn">
				Back to Services
			</Link>
		</div>
	);
};

export default BackButton;
