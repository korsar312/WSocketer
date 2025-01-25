import styles from "./AtomButton_Public.styles";
import AtomButtonModel from "../AtomButton.model";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import Text from "View/Components/0.Cores/Text";
import Images from "View/Components/0.Cores/Images";
import { TAtomButtonIcon } from "../index";

const AtomButton_Public: NFC<typeof AtomButtonModel> = (props) => {
	const { textChanged, color, extStyles, rightIcon, leftIcon, isFullWidth, handleClick, type, isDisable } = props;

	function iconRender(icon: TAtomButtonIcon) {
		return (
			<div css={[icon.groupStyle, styles.icon]}>
				{icon.value.map((el, i) => (
					<Images key={i} {...el} />
				))}
			</div>
		);
	}

	return (
		<button disabled={isDisable} type={type} onClick={handleClick} css={[styles.wrapper(isFullWidth), styles.color(color), extStyles]}>
			{leftIcon && iconRender(leftIcon)}

			{textChanged && (
				<div css={[textChanged.groupStyle]}>
					{textChanged.value.map((el) => (
						<Text key={el.text} {...el} />
					))}
				</div>
			)}

			{rightIcon && iconRender(rightIcon)}
		</button>
	);
};

export default AtomButton_Public;
