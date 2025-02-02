import { IComponent } from "./index";
import { ComponentProps, useEffect, useState } from "react";
import { motion } from "framer-motion";

function ArrayAnimationModel(props: IComponent) {
	const { children, type, extStyle, uniqueKey, mode } = props;

	const [isFirstRender, setIsFirstRender] = useState(true);

	useEffect(() => {
		setIsFirstRender(false);
	}, []);

	const stylesType = (function (): ComponentProps<typeof motion.div> {
		switch (type) {
			case "sliceA":
				return {
					transition: { duration: 0.25 },
					initial: isFirstRender ? false : { opacity: 0, x: -50 },
					animate: { opacity: 1, x: 0 },
					exit: { opacity: 0, y: -100 },
				};
			default:
				return {
					transition: { duration: 0.25 },
					initial: isFirstRender ? false : { opacity: 0 },
					animate: { opacity: 1 },
					exit: { opacity: 0 },
				};
		}
	})();

	return { children, stylesType, extStyle, uniqueKey, mode };
}

export default ArrayAnimationModel;
