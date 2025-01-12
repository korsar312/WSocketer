import { FC, ReactNode } from "react";
import { TDeepCSSObject } from "View/ViewUtils";
import { AnimatePresenceProps } from "framer-motion";
import Model from "./BaseAnimation.model";
import View from "./Layout/BaseAnimation_Public";
import { observer } from "mobx-react";

export interface IComponent extends Pick<AnimatePresenceProps, "mode"> {
	children: ReactNode;
	type?: TBaseAnimationType;
	deps?: any;
	extStyle?: TDeepCSSObject;
}

export type TBaseAnimationType = "slice" | "sliceBlock";

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default observer(Index);
