import { IComponent, TAtomDropdownEl } from "./index";
import { useEffect, useRef, useState } from "react";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

function AtomDropdownModel(props: IComponent) {
	const { options, onChange, style, color, name } = props;

	const [isOpen, setIsOpen] = useState(false);
	const [choice, setChoice] = useState(options[0]);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const colorMain = color?.main || StylesInterface.EColor.SECOND_3;
	const colorDrop = color?.drop || StylesInterface.EColor.SECOND_3;

	const variablesObj = options.filter((el) => el.id !== choice.id);

	const titleMain: TAtomDropdownEl = changeOptions(choice, colorMain);
	const titleDrop: TAtomDropdownEl[] = variablesObj.map((el) => changeOptions(el, colorDrop));

	useEffect(() => {
		const controller = new AbortController();
		window.addEventListener("click", handleOutsideClick, { signal: controller.signal });

		return () => controller.abort();
	}, []);

	useEffect(() => {
		handleChoiceChange();
	}, [choice]);

	function changeOptions(val: TAtomDropdownEl, mainColor: StylesInterface.TColorChoice): TAtomDropdownEl {
		return {
			...val,
			text: val.text && {
				value: val.text.value.map((el) => ({
					...el,
					color: el.color ?? choiceColor(mainColor),
					extStyle: { ...el.extStyle, textWrap: "nowrap" },
				})),
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

	function handleOutsideClick(event: MouseEvent) {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
			setIsOpen(false);
		}
	}

	function handleClick() {
		setIsOpen((old) => !old);
	}

	function handleChoiceChange() {
		onChange?.(choice);
	}

	function getElement(id: string | number): TAtomDropdownEl {
		return options.find((el) => el.id === id) || { id };
	}

	function handleClickElement(id: string | number) {
		setChoice(getElement(id));
	}

	return { handleClick, dropdownRef, titleMain, titleDrop, handleClickElement, isOpen, style, colorMain, colorDrop, name, choice };
}

export default AtomDropdownModel;
