import { NFC } from "Logic/Libs/Util/TypesUtils";
import { EMoleculeFormSchemaField, TMoleculeFormSchemaField, TMoleculeFormSchemaRow } from "../index";
import { TDeepCSSObject } from "View/ViewUtils";
import { ReactElement } from "react";
import MoleculeFormSchemaModel from "../MoleculeFormSchema.model";
import AtomPaper from "View/Components/1.Atoms/AtomPaper";
import AtomDropdownForm from "View/Components/1.Atoms/AtomDropdown/Variables/AtomDropdownForm";
import AtomInputForm from "View/Components/1.Atoms/AtomInput/Variables/AtomInputForm";
import AtomButtonForm from "View/Components/1.Atoms/AtomButton/Variables/AtomButtonForm";
import styles from "./MoleculeFormSchema_Public.styles";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import Text from "View/Components/0.Cores/Text";
import Form from "../../../0.Cores/Form";

const MoleculeFormSchema_Public: NFC<typeof MoleculeFormSchemaModel> = (props) => {
	const { schema, extStyle, color, form, buttonList } = props;

	function typeChoice(field: TMoleculeFormSchemaRow, id: number): ReactElement {
		const { value: element, extStyle } = field;
		const value = Array.isArray(element) ? element.map((el, i) => typeChoice(el, i)) : fieldChoice(element);

		return elementWrapper(value, id, extStyle);
	}

	function fieldChoice(field: TMoleculeFormSchemaField) {
		switch (field.type) {
			case EMoleculeFormSchemaField.TEXT:
				return <Text {...field.options} />;
			case EMoleculeFormSchemaField.INPUT:
				return <AtomInputForm {...field.options} />;
			case EMoleculeFormSchemaField.SELECT:
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
		<Form {...form}>
			<AtomPaper extStyle={[styles.form, extStyle]} color={color}>
				{typeChoice(schema, 1)}
			</AtomPaper>

			<AtomPaper extStyle={styles.bottom} color={StylesInterface.EColor.SECOND_4}>
				{buttonList.map((el) => (
					<AtomButtonForm key={el.text} {...el} />
				))}
			</AtomPaper>
		</Form>
	);
};

export default MoleculeFormSchema_Public;
