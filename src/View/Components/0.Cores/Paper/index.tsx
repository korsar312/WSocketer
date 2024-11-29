import { FC, ReactNode } from "react";
import { default as Model } from "./Paper.model";
import { default as View } from "./Layout/Paper_Public";

export interface IComponent {
	children: ReactNode;
}

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
