import { IComponent } from "./index";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { FormEvent } from "react";

function MoleculeFormModel(props: IComponent) {
	const { schema, extStyle, color = StylesInterface.EColor.PRIME_4 } = props;

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const data: Record<string, any> = {};

		formData.forEach((value, key) => {
			data[key] = value;
		});

		console.log(data);
	};

	return { schema, extStyle, color, handleSubmit };
}

export default MoleculeFormModel;
