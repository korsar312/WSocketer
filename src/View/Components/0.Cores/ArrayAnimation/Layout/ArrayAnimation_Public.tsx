import ArrayAnimationModel from "../ArrayAnimation.model";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./ArrayAnimation_Public.styles";
import React from "react";

const ArrayAnimation_Public: NFC<typeof ArrayAnimationModel> = (props) => {
	const { children, uniqueKey, stylesType, extStyle, mode } = props;

	return (
		<AnimatePresence mode={mode}>
			{children.map((item, index) => (
				<motion.div css={[styles.wrapper, extStyle]} key={uniqueKey(item, index)} layout {...stylesType}>
					{React.isValidElement(item) ? React.cloneElement(item, { key: uniqueKey(item, index) }) : item}
				</motion.div>
			))}
		</AnimatePresence>
	);
};

export default ArrayAnimation_Public;
