import { IComponent, TAtomDropdownEl } from "./index";
import { useEffect, useState } from "react";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

function AtomDropdownModel(props: IComponent) {
	const { options, onChange, style, color } = props;

	const [isOpen, setIsOpen] = useState(false);
	const [choice, setChoice] = useState(options[0]?.id);

	const colorMain = color?.main || StylesInterface.EColor.SECOND_3;
	const colorDrop = color?.drop || StylesInterface.EColor.SECOND_3;

	const titleObj = getElement(choice);
	const variablesObj = options.filter((el) => el.id !== titleObj.id);

	const titleMain: TAtomDropdownEl = changeOptions(titleObj, colorMain);
	const titleDrop: TAtomDropdownEl[] = variablesObj.map((el) => changeOptions(el, colorDrop));

	useEffect(() => {
		handleChoiceChange();
	}, [choice]);

	function changeOptions(val: TAtomDropdownEl, mainColor: StylesInterface.TColorChoice) {
		return {
			...val,
			text: val.text && {
				...val.text,
				value: val.text.value.map((el) => ({ ...el, color: el.color ?? choiceColor(mainColor) })),
			},
			iconRight: val.iconRight && {
				...val.iconRight,
				value: val.iconRight.value.map((el) => ({ ...el, color: el.color ?? choiceColor(mainColor) })),
			},
			iconLeft: val.iconLeft && {
				...val.iconLeft,
				value: val.iconLeft.value.map((el) => ({ ...el, color: el.color ?? choiceColor(mainColor) })),
			},
		};
	}

	function choiceColor(mainColor: StylesInterface.TColorChoice): StylesInterface.EColor {
		switch (mainColor) {
			default: {
				return StylesInterface.EColor.PRIME_2;
			}
		}
	}

	function handleChoiceChange() {
		onChange?.(titleObj);
	}

	function getElement(id: string | number): TAtomDropdownEl {
		return options.find((el) => el.id === id) || { id };
	}

	function handleClick() {
		setIsOpen((el) => !el);
	}

	function handleClickElement(id: string | number) {
		setChoice(id);
	}

	return { handleClick, titleMain, titleDrop, handleClickElement, isOpen, style, colorMain, colorDrop };
}

export default AtomDropdownModel;
