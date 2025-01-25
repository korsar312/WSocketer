import { ReactNode } from "react";
import Model from "./Form.model";
import View from "./Layout/Form_Public";

export interface IComponent {
	onSubmit?: (val: any) => void;
	children?: ReactNode;
}

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
