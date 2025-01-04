import { EMoleculeTextBubbleTextVar, IComponent, TMoleculeTextBubbleText } from "./index";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import TColorChoice = StylesInterface.TColorChoice;

const { PRIME_1, PRIME_2, PRIME_3, PRIME_4, GREEN_2, BLUE_2, YELLOW_2, RED_2, SECOND_3 } = StylesInterface.EColor;
const blackVars: TColorChoice[] = [PRIME_1, PRIME_2, PRIME_3, PRIME_4];

function MoleculeTextBubbleModel(props: IComponent) {
	const { message, colorBg, textVar } = props;

	const isBlackBg = blackVars.includes(colorBg);

	const normalizeText = Object.keys(EMoleculeTextBubbleTextVar).reduce(
		(prev, cur) => {
			const curValue = cur as EMoleculeTextBubbleTextVar;

			prev[curValue] = {
				font: StylesInterface.EFont.Mont_S_18,
				color: colorChoicer(curValue),
				...textVar?.[curValue],
			};

			return prev;
		},
		{} as Record<EMoleculeTextBubbleTextVar, TMoleculeTextBubbleText>,
	);

	function colorChoicer(val: EMoleculeTextBubbleTextVar): StylesInterface.EColor {
		switch (val) {
			case EMoleculeTextBubbleTextVar.str:
				return GREEN_2;
			case EMoleculeTextBubbleTextVar.num:
				return BLUE_2;
			case EMoleculeTextBubbleTextVar.boo:
				return YELLOW_2;
			case EMoleculeTextBubbleTextVar.oth:
				return RED_2;
			case EMoleculeTextBubbleTextVar.arr:
				return RED_2;
			case EMoleculeTextBubbleTextVar.obj:
				return isBlackBg ? SECOND_3 : PRIME_3;
			default:
				return PRIME_4;
		}
	}

	return { message, colorBg, normalizeText };
}

export default MoleculeTextBubbleModel;
