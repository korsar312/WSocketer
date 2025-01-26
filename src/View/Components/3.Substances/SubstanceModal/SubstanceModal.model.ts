import { IComponent } from "./index";

function SubstanceModalModel(props: IComponent) {
	const { isShow, form, type } = props;

	return { isShow, form, type };
}

export default SubstanceModalModel;
