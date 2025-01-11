import styles from "./FilterPage_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import FilterPageModel from "../FilterPage.model";
import MoleculeForm, { EMoleculeFormField } from "../../../Components/2.Molecules/MoleculeForm";

const FilterPage_Public: NFC<typeof FilterPageModel> = (props) => {
	const {} = props;

	return (
		<div css={styles.wrapper}>
			<MoleculeForm
				schema={{
					value: [
						{
							value: [
								{ value: { name: "", type: EMoleculeFormField.TEXT } },
								{ value: { name: "", type: EMoleculeFormField.SELECT, options: { text: [] } } },
								{ value: { name: "", type: EMoleculeFormField.SELECT, options: { text: [] } } },
							],
						},
						{ value: { name: "", type: EMoleculeFormField.SELECT, options: { text: [] } } },
						{ value: { name: "", type: EMoleculeFormField.TEXT } },
					],
				}}
			/>
		</div>
	);
};

export default FilterPage_Public;
