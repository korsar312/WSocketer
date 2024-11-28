import { IComponent, TAtomButtonGeneralGroup } from "./index";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { IComponent as IImage } from "View/Components/0.Cores/Images";
import { IComponent as IText } from "View/Components/0.Cores/Text";

function AtomButtonModel(props: IComponent) {
	const { textVars, color, extStyles, icons, isFullWidth } = props;

	const leftIcon = spread(icons?.["LEFT"], changeImage);
	const rightIcon = spread(icons?.["RIGHT"], changeImage);

	const textChanged = spread(textVars, changeText);

	function spread<T>(val?: TAtomButtonGeneralGroup<T>, changeFn?: (v: T) => T): TAtomButtonGeneralGroup<T> | undefined {
		return val && { ...val, value: val.value.map((el) => changeFn?.(el) || el) };
	}

	function changeImage(icon: IImage): IImage {
		return { ...icon, color: icon.color || getColorText() };
	}

	function changeText(text: IText): IText {
		return { ...text, color: text.color || getColorText() };
	}

	function getColorText(): StylesInterface.EColor {
		switch (color) {
			case StylesInterface.EColor.BLACK_1:
			case StylesInterface.EColor.BLACK_2:
			case StylesInterface.EColor.BLACK_3:
			case StylesInterface.EColor.BLACK_4:
				return StylesInterface.EColor.WHITE_1;
			default:
				return StylesInterface.EColor.BLACK_1;
		}
	}

	return { textChanged, color, extStyles, leftIcon, rightIcon, isFullWidth };
}

export default AtomButtonModel;
