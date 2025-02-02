import { IComponent, TSubstanceCardListWrapper } from "./index";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import styles from "./Layout/SubstanceCardList_Public.styles";
import { TDeepCSSObject } from "View/ViewUtils";

function SubstanceCardListModel(props: IComponent) {
	const { type, paramsList, wrapper, styleType } = props;

	const paperNorm = { ...wrapper, color: wrapper.color || StylesInterface.EColor.PRIME_3 } satisfies TSubstanceCardListWrapper;

	const styleChoice: TDeepCSSObject = (() => {
		switch (styleType) {
			case "manyRow": {
				return [styles.dir, styles.sizeList2];
			}
			default: {
				return [styles.oneRow, styles.sizeList1];
			}
		}
	})();

	return { type, paramsList, paperNorm, styleChoice };
}

export default SubstanceCardListModel;
