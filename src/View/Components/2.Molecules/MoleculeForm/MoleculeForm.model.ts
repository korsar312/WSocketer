import { IComponent } from "./index";
import { StylesInterface } from "../../../../Logic/Core/Modules/Styles/Styles.interface";

function MoleculeFormModel(props: IComponent) {
	const { schema, extStyle, color = StylesInterface.EColor.SECOND_1 } = props;

	return { schema, extStyle, color };
}

export default MoleculeFormModel;
