import { FC } from "react";
import Component, { IComponent as IParent, TAtomDropdownEl } from "../../index";
import { IComponent as IText } from "View/Components/0.Cores/Text";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

export interface IComponent extends IParent {}

const Index: FC<IComponent> = (props) => {
	const {} = props;

	const propsComponent: IParent = {
		...props,
		style: {
			main: [{ borderRadius: 12 }, props.style?.main],
			drop: [{ borderRadius: 12 }, props.style?.drop],
		},
		options: props.options.map((el) => ({ ...el, text: dropProp(el.text) })),
	};

	function dropProp(el: TAtomDropdownEl["text"]): TAtomDropdownEl["text"] {
		return el && { ...el, value: el.value.map((el) => textProp(el)) };
	}

	function textProp(el: IText): IText {
		return el && { ...el, font: el.font || StylesInterface.EFont.Mont_B_22 };
	}

	return <Component {...propsComponent} />;
};

export default Index;
