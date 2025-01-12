import { NFC } from "Logic/Libs/Util/TypesUtils";
import { CSSObject } from "@emotion/react";
import ImagesModel from "../Images.model";
import { observer } from "mobx-react";
import styles from "./Images_Public.styles";
import { GlobalVar } from "Logic/Config/GlobalVar";
import Util from "Logic/Libs/Util";

const SVGWrapper: NFC<typeof ImagesModel> = (props) => {
	const { imageIcon: ImageIcon, img, color, extStyle, handleErrorImage, isShow, size } = props;

	function imageComponent(style: CSSObject[]) {
		if (!img || !isShow) return null;
		if (ImageIcon) return <ImageIcon css={style} />;

		return <img css={style} draggable={false} onError={handleErrorImage} src={GlobalVar.IMAGE_URL + img} />;
	}

	return imageComponent([styles.wrapper, styles.size(size), styles.color(color), ...Util.getArray(extStyle)]);
};

export default observer(SVGWrapper);
