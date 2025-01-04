import { FC } from "react";
import Component, { IComponent as IPaper } from "../../index";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

export interface IComponent extends Pick<IPaper, "children"> {}

const Index: FC<IComponent> = (props) => {
	const {} = props;

	const propsComponent: IPaper = {
		...props,
		color: StylesInterface.EColor.SECOND_2,
	};

	return <Component {...propsComponent} />;
};

export default Index;
