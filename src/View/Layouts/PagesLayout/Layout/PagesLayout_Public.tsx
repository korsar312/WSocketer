import { Suspense } from "react";
import styles from "./PagesLayout_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import PagesLayoutModel from "../PagesLayout.model";
import BaseAnimation from "View/Components/0.Cores/BaseAnimation";

const PagesLayout_Public: NFC<typeof PagesLayoutModel> = (props) => {
	const { Pages, pathname } = props;

	return (
		<BaseAnimation type={"slice"} deps={pathname} extStyle={styles.pages}>
			<Suspense>
				<div>{Pages}</div>
			</Suspense>
		</BaseAnimation>
	);
};

export default PagesLayout_Public;
