import { NFC } from "Logic/Libs/Util/TypesUtils";
import SubstanceModalCreateModel from "../SubstanceModalCreate.model";
import AtomModal from "View/Components/1.Atoms/AtomModal";
import MoleculeFormSchemaCreate from "View/Components/2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaCreate";

const SubstanceModalCreate_Public: NFC<typeof SubstanceModalCreateModel> = (props) => {
	const { isShow, form } = props;

	return (
		<AtomModal isShow={isShow}>
			<MoleculeFormSchemaCreate {...form} />
		</AtomModal>
	);
};

export default SubstanceModalCreate_Public;
