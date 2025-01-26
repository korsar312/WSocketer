import { IComponent } from "./index";
import { useState } from "react";
import { TMoleculeFormSchemaAddForm } from "../../Components/2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaAdd";

function MessagePageModel(props: IComponent) {
	const {} = props;

	const [isShowCreateGroup, setIsShowCreateGroup] = useState(false);
	const [isCurrentGroup, setIsCurrentGroup] = useState();
	const [isCurrentMessage, setIsCurrentMessage] = useState();

	function adapterForm(props: TMoleculeFormSchemaAddForm): {} {
		return {
			name: props.topText,
		};
	}

	function facadeCreateGroup(props: TMoleculeFormSchemaAddForm) {
		setIsShowCreateGroup(false);
		createGroup(adapterForm(props));
	}

	function createGroup(props: {}) {}

	function toggleShowCreateWs(isShow?: boolean) {
		setIsShowCreateGroup(isShow || false);
	}

	return { isShowCreateGroup, toggleShowCreateWs, facadeCreateGroup };
}

export default MessagePageModel;
