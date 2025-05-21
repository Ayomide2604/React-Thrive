import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Whatsapp from "./components/Whatsapp";
import Preloader from "./components/Preloader";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import ServiceListScreen from "./screens/ServiceListScreen";
import ServiceDetail from "./pages/ServiceDetail";
import ConsultationModal from "./components/ConsultationModal";
import useScrollToTop from "./hooks/useScrollToTop";

function App() {
	const [whatsappOpen, setWhatsappOpen] = useState(false);
	const [consultationModalOpen, setConsultationModalOpen] = useState(false);
	useScrollToTop();

	const toggleChatBox = () => {
		setWhatsappOpen(!whatsappOpen);
	};

	const toggleConsultationModal = () => {
		setConsultationModalOpen(!consultationModalOpen);
	};

	return (
		<div className="app">
			<Preloader />
			<Header onAppointmentClick={toggleConsultationModal} />
			<div
				style={{
					minHeight: "100vh",
					paddingTop: "60px",
				}}
			>
				<Routes>
					<Route index element={<HomeScreen />} />
					<Route path="/about" element={<AboutScreen />} />
					<Route path="/services" element={<ServiceListScreen />} />
					<Route path="/services/:id" element={<ServiceDetail />} />
					<Route path="/contact" element={<ContactScreen />} />
				</Routes>
			</div>
			<Footer />
			<Whatsapp
				SetIsOpen={setWhatsappOpen}
				isOpen={whatsappOpen}
				toggleChatBox={toggleChatBox}
			/>
			<ConsultationModal
				isOpen={consultationModalOpen}
				onClose={toggleConsultationModal}
			/>
		</div>
	);
}

export default App;
