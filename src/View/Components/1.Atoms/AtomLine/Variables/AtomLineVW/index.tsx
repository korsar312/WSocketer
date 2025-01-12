import { FC } from "react";
import Component, { IComponent as IParent } from "../../index";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

export interface IComponent {}

const Index: FC<IComponent> = (props) => {
	const {} = props;

	const propsComponent: IParent = {
		...props,
		isHorizon: false,
		color: StylesInterface.EColor.SECOND_4,
	};

	return <Component {...propsComponent} />;
};

export default Index;
