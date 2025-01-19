import { FC } from "react";
import Component, { IComponent as IParent, TAtomInputText } from "../../index";
import UseCases from "Logic/Core/UseCases/UseCases";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

export interface IComponent extends IParent {}

const Index: FC<IComponent> = (props) => {
	const { extStyle } = props;

	const color = UseCases.interactor("style", "getColor", StylesInterface.ETheme.DARK, StylesInterface.EColor.SECOND_4);

	const propsComponent: IParent = {
		...props,
		initText: textProp(props.initText),
		extStyle: [extStyle, { outline: `2px solid ${color}`, padding: "2px 6px", borderRadius: 12, boxSizing: "border-box" }],
	};

	function textProp(el: TAtomInputText): TAtomInputText {
		return el && { ...el, font: el.font || StylesInterface.EFont.Mont_B_30 };
	}

	return <Component {...propsComponent} />;
};

export default Index;
