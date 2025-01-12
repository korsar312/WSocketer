import { FC } from "react";
import Component, { IComponent as IParent } from "../../index";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

export interface IComponent extends Pick<IParent, "children" | "onClick" | "extStyle"> {}

const Index: FC<IComponent> = (props) => {
	const {} = props;

	const propsComponent: IParent = {
		...props,
		color: StylesInterface.EColor.PRIME_4,
	};

	return <Component {...propsComponent} />;
};

export default Index;
