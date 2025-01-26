import { IComponent } from "./index";
import { TImagesSize } from "View/Components/0.Cores/Images";

function MoleculeCardItemModel(props: IComponent) {
	const { title, subTitle, click, image, isChose } = props;

	const imageSize: TImagesSize = 60;

	return { title, subTitle, click, image, isChose, imageSize };
}

export default MoleculeCardItemModel;
