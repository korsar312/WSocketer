import styles from "./ExampleMolecul_Public.styles";
import ExampleMoleculModel from "../ExampleMolecul.model";
import { NFC } from "Logic/Libs/Util/TypesUtils";

const ExampleMolecul_Public: NFC<typeof ExampleMoleculModel> = (props) => {
	const { handleClick } = props;

	return <div css={styles.wrapper} onClick={handleClick}></div>;
};

export default ExampleMolecul_Public;
