import styles from "./HomePage_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import HomePageModel from "../HomePage.model";
import Paper from "../../../Components/0.Cores/Paper";
import AtomButton from "../../../Components/1.Atoms/AtomButton";
import { LanguageInterface } from "../../../../Logic/Core/Modules/Language/Language.interface";
import { StylesInterface } from "../../../../Logic/Core/Modules/Styles/Styles.interface";
import AtomButtonMain from "../../../Components/1.Atoms/AtomButton/Variables/AtomButtonMain";

const HomePage_Public: NFC<typeof HomePageModel> = (props) => {
	const { handleClick } = props;

	return (
		<div css={styles.wrapper} onClick={handleClick}>
			<Paper />

			<AtomButtonMain text={LanguageInterface.EWord.BUTTON} />
		</div>
	);
};

export default HomePage_Public;
