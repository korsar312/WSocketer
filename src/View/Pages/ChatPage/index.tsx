import { FC } from "react";
import Model from "./ChatPage.model";
import View from "./Layout/ChatPage_Public";
import { observer } from "mobx-react";

export interface IComponent {}

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default observer(Index);
