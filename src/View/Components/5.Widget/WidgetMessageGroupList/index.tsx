import { FC } from "react";
import Model from "./WidgetMessageGroupList.model";
import View from "./Layout/WidgetMessageGroupList_Public";
import { observer } from "mobx-react";
import { MessagesInterfaces } from "Logic/Core/Modules/Messages/Messages.interfaces";

export interface IComponent {
	choiceId?: string;
	clickCreate: () => void;
	click: (val: MessagesInterfaces.TMessageGroup) => void;
}

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default observer(Index);
