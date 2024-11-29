import { FC } from "react";
import { default as Model } from "./DevTools.model";
import { default as View } from "./Layout/DevTools_Public";

export interface IComponent {}

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
