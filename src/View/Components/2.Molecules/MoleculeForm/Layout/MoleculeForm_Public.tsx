import { NFC } from "Logic/Libs/Util/TypesUtils";
import { EMoleculeFormField, TMoleculeFormField, TMoleculeFormRow } from "../index";
import { TDeepCSSObject } from "View/ViewUtils";
import { ReactElement } from "react";
import MoleculeFormModel from "../MoleculeForm.model";
import AtomPaper from "View/Components/1.Atoms/AtomPaper";
import AtomDropdownForm from "View/Components/1.Atoms/AtomDropdown/Variables/AtomDropdownForm";
import AtomInputForm from "View/Components/1.Atoms/AtomInput/Variables/AtomInputForm";
import AtomButtonForm from "View/Components/1.Atoms/AtomButton/Variables/AtomButtonForm";
import styles from "./MoleculeForm_Public.styles";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import Text from "View/Components/0.Cores/Text";

const MoleculeForm_Public: NFC<typeof MoleculeFormModel> = (props) => {
	const { schema, extStyle, color, handleSubmit, buttonList } = props;

	function typeChoice(field: TMoleculeFormRow, id: number): ReactElement {
		const { value: element, extStyle } = field;
		const value = Array.isArray(element) ? element.map((el, i) => typeChoice(el, i)) : fieldChoice(element);

		return elementWrapper(value, id, extStyle);
	}

	function fieldChoice(field: TMoleculeFormField) {
		switch (field.type) {
			case EMoleculeFormField.TEXT:
				return <Text {...field.options} />;
			case EMoleculeFormField.INPUT:
				return <AtomInputForm {...field.options} />;
			case EMoleculeFormField.SELECT:
				return <AtomDropdownForm {...field.options} />;
		}
	}

	function elementWrapper(fields: ReactElement | ReactElement[], id: number, extStyle?: TDeepCSSObject) {
		return (
			<div key={id} css={extStyle}>
				{fields}
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit}>
			<AtomPaper extStyle={[styles.form, extStyle]} color={color}>
				{typeChoice(schema, 1)}
			</AtomPaper>

			<AtomPaper extStyle={styles.bottom} color={StylesInterface.EColor.SECOND_4}>
				{buttonList.map((el) => (
					<AtomButtonForm key={el.text} {...el} />
				))}
			</AtomPaper>
		</form>
	);
};

export default MoleculeForm_Public;
