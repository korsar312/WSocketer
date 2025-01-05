import { FC, HTMLAttributes, ReactNode } from "react";
import Model from "./AtomPaper.model";
import View from "./Layout/AtomPaper_Public";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { TDeepCSSObject } from "View/ViewUtils";

export interface IComponent extends Pick<HTMLAttributes<HTMLDivElement>, "onClick"> {
	color: StylesInterface.TColorChoice;
	children: ReactNode;
	extStyle?: TDeepCSSObject;
	isFull?: boolean;
}

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
