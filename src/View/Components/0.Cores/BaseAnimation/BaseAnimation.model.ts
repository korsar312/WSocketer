import { IComponent } from "./index";
import { ComponentProps } from "react";
import { motion } from "framer-motion";
import styles from "./Layout/BaseAnimation_Public.styles";

function BaseAnimationModel(props: IComponent) {
	const { deps, children, type, extStyle, mode } = props;

	const stylesType = ((): ComponentProps<typeof motion.div> => {
		switch (type) {
			case "sliceBlock": {
				return {
					initial: { ...styles.out },
					exit: { ...styles.out },
					animate: { ...styles.in },
					transition: { duration: 0.25 },
				};
			}
			default: {
				return {
					initial: { ...styles.out, ...styles.abs },
					exit: { ...styles.out, ...styles.abs },
					animate: { ...styles.in, ...styles.abs },
					transition: { duration: 0.25 },
				};
			}
		}
	})();

	return { deps, children, stylesType, extStyle, mode };
}

export default BaseAnimationModel;
