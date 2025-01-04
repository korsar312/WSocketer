import { NFC } from "Logic/Libs/Util/TypesUtils";
import ChatPageModel from "../ChatPage.model";
import WidgetWsInstance from "View/Components/5.Widget/WidgetWsInstance";

const ChatPage_Public: NFC<typeof ChatPageModel> = (props) => {
	const { wsInstance } = props;

	return <WidgetWsInstance wsInstance={wsInstance} />;
};

export default ChatPage_Public;
