import { IComponent, TAtomInputText } from "./index";
import { ChangeEvent, useState } from "react";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import UseCases from "Logic/Core/UseCases/UseCases";

function AtomInputModel(props: IComponent) {
	const { initText, onClick, onChange, extStyle, name, type } = props;

	const [value, setValue] = useState(initText.text);

	const textObj = changeText(initText);
	const text = UseCases.interactor("language", "getText", initText.text);

	function changeText(text: TAtomInputText): TAtomInputText {
		return { ...text, text: value, color: text.color || StylesInterface.EColor.SECOND_1 };
	}

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		const newValue = e.currentTarget.value;
		onChange?.(newValue);
		setValue(newValue);
	}

	return { textObj, onClick, handleChange, text, extStyle, name, type };
}

export default AtomInputModel;
