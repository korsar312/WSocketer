import { FC } from "react";
import Component, { IComponent as IParent } from "../../index";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

export interface IComponent extends Pick<IParent, "children" | "isFull" | "extStyle" | "onClick"> {}

const Index: FC<IComponent> = (props) => {
	const {} = props;

	const propsComponent: IParent = {
		...props,
		color: StylesInterface.EColor.PRIME_3,
	};

	return <Component {...propsComponent} />;
};

export default Index;
