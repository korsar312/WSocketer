import { FC } from "react";
import { default as Model } from "./MoleculeInputControl.model";
import { default as View } from "./Layout/MoleculeInputControl_Public";

export interface IComponent {}

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
