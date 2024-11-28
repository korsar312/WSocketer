import { IComponent } from "./index";
import { SyntheticEvent, useEffect, useState } from "react";
import IconError from "Assets/Icons/icon-error.svg";
import getImage from "./ImageList/ImageList";

function ImagesModel(props: IComponent) {
	const { img, color, extStyle, size } = props;

	useEffect(() => {
		setIsShow(true);
	}, [img]);

	const [isShow, setIsShow] = useState(true);

	const imageIcon = img && getImage(img);

	function handleErrorImage(e: SyntheticEvent<HTMLImageElement, Event>) {
		const target = e.target as HTMLImageElement;
		target.onerror = null;
		target.src = IconError;
	}

	return { imageIcon, img, color, extStyle, handleErrorImage, isShow, size };
}

export default ImagesModel;
