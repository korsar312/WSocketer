import { FC } from "react";
import AtomPaper, { IComponent as IPaper } from "../../index";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

export interface IComponent extends Pick<IPaper, "children"> {}

const Index: FC<IComponent> = (props) => {
	const {} = props;

	const propsComponent: IPaper = {
		...props,
		color: StylesInterface.EColor.WHITE_3,
	};

	return <AtomPaper {...propsComponent} />;
};

export default Index;
