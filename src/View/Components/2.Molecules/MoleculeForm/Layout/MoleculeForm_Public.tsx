import { NFC } from "Logic/Libs/Util/TypesUtils";
import MoleculeFormModel from "../MoleculeForm.model";
import AtomPaper from "../../../1.Atoms/AtomPaper";
import { EMoleculeFormField, TMoleculeFormField, TMoleculeFormRow } from "../index";
import { TDeepCSSObject } from "../../../../ViewUtils";
import { ReactElement } from "react";
import styles from "./MoleculeForm_Public.styles";
import AtomDropdown from "../../../1.Atoms/AtomDropdown/";
import AtomInput from "../../../1.Atoms/AtomInput/";

const MoleculeForm_Public: NFC<typeof MoleculeFormModel> = (props) => {
	const { schema, extStyle, color, handleSubmit } = props;

	function typeChoice(field: TMoleculeFormRow): ReactElement {
		const { value: element, extStyle } = field;
		const value = Array.isArray(element) ? element.map((el) => typeChoice(el)) : fieldChoice(element);

		return elementWrapper(value, extStyle);
	}

	function fieldChoice(field: TMoleculeFormField) {
		switch (field.type) {
			case EMoleculeFormField.TEXT:
				return <AtomInput {...field.options} />;
			case EMoleculeFormField.SELECT:
				return <AtomDropdown {...field.options} />;
		}
	}

	function elementWrapper(fields: ReactElement | ReactElement[], extStyle?: TDeepCSSObject) {
		return <div css={extStyle}>{fields}</div>;
	}

	return (
		<AtomPaper color={color}>
			<form onSubmit={handleSubmit} css={[styles.wrapper, extStyle]}>
				{typeChoice(schema)}

				<button type="submit">Отправить</button>
			</form>
		</AtomPaper>
	);
};

export default MoleculeForm_Public;
