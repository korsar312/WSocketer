import { FC } from "react";
import { default as Model } from "./ProtocolPage.model";
import { default as View } from "./Layout/ProtocolPage_Public";
import { observer } from "mobx-react";

export interface IComponent {}

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default observer(Index);
