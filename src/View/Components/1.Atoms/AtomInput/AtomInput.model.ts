import { IComponent } from "./index";
import { ChangeEvent, useState } from "react";
import { IComponent as IText } from "../../0.Cores/Text";

function AtomInputModel(props: IComponent) {
	const { initText, click, onChange } = props;

	const [value, setValue] = useState(initText.text);

	const textObj = changeText(initText);

	function changeText(text: IText): IText {
		return { ...text, text: value };
	}

	function handleClick() {
		click?.();
	}

	function handleChange(e: ChangeEvent<HTMLDivElement>) {
		const newValue = e.currentTarget.innerText;
		onChange?.(newValue);
		setValue(newValue);
	}

	return { textObj, handleClick, handleChange };
}

export default AtomInputModel;
