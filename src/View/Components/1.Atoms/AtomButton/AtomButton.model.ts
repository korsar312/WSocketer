import { IComponent, TAtomButtonGeneralGroup } from "./index";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { IComponent as IImage } from "View/Components/0.Cores/Images";
import { IComponent as IText } from "View/Components/0.Cores/Text";

function AtomButtonModel(props: IComponent) {
	const { textVars, color, extStyles, icons, isFullWidth, click } = props;

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
			case StylesInterface.EColor.SECOND_1:
			case StylesInterface.EColor.SECOND_2:
			case StylesInterface.EColor.SECOND_3:
			case StylesInterface.EColor.SECOND_4:
				return StylesInterface.EColor.PRIME_1;
			default:
				return StylesInterface.EColor.SECOND_1;
		}
	}

	function handleClick() {
		click?.();
	}

	return { textChanged, color, extStyles, leftIcon, rightIcon, isFullWidth, handleClick };
}

export default AtomButtonModel;
