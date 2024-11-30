import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import "Assets/fonts/Montserrat/Montserrat.scss";

enum Family {
	Montserrat = "Montserrat",
}

enum Weight {
	ExtraBold = 800,
	Bold = 700,
	SemiBold = 600,
	Medium = 500,
	Regular = 400,
}

export const FontList: StylesInterface.TFont = {
	Mont_E_10: createFont(10, 12, Family.Montserrat, Weight.ExtraBold),
	Mont_E_14: createFont(14, 16, Family.Montserrat, Weight.ExtraBold),
	Mont_E_18: createFont(18, 20, Family.Montserrat, Weight.ExtraBold),
	Mont_E_22: createFont(22, 24, Family.Montserrat, Weight.ExtraBold),
	Mont_E_26: createFont(26, 28, Family.Montserrat, Weight.ExtraBold),
	Mont_E_30: createFont(30, 32, Family.Montserrat, Weight.ExtraBold),

	Mont_B_10: createFont(10, 12, Family.Montserrat, Weight.Bold),
	Mont_B_14: createFont(14, 16, Family.Montserrat, Weight.Bold),
	Mont_B_18: createFont(18, 20, Family.Montserrat, Weight.Bold),
	Mont_B_22: createFont(22, 24, Family.Montserrat, Weight.Bold),
	Mont_B_26: createFont(26, 28, Family.Montserrat, Weight.Bold),
	Mont_B_30: createFont(30, 32, Family.Montserrat, Weight.Bold),

	Mont_S_10: createFont(10, 12, Family.Montserrat, Weight.SemiBold),
	Mont_S_14: createFont(14, 16, Family.Montserrat, Weight.SemiBold),
	Mont_S_18: createFont(18, 20, Family.Montserrat, Weight.SemiBold),
	Mont_S_22: createFont(22, 24, Family.Montserrat, Weight.SemiBold),
	Mont_S_26: createFont(26, 28, Family.Montserrat, Weight.SemiBold),
	Mont_S_30: createFont(30, 32, Family.Montserrat, Weight.SemiBold),

	Mont_M_10: createFont(10, 12, Family.Montserrat, Weight.Medium),
	Mont_M_14: createFont(14, 16, Family.Montserrat, Weight.Medium),
	Mont_M_18: createFont(18, 20, Family.Montserrat, Weight.Medium),
	Mont_M_22: createFont(22, 24, Family.Montserrat, Weight.Medium),
	Mont_M_26: createFont(26, 28, Family.Montserrat, Weight.Medium),
	Mont_M_30: createFont(30, 32, Family.Montserrat, Weight.Medium),

	Mont_R_10: createFont(10, 12, Family.Montserrat, Weight.Regular),
	Mont_R_14: createFont(14, 16, Family.Montserrat, Weight.Regular),
	Mont_R_18: createFont(18, 20, Family.Montserrat, Weight.Regular),
	Mont_R_22: createFont(22, 24, Family.Montserrat, Weight.Regular),
	Mont_R_26: createFont(26, 28, Family.Montserrat, Weight.Regular),
	Mont_R_30: createFont(30, 32, Family.Montserrat, Weight.Regular),
};

function createFont(fontSize: number, lineHeight: number, fontFamily: Family, fontWeight: Weight): StylesInterface.TFontStyle {
	return { fontSize: `${fontSize}px`, lineHeight: `${lineHeight}px`, fontFamily, fontWeight };
}
