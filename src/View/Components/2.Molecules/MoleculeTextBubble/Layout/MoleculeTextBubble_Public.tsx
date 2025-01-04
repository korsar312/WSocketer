import styles from "./MoleculeTextBubble_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import MoleculeTextBubbleModel from "../MoleculeTextBubble.model";
import Text from "../../../0.Cores/Text";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import { Fragment, ReactElement } from "react";
import { EMoleculeTextBubbleTextVar, TMoleculeTextBubbleText } from "../index";

export type TObjMessage = Record<string | number, unknown>;

const MoleculeTextBubble_Public: NFC<typeof MoleculeTextBubbleModel> = (props) => {
	const { message, colorBg, normalizeText } = props;

	const renderMethod = {
		str(val: string) {
			return textEl(val, normalizeText.str);
		},

		num(val: number) {
			return textEl(val, normalizeText.num);
		},

		boo(val: boolean) {
			return textEl(String(val), normalizeText.boo);
		},

		oth(val: unknown) {
			return textEl(JSON.stringify(val), normalizeText.oth);
		},

		arr(val: Array<unknown>) {
			return (
				<>
					{textEl("[", normalizeText.arr)}

					{val.map((el, i) => (
						<Fragment key={i}>
							{textChoice(el)}
							{i !== val.length - 1 && textChoice(", ")}
						</Fragment>
					))}

					{textEl("]", normalizeText.arr)}
				</>
			);
		},

		obj(val: TObjMessage) {
			return (
				<>
					{textEl("{", normalizeText.obj)}

					{Object.keys(val).map((el, i) => {
						return (
							<div key={i} css={[styles.pub.mg12l, styles.block]}>
								{textEl(`${el}: `, normalizeText.obj)}
								{textChoice(val[el])}
							</div>
						);
					})}

					{textEl("}", normalizeText.obj)}
				</>
			);
		},
	} satisfies Record<EMoleculeTextBubbleTextVar, (val: any) => ReactElement>;

	function textChoice(val: unknown): ReactElement {
		const { str, num, boo, oth, arr, obj } = renderMethod;

		if (typeof val === "string") return str(val);
		if (typeof val === "number") return num(val);
		if (typeof val === "boolean") return boo(val);
		if (typeof val === "object" && val !== null) return Array.isArray(val) ? arr(val) : obj(val as TObjMessage);

		return oth(val);
	}

	function textEl(text: LanguageInterface.TAllWord, vars: TMoleculeTextBubbleText) {
		return <Text text={text} {...vars} />;
	}

	return <div css={[styles.wrapper(colorBg), styles.pub.pd8]}>{textChoice(message)}</div>;
};

export default MoleculeTextBubble_Public;
