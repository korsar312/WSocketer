import styles from "./MoleculeTextBubble_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import MoleculeTextBubbleModel from "../MoleculeTextBubble.model";
import AtomPaperB from "View/Components/1.Atoms/AtomPaper/Variables/AtomPaperB";
import Text from "../../../0.Cores/Text";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import { TTextBubbleMessage } from "../index";
import { Fragment, ReactElement } from "react";

const MoleculeTextBubble_Public: NFC<typeof MoleculeTextBubbleModel> = (props) => {
	const { message } = props;

	const renderMethod = {
		str(val: string) {
			return textEl(val, StylesInterface.EColor.GREEN_2);
		},

		num(val: number) {
			return textEl(val, StylesInterface.EColor.BLUE_2);
		},

		boo(val: boolean) {
			return textEl(String(val), StylesInterface.EColor.YELLOW_2);
		},

		oth(val: unknown) {
			return textEl(JSON.stringify(val), StylesInterface.EColor.RED_2);
		},

		arr(val: Array<unknown>) {
			return (
				<>
					{textEl("[", StylesInterface.EColor.RED_2)}

					{val.map((el, i) => (
						<Fragment key={i}>
							{textChoice(el)}
							{i !== val.length - 1 && textChoice(", ")}
						</Fragment>
					))}

					{textEl("]", StylesInterface.EColor.RED_2)}
				</>
			);
		},

		obj(val: TTextBubbleMessage) {
			return (
				<>
					{textEl("{", StylesInterface.EColor.PRIME_1)}

					{Object.keys(val).map((el, i) => {
						return (
							<div key={i} css={[styles.pub.mg12l, styles.block]}>
								{textEl(`${el}: `, StylesInterface.EColor.PRIME_1)}
								{textChoice(val[el])}
							</div>
						);
					})}

					{textEl("}", StylesInterface.EColor.PRIME_1)}
				</>
			);
		},
	} satisfies Record<string, (val: any) => ReactElement>;

	function textChoice(val: unknown): ReactElement {
		const { str, num, boo, oth, arr, obj } = renderMethod;

		if (typeof val === "string") return str(val);
		if (typeof val === "number") return num(val);
		if (typeof val === "boolean") return boo(val);
		if (typeof val === "object" && val !== null) return Array.isArray(val) ? arr(val) : obj(val as TTextBubbleMessage);

		return oth(val);
	}

	function textEl(text: LanguageInterface.TAllWord, color: StylesInterface.EColor) {
		return <Text text={text} font={StylesInterface.EFont.Mont_S_18} color={color} />;
	}

	return (
		<AtomPaperB>
			<div css={[styles.wrapper, styles.pub.pd8]}>{textChoice(message)}</div>
		</AtomPaperB>
	);
};

export default MoleculeTextBubble_Public;
