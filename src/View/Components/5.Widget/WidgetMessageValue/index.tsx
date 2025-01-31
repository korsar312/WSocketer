import { FC } from "react";
import Model from "./WidgetMessageValue.model";
import View from "./Layout/WidgetMessageValue_Public";
import { observer } from "mobx-react";

export interface IComponent {
	messageId?: string;
	groupId?: string;
}

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default observer(Index);
