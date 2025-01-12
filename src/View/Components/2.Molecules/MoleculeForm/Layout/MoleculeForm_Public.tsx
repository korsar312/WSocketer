import { NFC } from "Logic/Libs/Util/TypesUtils";
import MoleculeFormModel from "../MoleculeForm.model";
import AtomPaper from "../../../1.Atoms/AtomPaper";
import { EMoleculeFormField, TMoleculeFormField, TMoleculeFormRow } from "../index";
import { TDeepCSSObject } from "../../../../ViewUtils";
import { ReactElement } from "react";
import styles from "./MoleculeForm_Public.styles";
import AtomDropdown from "../../../1.Atoms/AtomDropdown/";
import AtomInput from "../../../1.Atoms/AtomInput/";
import AtomButtonForm from "../../../1.Atoms/AtomButton/Variables/AtomButtonForm";
import { LanguageInterface } from "../../../../../Logic/Core/Modules/Language/Language.interface";
import { StylesInterface } from "../../../../../Logic/Core/Modules/Styles/Styles.interface";

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
		<form onSubmit={handleSubmit}>
			<AtomPaper extStyle={[styles.form, extStyle]} color={color}>
				{typeChoice(schema)}
			</AtomPaper>

			<AtomPaper extStyle={styles.bottom} color={StylesInterface.EColor.SECOND_4}>
				<AtomButtonForm text={LanguageInterface.EWord.CREATE_WS} />
			</AtomPaper>
		</form>
	);
};

export default MoleculeForm_Public;
