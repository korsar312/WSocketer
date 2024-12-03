import React, { ReactElement, ReactHTML, ReactNode } from "react";
import Model from "./Scroll.model";
import View from "./Layout/Scroll_Public";
import { TDeepCSSObject } from "../../../ViewUtils";

export interface IComponent {
	children: ReactNode;
	extStyle?: TDeepCSSObject;
	extStyleScroll?: TDeepCSSObject;
}

type ds = { [K in keyof ReactHTML]: (props: IComponent) => ReactElement };

const Index: ds = new Proxy({} as ds, {
	get(_target, Tag: keyof ReactHTML) {
		return (props: IComponent): ReactElement => {
			const model = Model({ Tag, ...props });
			return <View {...model} />;
		};
	},
});

export default Index;
