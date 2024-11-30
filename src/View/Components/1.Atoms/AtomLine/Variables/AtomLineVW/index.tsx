import { FC } from "react";
import AtomInput, { IComponent as ILine } from "../../index";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

export interface IComponent {}

const Index: FC<IComponent> = (props) => {
	const {} = props;

	const propsComponent: ILine = {
		...props,
		isHorizon: false,
		color: StylesInterface.EColor.BLACK_4,
	};

	return <AtomInput {...propsComponent} />;
};

export default Index;
