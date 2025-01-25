import { IComponent } from "./index";
import { FormEvent } from "react";

function FormModel(props: IComponent) {
	const { onSubmit, children } = props;

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		if (!onSubmit) return;

		const formData = new FormData(event.currentTarget);
		const data: Record<string, unknown> = {};

		formData.forEach((value, key) => (data[key] = value));

		onSubmit(data);
	}

	return { handleSubmit, children };
}

export default FormModel;
