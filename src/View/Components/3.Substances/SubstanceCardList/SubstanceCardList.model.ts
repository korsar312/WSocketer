import { IComponent, TSubstanceCardListWrapper } from "./index";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import styles from "./Layout/SubstanceCardList_Public.styles";
import { TDeepCSSObject } from "View/ViewUtils";

export type TSubstanceCardListSize = {
	rowSize: string;
	minSize: string;
	maxSize: string;
};

function SubstanceCardListModel(props: IComponent) {
	const { type, paramsList, wrapper, styleType, extStyle, sizeType } = props;

	const paperNorm = { ...wrapper, color: wrapper.color || StylesInterface.EColor.PRIME_3 } satisfies TSubstanceCardListWrapper;

	const sizeChoice: TSubstanceCardListSize = (() => {
		switch (sizeType) {
			case "min": {
				return {
					rowSize: "40px",
					maxSize: "1fr",
					minSize: "130px",
				};
			}
			default: {
				return {
					rowSize: "100px",
					maxSize: "1fr",
					minSize: "130px",
				};
			}
		}
	})();

	const styleChoice: TDeepCSSObject = (() => {
		switch (styleType) {
			case "manyRow": {
				return [styles.manyRow(sizeChoice)];
			}
			default: {
				return [styles.oneRow(sizeChoice)];
			}
		}
	})();

	return { type, paramsList, paperNorm, styleChoice, extStyle };
}

export default SubstanceCardListModel;
