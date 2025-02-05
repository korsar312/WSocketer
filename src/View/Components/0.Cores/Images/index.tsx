import Model from "./Images.model";
import View from "./Layout/Images_Public";
import { FC } from "react";
import { TDeepCSSObject } from "View/ViewUtils";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { EImages } from "./ImageList/ImageList";

export interface IComponent {
	extStyle?: TDeepCSSObject;
	img: TImageComponent;
	size?: TImagesSize;
	color?: StylesInterface.TColorChoice;
}

export type TImagesSize = 20 | 40 | 60 | "100%";

export type TImageComponent = EImages | string | undefined;

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
