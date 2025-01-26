import { IComponent, TAtomInputText } from "./index";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import UseCases from "Logic/Core/UseCases/UseCases";

function AtomTextareaModel(props: IComponent) {
	const { initText, onClick, onChange, extStyle, name, maxHeight } = props;

	const [value, setValue] = useState(initText.text);
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const textObj = changeText(initText);
	const text = UseCases.interactor("language", "getText", initText.text);

	useEffect(() => {
		autoSize();
	}, [value]);

	function autoSize() {
		const textarea = textareaRef.current;
		if (!textarea || maxHeight === undefined) return;

		textarea.style.height = "0px";
		textarea.style.height = `${textarea.scrollHeight > maxHeight ? maxHeight : textarea.scrollHeight}px`;
	}

	function changeText(text: TAtomInputText): TAtomInputText {
		return { ...text, text: value, color: text.color || StylesInterface.EColor.SECOND_1 };
	}

	function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
		const newValue = e.currentTarget.value;
		onChange?.(newValue);
		setValue(newValue);
	}

	return { textObj, onClick, handleChange, text, extStyle, name, textareaRef };
}

export default AtomTextareaModel;
