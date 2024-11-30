import { StylesDomain } from "./Implement/Domain/Styles.domain";
import { StylesService } from "./Implement/Service/Styles.service";
import { CSSObject } from "@emotion/react";

export namespace StylesInterface {
	/**
	 * Основной стилевой объект
	 */
	export type TObj = {
		color: TColor;
		font: TFont;
	};

	export type TColorRGBFormat = `rgba(${string},${number})`;
	export type TColorHEXFormat = `#${string}`;

	export enum EColor {
		WHITE_1 = "WHITE_1",
		WHITE_2 = "WHITE_2",
		WHITE_3 = "WHITE_3",
		WHITE_4 = "WHITE_4",

		BLACK_1 = "BLACK_1",
		BLACK_2 = "BLACK_2",
		BLACK_3 = "BLACK_3",
		BLACK_4 = "BLACK_4",

		GREEN_1 = "GREEN_1",
		GREEN_2 = "GREEN_2",
		GREEN_3 = "GREEN_3",
		GREEN_4 = "GREEN_4",

		BLUE_1 = "BLUE_1",
		BLUE_2 = "BLUE_2",
		BLUE_3 = "BLUE_3",
		BLUE_4 = "BLUE_4",

		YELLOW_1 = "YELLOW_1",
		YELLOW_2 = "YELLOW_2",
		YELLOW_3 = "YELLOW_3",
		YELLOW_4 = "YELLOW_4",

		RED_1 = "RED_1",
		RED_2 = "RED_2",
		RED_3 = "RED_3",
		RED_4 = "RED_4",
	}

	export type TColor = Record<EColor, Record<ETheme, TColorHEXFormat>>;

	export enum EFont {
		Mont_E_10 = "Mont_E_10",
		Mont_E_14 = "Mont_E_14",
		Mont_E_18 = "Mont_E_18",
		Mont_E_22 = "Mont_E_22",
		Mont_E_26 = "Mont_E_26",
		Mont_E_30 = "Mont_E_30",

		Mont_B_10 = "Mont_B_10",
		Mont_B_14 = "Mont_B_14",
		Mont_B_18 = "Mont_B_18",
		Mont_B_22 = "Mont_B_22",
		Mont_B_26 = "Mont_B_26",
		Mont_B_30 = "Mont_B_30",

		Mont_S_10 = "Mont_S_10",
		Mont_S_14 = "Mont_S_14",
		Mont_S_18 = "Mont_S_18",
		Mont_S_22 = "Mont_S_22",
		Mont_S_26 = "Mont_S_26",
		Mont_S_30 = "Mont_S_30",

		Mont_M_10 = "Mont_M_10",
		Mont_M_14 = "Mont_M_14",
		Mont_M_18 = "Mont_M_18",
		Mont_M_22 = "Mont_M_22",
		Mont_M_26 = "Mont_M_26",
		Mont_M_30 = "Mont_M_30",

		Mont_R_10 = "Mont_R_10",
		Mont_R_14 = "Mont_R_14",
		Mont_R_18 = "Mont_R_18",
		Mont_R_22 = "Mont_R_22",
		Mont_R_26 = "Mont_R_26",
		Mont_R_30 = "Mont_R_30",
	}

	export type TFont = Record<keyof typeof EFont, TFontStyle>;
	export type TFontStyle = Pick<CSSObject, "fontSize" | "lineHeight" | "fontFamily" | "fontWeight">;

	/**
	 * Выбор цвета
	 */
	export type TColorChoice = EColor | undefined | "null" | false;

	export enum ETheme {
		DARK = "DARK",
		LIGHT = "LIGHT",
	}

	/**
	 * Домен и сервис
	 */
	export interface IModules {
		domain: StylesDomain;
		service: StylesService;
	}
}
