import React, { ReactHTML, ReactNode } from "react";
import Model from "./Scroll.model";
import View from "./Layout/Scroll_Public";
import { TDeepCSSObject } from "View/ViewUtils";

export interface IComponent extends TExtendComponent {
	children: ReactNode;
	extStyle?: TDeepCSSObject;
	extStyleScroll?: TDeepCSSObject;
	noScrollBar?: boolean;
}

type TExtendComponent = Partial<Pick<React.RefAttributes<HTMLDivElement>, "ref"> & Pick<React.DOMAttributes<HTMLElement>, "onScroll">>;
type TElementComponent = { [K in TScrollAvailableEl]: (props: IComponent) => any };

export type TScrollAvailableEl = keyof Pick<ReactHTML, "div" | "span">;

const proxyEl = {} as TElementComponent;

const Index: TElementComponent = new Proxy({} as TElementComponent, {
	get(_target, Tag: TScrollAvailableEl) {
		if (!proxyEl[Tag]) {
			proxyEl[Tag] = React.forwardRef<HTMLDivElement, IComponent>((props, ref) => {
				const model = Model({ Tag, ref, ...props });
				return <View {...model} />;
			});
		}

		return proxyEl[Tag];
	},
});

export default Index;
