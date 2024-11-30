import { FC } from "react";
import Model from "./DevTools.model";
import View from "./Layout/DevTools_Public";

export interface IComponent {}

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
