import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import styles from "./SubstanceAsideMenu_Public.styles";
import SubstanceAsideMenuModel from "../SubstanceAsideMenu.model";
import Paper from "View/Components/0.Cores/Paper";
import AtomButtonNav from "View/Components/1.Atoms/AtomButton/Variables/AtomButtonNav";
import Text from "View/Components/0.Cores/Text";
import Images from "View/Components/0.Cores/Images";

const SubstanceAsideMenu_Public: NFC<typeof SubstanceAsideMenuModel> = (props) => {
	const { head, titleBtn, anyBtn } = props;

	return (
		<Paper>
			<div css={styles.wrapper()}>
				<div css={styles.work}>
					<div css={styles.headWrap}>
						<Images img={head.icon} color={StylesInterface.EColor.BLACK_1} />
						<Text text={head.title} font={StylesInterface.EFont.Mont_S_26} color={StylesInterface.EColor.BLACK_1} />
					</div>

					<div css={styles.btnField}>
						<div css={styles.btnWrap}>
							<AtomButtonNav isFullWidth {...titleBtn} />
						</div>

						<div css={styles.btnWrap}>{anyBtn?.map((el) => <AtomButtonNav key={el.text} isFullWidth {...el} />)}</div>
					</div>
				</div>

				<div css={styles.catWrap}>
					<Images img={"IconCat"} size={"100%"} color={StylesInterface.EColor.WHITE_2} />
				</div>

				<div css={styles.btnWrap}>
					<AtomButtonNav {...titleBtn} />
				</div>
			</div>
		</Paper>
	);
};

export default SubstanceAsideMenu_Public;
