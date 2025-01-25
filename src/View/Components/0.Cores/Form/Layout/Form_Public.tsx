import FormModel from "../Form.model";
import { NFC } from "Logic/Libs/Util/TypesUtils";

const Form_Public: NFC<typeof FormModel> = (props) => {
	const { handleSubmit, children } = props;

	return <form onSubmit={handleSubmit}>{children}</form>;
};

export default Form_Public;
