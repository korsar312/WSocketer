import { FC, ReactNode } from "react";
import { TDeepCSSObject } from "View/ViewUtils";
import { AnimatePresenceProps } from "framer-motion";
import ArrayAnimation_Public from "./Layout/ArrayAnimation_Public";
import ArrayAnimationModel from "./ArrayAnimation.model";

export interface IComponent extends Pick<AnimatePresenceProps, "mode"> {
	children: ReactNode[];
	uniqueKey: (item: any, index: number) => string | number;
	type?: TBaseAnimationType;
	extStyle?: TDeepCSSObject;
}

export type TBaseAnimationType = "slice" | "sliceA";

const Index: FC<IComponent> = (props) => {
	const model = ArrayAnimationModel(props);
	return <ArrayAnimation_Public {...model} />;
};

export default Index;
