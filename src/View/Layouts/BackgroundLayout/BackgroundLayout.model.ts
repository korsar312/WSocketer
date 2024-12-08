import { IComponent } from "./index";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import UseCases from "Logic/Core/UseCases/UseCases";

function BackgroundLayoutModel(props: IComponent) {
	const {} = props;

	const color = UseCases.interactor("style", "getColor", StylesInterface.ETheme.DARK, StylesInterface.EColor.PRIME_2);

	return { color };
}

export default BackgroundLayoutModel;
