import { Suspense } from "react";
import styles from "./PagesLayout_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import PagesLayoutModel from "../PagesLayout.model";
import BaseAnimation from "View/Components/0.Cores/BaseAnimation";
import TemplateNavMenu from "View/Components/4.Templates/TemplateNavMenu";
import Scroll from "View/Components/0.Cores/Scroll";

const PagesLayout_Public: NFC<typeof PagesLayoutModel> = (props) => {
	const { Pages, pathname } = props;

	return (
		<div css={styles.wrapper}>
			<div css={styles.aside}>
				<TemplateNavMenu />
			</div>

			<div css={styles.pagesWrap}>
				<BaseAnimation type={"slice"} deps={pathname}>
					<Suspense>
						<Scroll.div extStyle={styles.pages} extStyleScroll={styles.scroll}>
							{Pages}
							{Pages}
							{Pages}
							{Pages}
							{Pages}
						</Scroll.div>
					</Suspense>
				</BaseAnimation>
			</div>
		</div>
	);
};

export default PagesLayout_Public;
