import { FC } from "react";
import { default as Model } from "./ExampleMolecul.model";
import { default as View } from "./Layout/ExampleMolecul_Public";

export interface IComponent {
	onClick?: () => void;
}

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
