import { FC } from "react";
import { default as Model } from "./AtomInput.model";
import { default as View } from "./Layout/AtomInput_Public";
import { IComponent as IText } from "View/Components/0.Cores/Text";

export interface IComponent {
	initText: IText;
	click?: () => void;
	onChange?: (val: string) => void;
}

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
