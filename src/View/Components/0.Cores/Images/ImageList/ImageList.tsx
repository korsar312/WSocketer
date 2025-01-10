import { FunctionComponent, SVGProps } from "react";

import IconError from "Assets/Icons/icon-error.svg?react";
import IconCat from "Assets/Icons/icon-cat.svg?react";

import IconChat from "@material-icons/svg/svg/forum/outline.svg?react";
import IconTune from "@material-icons/svg/svg/tune/outline.svg?react";
import IconBug from "@material-icons/svg/svg/bug_report/outline.svg?react";
import IconMessage from "@material-icons/svg/svg/mail/outline.svg?react";
import IconKey from "@material-icons/svg/svg/key/outline.svg?react";
import IconHistory from "@material-icons/svg/svg/schedule/outline.svg?react";
import IconSettings from "@material-icons/svg/svg/settings/outline.svg?react";
import IconArrowRight from "@material-icons/svg/svg/east/outline.svg?react";
import IconBlock from "@material-icons/svg/svg/block/outline.svg?react";
import IconAdd from "@material-icons/svg/svg/add/outline.svg?react";
import IconPlay from "@material-icons/svg/svg/play_arrow/outline.svg?react";
import IconPending from "@material-icons/svg/svg/pending/outline.svg?react";

type TIcons = Record<string, FunctionComponent<SVGProps<SVGSVGElement>>>;

const icons = {
	IconError,
	IconKey,
	IconArrowRight,
	IconHistory,
	IconTune,
	IconChat,
	IconBug,
	IconMessage,
	IconCat,
	IconSettings,
	IconBlock,
	IconAdd,
	IconPlay,
	IconPending,
} satisfies TIcons;

const Images = {
	...icons,
};

export type EImages = keyof typeof Images;

function getImage(image: EImages | string) {
	return (icons as any)[image] || undefined;
}

export default getImage;
