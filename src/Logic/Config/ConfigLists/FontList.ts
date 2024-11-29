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

// 1-ксо 2-роснефть 3-башнефть
export const FontList: StylesInterface.TFont = {
	Mont_B_10: createFont(10, 16, Family.Montserrat, Weight.Bold),
	Mont_M_10: createFont(10, 16, Family.Montserrat, Weight.Medium),
	Mont_M_14: createFont(14, 16, Family.Montserrat, Weight.Medium),
	Mont_M_36: createFont(36, 40, Family.Montserrat, Weight.Medium),
	Mont_S_26: createFont(26, 28, Family.Montserrat, Weight.SemiBold),
};

function createFont(fontSize: number, lineHeight: number, fontFamily: Family, fontWeight: Weight) {
	return { fontSize: `${fontSize}px`, lineHeight: `${lineHeight}px`, fontFamily, fontWeight };
}
