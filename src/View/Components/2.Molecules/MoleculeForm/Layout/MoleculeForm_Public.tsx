import { NFC } from "Logic/Libs/Util/TypesUtils";
import { EMoleculeFormField, TMoleculeFormField, TMoleculeFormRow } from "../index";
import { TDeepCSSObject } from "View/ViewUtils";
import { ReactElement } from "react";
import MoleculeFormModel from "../MoleculeForm.model";
import AtomPaper from "View/Components/1.Atoms/AtomPaper";
import AtomDropdown from "View/Components/1.Atoms/AtomDropdown/";
import AtomInput from "View/Components/1.Atoms/AtomInput/";
import AtomButtonForm from "View/Components/1.Atoms/AtomButton/Variables/AtomButtonForm";

import styles from "./MoleculeForm_Public.styles";

import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

const MoleculeForm_Public: NFC<typeof MoleculeFormModel> = (props) => {
	const { schema, extStyle, color, handleSubmit, buttonList } = props;

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
				{buttonList.map((el) => (
					<AtomButtonForm {...el} />
				))}
			</AtomPaper>
		</form>
	);
};

export default MoleculeForm_Public;
