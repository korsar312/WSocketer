import { FC } from "react";
import AtomInput, { IComponent as IPaper } from "../../index";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

export interface IComponent extends Pick<IPaper, "children"> {}

const Index: FC<IComponent> = (props) => {
	const {} = props;

	const propsComponent: IPaper = {
		...props,
		color: StylesInterface.EColor.WHITE_3,
	};

	return <AtomInput {...propsComponent} />;
};

export default Index;
