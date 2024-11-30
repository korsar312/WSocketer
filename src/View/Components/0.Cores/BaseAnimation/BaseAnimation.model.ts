import { IComponent } from "./index";
import { ComponentProps } from "react";
import { motion } from "framer-motion";
import styles from "./Layout/BaseAnimation_Public.styles";

function BaseAnimationModel(props: IComponent) {
	const { deps, children, type, extStyle, mode } = props;

	const stylesType = ((): ComponentProps<typeof motion.div> => {
		switch (type) {
			default: {
				return {
					initial: styles.absOut,
					exit: styles.absOut,
					animate: styles.absIn,
					transition: { duration: 0.25 },
				};
			}
		}
	})();

	return { deps, children, stylesType, extStyle, mode };
}

export default BaseAnimationModel;
