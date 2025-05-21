import defaultImage from "../assets/img/default.jpg";
import { titleCase } from "title-case";

const Employee = ({ name, position, image }) => {
	return (
		<div className="col-lg-4 col-md-6 col-sm-6">
			<div className="team__item">
				<img src={image || defaultImage} alt="Team Member" />
				<h5>{titleCase(name)}</h5>
				<span>{titleCase(position)}</span>
			</div>
		</div>
	);
};

export default Employee;
