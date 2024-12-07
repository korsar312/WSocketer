import { Styles } from "Styles/Styles";
import { Target } from "framer-motion";

class BaseAnimation_PublicStyles extends Styles {
	public abs = {
		...this.mixins.absolute,
	} as Target;

	public out: Target = {
		opacity: 0,
	};

	public in: Target = {
		opacity: 1,
	};
}

export default new BaseAnimation_PublicStyles();
