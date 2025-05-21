import Employee from "../components/Employee";
import employees from "../data/employees";
const Team = () => {
	return (
		<section className="team spad">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 text-center">
						<div className="section-title">
							<span>Our Team</span>
							<h2>Our Expert Physiotherapists</h2>
						</div>
					</div>
				</div>
				<div className="row">
					{employees.map((employee) => (
						<Employee
							key={employee.id}
							name={employee.name}
							position={employee.position}
							image={employee.image}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Team;
