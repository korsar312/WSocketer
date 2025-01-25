import { IComponent } from "./index";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

function MoleculeFormSchemaModel(props: IComponent) {
	const { schema, extStyle, color = StylesInterface.EColor.PRIME_4, buttonList, form } = props;

	return { schema, extStyle, color, form, buttonList };
}

export default MoleculeFormSchemaModel;
