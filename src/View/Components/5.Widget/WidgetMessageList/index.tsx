import { FC } from "react";
import Model from "./WidgetMessageList.model";
import View from "./Layout/WidgetMessageList_Public";
import { observer } from "mobx-react";
import { MessagesInterfaces } from "Logic/Core/Modules/Messages/Messages.interfaces";

export interface IComponent {
	choiceId?: string;
	groupId?: string;
	clickCreate: () => void;
	click: (val: MessagesInterfaces.TMessage) => void;
}

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default observer(Index);
