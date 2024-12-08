import { FC } from "react";
import Model from "./MoleculeTextBubble.model";
import View from "./Layout/MoleculeTextBubble_Public";

export interface IComponent {
	message: TTextBubbleMessage;
}

export type TTextBubbleMessage = Record<string | number, unknown>;

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
