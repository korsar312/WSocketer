import { NFC } from "Logic/Libs/Util/TypesUtils";
import ChatPageModel from "../WidgetWsInstance.model";
import MoleculeInputControl from "View/Components/2.Molecules/MoleculeInputControl";
import styles from "./WidgetWsInstance_Public.styles";
import TemplateWsMessage from "View/Components/4.Templates/TemplateWsMessage";

const WidgetWsInstance_Public: NFC<typeof ChatPageModel> = (props) => {
	const { wsInstance, openConnect } = props;

	return (
		<div css={styles.chat}>
			<MoleculeInputControl leftBtn={{ icon: "IconTune" }} rightBtn={{ icon: "IconBlock", click: openConnect }} />

			<div css={[styles.content, styles.pub.f1]}>
				<TemplateWsMessage wsInstance={wsInstance} />
			</div>

			<MoleculeInputControl leftBtn={{ icon: "IconTune" }} rightBtn={{ icon: "IconTune" }} />
		</div>
	);
};

export default WidgetWsInstance_Public;