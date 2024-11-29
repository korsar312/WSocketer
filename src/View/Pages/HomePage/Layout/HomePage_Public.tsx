import styles from "./HomePage_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import HomePageModel from "../HomePage.model";
import AtomButtonNav from "../../../Components/1.Atoms/AtomButton/Variables/AtomButtonNav";

const HomePage_Public: NFC<typeof HomePageModel> = (props) => {
	const { handleClick } = props;

	return (
		<div css={styles.wrapper} onClick={handleClick}>
			<AtomButtonNav text={LanguageInterface.EWord.BUTTON} icon={"IconError"} />
			<AtomButtonNav text={LanguageInterface.EWord.BUTTON} icon={"IconError"} isActive />
			<AtomButtonNav text={LanguageInterface.EWord.BUTTON} icon={"IconError"} isActive />
			<AtomButtonNav text={LanguageInterface.EWord.BUTTON} icon={"IconError"} isActive />
		</div>
	);
};

export default HomePage_Public;
