import { FC } from "react";
import Model from "./SubstanceMessagePlace.model";
import View from "./Layout/SubstanceMessagePlace_Public";

export interface IComponent {}

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
