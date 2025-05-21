import { FaWhatsapp } from "react-icons/fa";
import ChatBox from "./ChatBox";
const Whatsapp = ({ isOpen, toggleChatBox }) => {
	return (
		<>
			<div className="whatsapp-float" id="whatsappFloat">
				<FaWhatsapp onClick={toggleChatBox} />
			</div>
			<div>{isOpen && <ChatBox onClose={toggleChatBox} />}</div>
		</>
	);
};

export default Whatsapp;
