import { NFC } from "Logic/Libs/Util/TypesUtils";
import MoleculeCardItemModel from "../MoleculeCardItem.model";
import AtomPaperW from "../../../1.Atoms/AtomPaper/Variables/AtomPaperW";
import styles from "./MoleculeCardItem_Public.styles";
import Images from "../../../0.Cores/Images";
import Text from "../../../0.Cores/Text";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

const MoleculeCardItem_Public: NFC<typeof MoleculeCardItemModel> = (props) => {
	const { title, subTitle, click, image } = props;

	return (
		<AtomPaperW extStyle={styles.wrapper} onClick={click}>
			<Images size={60} {...image} />

			<div css={styles.text}>
				<Text pos={"left"} text={title} font={StylesInterface.EFont.Mont_M_18} color={StylesInterface.EColor.SECOND_3} />
				<Text pos={"left"} text={subTitle} font={StylesInterface.EFont.Mont_M_14} color={StylesInterface.EColor.SECOND_4} />
			</div>
		</AtomPaperW>
	);
};

export default MoleculeCardItem_Public;
