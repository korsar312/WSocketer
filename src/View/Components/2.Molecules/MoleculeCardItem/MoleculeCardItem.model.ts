import { IComponent } from "./index";
import { TImagesSize } from "View/Components/0.Cores/Images";

function MoleculeCardItemModel(props: IComponent) {
	const { title, subTitle, click, image, isChose, collapse } = props;

	const imageSize: TImagesSize = 60;

	return { title, subTitle, click, image, isChose, collapse, imageSize };
}

export default MoleculeCardItemModel;
