import { IComponent } from "./index";

function MoleculeCardItemModel(props: IComponent) {
	const { title, subTitle, click, image } = props;

	return { title, subTitle, click, image };
}

export default MoleculeCardItemModel;
