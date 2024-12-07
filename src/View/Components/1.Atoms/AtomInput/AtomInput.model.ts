import { IComponent } from "./index";
import { ChangeEvent, useState } from "react";
import { IComponent as IText } from "View/Components/0.Cores/Text";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import UseCases from "Logic/Core/UseCases/UseCases";

function AtomInputModel(props: IComponent) {
	const { initText, click, onChange, extStyle } = props;

	const [value, setValue] = useState(initText.text);

	const textObj = changeText(initText);
	const text = UseCases.interactor("language", "getText", initText.text);

	function changeText(text: IText): IText {
		return { ...text, text: value, color: text.color || StylesInterface.EColor.SECOND_1 };
	}

	function handleClick() {
		click?.();
	}

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		const newValue = e.currentTarget.value;
		onChange?.(newValue);
		setValue(newValue);
	}

	return { textObj, handleClick, handleChange, text, extStyle };
}

export default AtomInputModel;
