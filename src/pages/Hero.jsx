const Hero = () => {
	return (
		<section className="hero spad">
			<div className="container">
				<div className="row">
					<div className="col-lg-6"></div>
					<div className="col-lg-6">
						<div className="hero__text">
							<span className="text-white">
								Welcome to Thrive Physiotherapy
							</span>
							<h2 className="text-white">
								Expert Care, Delivered to Your Doorstep
							</h2>
							<p className="text-white">
								Experience personalized physiotherapy in the comfort of your
								home. Our dedicated team is here to support your recovery
								journey.
							</p>
							<a href="/contact/" className="primary-btn normal-btn">
								Contact Us
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
