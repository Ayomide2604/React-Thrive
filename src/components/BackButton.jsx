import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const BackButton = () => {
	const navigate = useNavigate();

	return (
		<button
			onClick={() => navigate(-1)}
			className="btn mx-5 btn-outline-dark "
			style={{ backgroundColor: "#0C5D69", color: "#ffff" }}
		>
			<IoArrowBack className="mr-2" />
			Back
		</button>
	);
};

export default BackButton;
