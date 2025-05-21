import { useEffect, useState } from "react";

const Preloader = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	if (!loading) return null;

	return (
		<div className="preloader" style={{ backgroundColor: "#000" }}>
			<div className="loader"></div>
		</div>
	);
};

export default Preloader;
