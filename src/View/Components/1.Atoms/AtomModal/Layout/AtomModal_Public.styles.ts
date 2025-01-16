import { Styles } from "Styles/Styles";
import { CSSObject, keyframes } from "@emotion/react";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

class AtomModal_PublicStyles extends Styles {
	private timeAnim = this.variables.timeFastTransition;

	private open = keyframes`
		from {opacity: 0}
		to {opacity: 1}
    `;

	private close = keyframes`
		from {opacity: 1}		
		to {opacity: 0}
    `;

	private openAnim = `${this.open} ${this.timeAnim} forwards`;
	private closeAnim = `${this.close} ${this.timeAnim} forwards`;

	public wrapper: CSSObject = {
		overflow: "visible",
		background: "none",
		border: "none",
		outline: "none",
		padding: 0,

		transition: "display 1s allow-discrete, overlay 1s allow-discrete",
		animation: this.closeAnim,

		"&[open]": { animation: this.openAnim },
		"&[open]::backdrop": { animation: this.openAnim },

		"&::backdrop": {
			animation: this.closeAnim,
			background: this.getColors(StylesInterface.EColor.PRIME_1, 0.7),
		},
	};
}

export default new AtomModal_PublicStyles();
