import { NFC } from "Logic/Libs/Util/TypesUtils";
import MoleculeCardItemModel from "../MoleculeCardItem.model";
import styles from "./MoleculeCardItem_Public.styles";
import Images from "View/Components/0.Cores/Images";
import Text from "View/Components/0.Cores/Text";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import AtomPaper from "View/Components/1.Atoms/AtomPaper";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";

const color = StylesInterface.EColor;

const MoleculeCardItem_Public: NFC<typeof MoleculeCardItemModel> = (props) => {
	const { title, subTitle, click, image, isChose, collapse, imageSize } = props;

	const textCol = (
		<>
			{textFn(title, StylesInterface.EFont.Mont_M_18, isChose ? color.PRIME_3 : color.SECOND_3)}
			{textFn(subTitle, StylesInterface.EFont.Mont_M_14, isChose ? color.PRIME_4 : color.SECOND_4)}
		</>
	);

	function textFn(text: LanguageInterface.TAllWord, font: StylesInterface.EFont, color: StylesInterface.EColor) {
		return <Text pos={"left"} text={text} font={font} color={color} />;
	}

	return (
		<AtomPaper color={isChose ? color.SECOND_4 : color.PRIME_3} onClick={click} extStyle={styles.wrapper(imageSize)}>
			<div css={styles.content}>
				<Images size={imageSize} color={isChose ? color.PRIME_1 : color.SECOND_4} {...image} />

				<div css={styles.text}>
					{textFn(title, StylesInterface.EFont.Mont_M_18, isChose ? color.PRIME_3 : color.SECOND_3)}
					{textFn(subTitle, StylesInterface.EFont.Mont_M_14, isChose ? color.PRIME_4 : color.SECOND_4)}
				</div>
			</div>
		</AtomPaper>
	);
};

export default MoleculeCardItem_Public;
