import { NFC } from "Logic/Libs/Util/TypesUtils";
import SubstanceModalCreateModel from "../SubstanceModalCreate.model";
import AtomModal from "../../../1.Atoms/AtomModal";
import MoleculeFormCreate from "../../../2.Molecules/MoleculeForm/Variables/MoleculeFormCreate";

const SubstanceModalCreate_Public: NFC<typeof SubstanceModalCreateModel> = (props) => {
	const { isShow, form } = props;

	return (
		<AtomModal isShow={isShow}>
			<MoleculeFormCreate {...form} />
		</AtomModal>
	);
};

export default SubstanceModalCreate_Public;
