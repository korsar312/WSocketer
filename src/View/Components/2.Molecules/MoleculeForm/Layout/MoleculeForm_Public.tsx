import { NFC } from "Logic/Libs/Util/TypesUtils";
import MoleculeFormModel from "../MoleculeForm.model";
import AtomPaper from "../../../1.Atoms/AtomPaper";
import { EMoleculeFormField, TMoleculeFormField, TMoleculeFormRow } from "../index";
import AtomInputFull from "../../../1.Atoms/AtomInput/Variables/AtomInputFull";
import { TDeepCSSObject } from "../../../../ViewUtils";
import { ReactElement } from "react";
import AtomDropdownMain from "../../../1.Atoms/AtomDropdown/Variables/AtomDropdownMain";
import styles from "./MoleculeForm_Public.styles";

const MoleculeForm_Public: NFC<typeof MoleculeFormModel> = (props) => {
	const { schema, extStyle, color } = props;

	function typeChoice(field: TMoleculeFormRow): ReactElement {
		const { value: element, extStyle } = field;
		const value = Array.isArray(element) ? element.map((el) => typeChoice(el)) : fieldChoice(element);

		return elementWrapper(value, extStyle);
	}

	function fieldChoice(field: TMoleculeFormField) {
		switch (field.type) {
			case EMoleculeFormField.TEXT:
				return <AtomInputFull {...field.options} />;
			case EMoleculeFormField.SELECT:
				return <AtomDropdownMain {...field.options} />;
		}
	}

	function elementWrapper(fields: ReactElement | ReactElement[], extStyle?: TDeepCSSObject) {
		return <div css={extStyle}>{fields}</div>;
	}

	return (
		<AtomPaper extStyle={[styles.wrapper, extStyle]} color={color}>
			{typeChoice(schema)}
		</AtomPaper>
	);
};

export default MoleculeForm_Public;
