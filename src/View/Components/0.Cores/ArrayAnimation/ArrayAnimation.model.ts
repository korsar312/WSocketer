import { IComponent } from "./index";
import { ComponentProps } from "react";
import { motion } from "framer-motion";

function ArrayAnimationModel(props: IComponent) {
	const { children, type, extStyle, uniqueKey, mode } = props;

	const stylesType = (function (): ComponentProps<typeof motion.div> {
		switch (type) {
			case "sliceA":
				return {
					transition: { duration: 0.25 },
					initial: { opacity: 0, x: -50 },
					animate: { opacity: 1, x: 0 },
					exit: { opacity: 0, y: -100 },
				};
			default:
				return {
					transition: { duration: 0.25 },
					initial: { opacity: 0, x: -50 },
					animate: { opacity: 1, x: 0 },
					exit: { opacity: 0, x: 50 },
				};
		}
	})();

	return { children, stylesType, extStyle, uniqueKey, mode };
}

export default ArrayAnimationModel;
