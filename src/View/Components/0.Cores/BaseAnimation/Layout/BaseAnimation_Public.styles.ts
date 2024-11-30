import { Styles } from "Styles/Styles";
import { Target } from "framer-motion";

class BaseAnimation_PublicStyles extends Styles {
	private absolut = {
		...this.mixins.absolute,
	} as Target;

	public absOut: Target = {
		...this.absolut,
		opacity: 0,
	};

	public absIn: Target = {
		...this.absolut,
		opacity: 1,
	};
}

export default new BaseAnimation_PublicStyles();
