import { NFC } from "Logic/Libs/Util/TypesUtils";
import SubstanceModalModel from "../SubstanceModal.model";
import AtomModal from "View/Components/1.Atoms/AtomModal";
import MoleculeFormSchemaAdd from "../../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaAdd";
import MoleculeFormSchemaCreate from "../../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaCreate";
import { ESubstanceModalType } from "../index";

const SubstanceModal_Public: NFC<typeof SubstanceModalModel> = (props) => {
	const { isShow, form, type } = props;

	const Component = getComponent();

	function getComponent() {
		switch (type) {
			case ESubstanceModalType.ADD:
				return MoleculeFormSchemaAdd;
			case ESubstanceModalType.CREATE:
				return MoleculeFormSchemaCreate;
			default:
				throw new Error("");
		}
	}

	return (
		<AtomModal isShow={isShow}>
			<Component {...(form as any)} />
		</AtomModal>
	);
};

export default SubstanceModal_Public;
