import { NFC } from "Logic/Libs/Util/TypesUtils";
import MoleculeCardItemModel from "../MoleculeCardItem.model";
import styles from "./MoleculeCardItem_Public.styles";
import Images from "../../../0.Cores/Images";
import Text from "../../../0.Cores/Text";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import AtomPaper from "../../../1.Atoms/AtomPaper";

const MoleculeCardItem_Public: NFC<typeof MoleculeCardItemModel> = (props) => {
	const { title, subTitle, click, image, isChose } = props;

	return (
		<AtomPaper
			color={isChose ? StylesInterface.EColor.SECOND_4 : StylesInterface.EColor.PRIME_3}
			extStyle={styles.wrapper}
			onClick={click}>
			<Images size={60} {...image} />

			<div css={styles.text}>
				<Text
					pos={"left"}
					text={title}
					font={StylesInterface.EFont.Mont_M_18}
					color={isChose ? StylesInterface.EColor.PRIME_3 : StylesInterface.EColor.SECOND_3}
				/>
				<Text
					pos={"left"}
					text={subTitle}
					font={StylesInterface.EFont.Mont_M_14}
					color={isChose ? StylesInterface.EColor.PRIME_4 : StylesInterface.EColor.SECOND_4}
				/>
			</div>
		</AtomPaper>
	);
};

export default MoleculeCardItem_Public;
