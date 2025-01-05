import { FC } from "react";
import Model from "./MoleculeCardAdd.model";
import View from "./Layout/MoleculeCardAdd_Public";
import { IComponent as IImage } from "../../0.Cores/Images";

export interface IComponent {
	image: IImage;
	click?: () => void;
}

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
