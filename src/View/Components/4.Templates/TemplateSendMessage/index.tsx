import { FC, useState } from "react";
import Substance, { IComponent as ISubstances } from "View/Components/2.Molecules/MoleculeInputControl";
import { WebSocketInterfaces } from "Logic/Core/Modules/WebSocket/WebSocket.interfaces";
import { observer } from "mobx-react";
import UseCases from "Logic/Core/UseCases/UseCases";

export interface IComponent {
	wsInstance: WebSocketInterfaces.TWebSocket;
}

const FormFields = { input: "input" };
type TForm = { [key in keyof typeof FormFields]: (typeof FormFields)[key] };

const Index: FC<IComponent> = (props) => {
	const { wsInstance } = props;

	const [isDisableSend, setIsDisableSend] = useState(true);

	const propsComponent: ISubstances = {
		form: { onSubmit: sendMessage },
		leftBtn: { icon: "IconTune" },
		inputArea: { text: "", name: FormFields.input, onChange: checkInput },
		rightBtn: { icon: "IconSend", type: "submit", isDisable: isDisableSend },
	};

	function checkInput(val: string) {
		setIsDisableSend(!val.length);
	}

	function sendMessage(val: TForm) {
		UseCases.interactor("webSocket", "sendWsMessage", wsInstance, val.input);
	}

	return <Substance {...propsComponent} />;
};

export default observer(Index);
