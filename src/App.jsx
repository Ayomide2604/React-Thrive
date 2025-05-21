import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Whatsapp from "./components/Whatsapp";

function App() {
	const [whatsappOpen, setWhatsappOpen] = useState(false);

	const toggleChatBox = () => {
		setWhatsappOpen(!whatsappOpen);
	};

	return (
		<div className="app">
			<Header />
			<div className="vh-100"></div>
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
