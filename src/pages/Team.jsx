import team from "../assets/img/team/team-1.jpg";

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
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="team__item">
							<img src={team} alt="Team Member" />
							<h5>Name Name (PT)</h5>
							<span>Lead Physiotherapist</span>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="team__item">
							<img src={team} alt="Team Member" />
							<h5>Name Name</h5>
							<span>Position</span>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="team__item">
							<img src={team} alt="Team Member" />
							<h5>Name Name</h5>
							<span>Position</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Team;
