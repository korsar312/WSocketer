import { FC } from "react";
import Model from "./SubstanceMessagePlace.model";
import View from "./Layout/SubstanceMessagePlace_Public";
import { IComponent as IBubble } from "View/Components/2.Molecules/MoleculeTextBubble";

export interface IComponent {
	messages: TMessages[];
	sendState?: TBubbleText;
	receiveState?: TBubbleText;
}

type TBubbleText = Omit<IBubble, "message">;

type TMessages = {
	value: unknown;
	isSending: boolean;
	id: string;
};

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
