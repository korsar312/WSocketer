import { IComponent } from "./index";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { FormEvent } from "react";

function MoleculeFormModel(props: IComponent) {
	const { schema, extStyle, color = StylesInterface.EColor.PRIME_4, buttonList, onSubmit } = props;

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const data: Record<string, unknown> = {};

		formData.forEach((value, key) => {
			data[key] = value;
		});

		onSubmit(data);
	};

	return { schema, extStyle, color, handleSubmit, buttonList };
}

export default MoleculeFormModel;
