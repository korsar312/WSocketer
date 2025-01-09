import { IComponent } from "./index";

function MoleculeCardItemModel(props: IComponent) {
	const { title, subTitle, click, image, isChose } = props;

	return { title, subTitle, click, image, isChose };
}

export default MoleculeCardItemModel;
