import { FC } from "react";
import Test2PageModel from "./Test2Page.model";
import { observer } from "mobx-react";
import Test2Page_Public from "./Layout/Test2Page_Public";

export interface IComponent {}

const Index: FC<IComponent> = (props) => {
	const model = Test2PageModel(props);
	return <Test2Page_Public {...model} />;
};

export default observer(Index);
