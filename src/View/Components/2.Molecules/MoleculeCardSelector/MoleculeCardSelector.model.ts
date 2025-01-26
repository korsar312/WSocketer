import { IComponent } from "./index";

function MoleculeCardSelectorModel(props: IComponent) {
	const { title, image, click, color } = props;

	return { title, image, click, color };
}

export default MoleculeCardSelectorModel;
