import { Suspense } from "react";
import styles from "./PagesLayout_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import PagesLayoutModel from "../PagesLayout.model";
import BaseAnimation from "View/Components/0.Cores/BaseAnimation";
import TemplateNavMenu from "View/Components/4.Templates/TemplateNavMenu";

const PagesLayout_Public: NFC<typeof PagesLayoutModel> = (props) => {
	const { Pages, pathname } = props;

	return (
		<div css={styles.wrapper}>
			<div css={styles.aside}>
				<TemplateNavMenu />
			</div>

			<div css={styles.pages}>
				<BaseAnimation type={"slice"} deps={pathname} extStyle={styles.scroll}>
					<Suspense>{Pages}</Suspense>
				</BaseAnimation>
			</div>
		</div>
	);
};

export default PagesLayout_Public;
