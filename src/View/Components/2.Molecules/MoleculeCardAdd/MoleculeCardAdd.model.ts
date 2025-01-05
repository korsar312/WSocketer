import { IComponent } from "./index";

function MoleculeCardAddModel(props: IComponent) {
	const { click, image } = props;

	return { click, image };
}

export default MoleculeCardAddModel;
