import { FC } from "react";
import TextPublic from "./Layout/Paper_Public";
import PaperModel from "./Paper.model";

export interface IComponent {}

const Index: FC<IComponent> = (props) => {
	const model = PaperModel(props);
	return <TextPublic {...model} />;
};

export default Index;
