import { FC, ReactNode } from "react";
import Model from "./AtomModal.model";
import View from "./Layout/AtomModal_Public";
import { TTagPartial } from "../../../ViewUtils";

export interface IComponent extends TTagPartial<HTMLDivElement, "onClick"> {
	children: ReactNode;
	isShow: boolean;
}

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
