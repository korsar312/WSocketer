import { FC, HTMLAttributes, ReactNode } from "react";
import Model from "./AtomModal.model";
import View from "./Layout/AtomModal_Public";

export interface IComponent extends Pick<HTMLAttributes<HTMLDivElement>, "onClick"> {
	children: ReactNode;
	isShow: boolean;
}

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
