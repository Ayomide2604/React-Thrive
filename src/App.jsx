import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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

function App() {
	const [whatsappOpen, setWhatsappOpen] = useState(false);
	const location = useLocation();

	const toggleChatBox = () => {
		setWhatsappOpen(!whatsappOpen);
	};

	return (
		<div className="app">
			{/* <Preloader /> */}
			<Header />
			<div
				style={{
					minHeight: "100vh",
					paddingTop: "85px",
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
		</div>
	);
}

export default App;
