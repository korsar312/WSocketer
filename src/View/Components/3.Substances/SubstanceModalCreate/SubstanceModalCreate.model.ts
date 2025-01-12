import { IComponent } from "./index";

function SubstanceModalCreateModel(props: IComponent) {
	const { isShow, form } = props;

	return { isShow, form };
}

export default SubstanceModalCreateModel;
