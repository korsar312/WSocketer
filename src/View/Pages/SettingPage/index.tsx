import { FC } from "react";
import Model from "./SettingPage.model";
import View from "./Layout/SettingPage_Public";
import { observer } from "mobx-react";

export interface IComponent {}

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default observer(Index);
