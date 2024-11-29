import { IComponent } from "./index";
import { ChangeEvent, useState } from "react";
import { IComponent as IText } from "View/Components/0.Cores/Text";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

function AtomInputModel(props: IComponent) {
	const { initText, click, onChange } = props;

	const [value, setValue] = useState(initText.text);

	const textObj = changeText(initText);

	function changeText(text: IText): IText {
		return { ...text, text: value, color: text.color || StylesInterface.EColor.BLACK_1 };
	}

	function handleClick() {
		click?.();
	}

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		const newValue = e.currentTarget.value;
		onChange?.(newValue);
		setValue(newValue);
	}

	return { textObj, handleClick, handleChange };
}

export default AtomInputModel;
