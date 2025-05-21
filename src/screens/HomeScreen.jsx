import ContactForm from "../components/ContactForm";
import ChooseUs from "../pages/ChooseUs";
import Consultation from "../pages/Consultation";
import Hero from "../pages/Hero";

const HomeScreen = () => {
	return (
		<>
			<Hero />
			<Consultation />
			<ChooseUs />
			<div className="d-flex justify-content-center">
				<ContactForm />
			</div>
		</>
	);
};

export default HomeScreen;
