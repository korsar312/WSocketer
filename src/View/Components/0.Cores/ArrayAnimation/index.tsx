import { FC, ReactNode } from "react";
import ArrayAnimation_Public from "./Layout/ArrayAnimation_Public";
import ArrayAnimationModel from "./ArrayAnimation.model";
import { observer } from "mobx-react";
import { TDeepCSSObject } from "../../../ViewUtils";
import { AnimatePresenceProps } from "framer-motion";

export interface IComponent extends Pick<AnimatePresenceProps, "mode"> {
	children: ReactNode[];
	uniqueKey: (item: any, index: number) => string | number;
	type?: TBaseAnimationType;
	extStyle?: TDeepCSSObject;
}

export type TBaseAnimationType = "slice";

const Index: FC<IComponent> = (props) => {
	const model = ArrayAnimationModel(props);
	return <ArrayAnimation_Public {...model} />;
};

export default observer(Index);
