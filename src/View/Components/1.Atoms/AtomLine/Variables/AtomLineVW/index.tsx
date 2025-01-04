import { FC } from "react";
import Component, { IComponent as ILine } from "../../index";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

export interface IComponent {}

const Index: FC<IComponent> = (props) => {
	const {} = props;

	const propsComponent: ILine = {
		...props,
		isHorizon: false,
		color: StylesInterface.EColor.SECOND_4,
	};

	return <Component {...propsComponent} />;
};

export default Index;
