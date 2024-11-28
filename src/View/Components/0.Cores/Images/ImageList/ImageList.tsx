import { FunctionComponent, SVGProps } from "react";

import IconError from "Assets/Icons/icon-error.svg?react";
import IconArrowRight from "Assets/Icons/icon-arrow.svg?react";

import IconApple from "Assets/Icons/icon-apple.svg?react";
import IconBag from "Assets/Icons/icon-bag.svg?react";
import IconDesktop from "Assets/Icons/icon-desktop.svg?react";
import IconGuy from "Assets/Icons/icon-guy.svg?react";
import IconMessage from "Assets/Icons/icon-message.svg?react";
import IconPhone from "Assets/Icons/icon-phone.svg?react";

type TIcons = Record<string, FunctionComponent<SVGProps<SVGSVGElement>>>;

const icons = {
	IconError,
	IconArrowRight,
	IconApple,
	IconBag,
	IconDesktop,
	IconGuy,
	IconMessage,
	IconPhone,
} satisfies TIcons;

const Images = {
	...icons,
};

export type EImages = keyof typeof Images;

function getImage(image: EImages | string) {
	return (icons as any)[image] || undefined;
}

export default getImage;
