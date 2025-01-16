import styles from "./AtomDropdown_Public.styles";
import AtomDropdownModel from "../AtomDropdown.model";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import Text from "View/Components/0.Cores/Text";
import Images from "View/Components/0.Cores/Images";
import { TAtomDropdownEl, TAtomDropdownGroup } from "../index";
import { FC } from "react";
import Scroll from "../../../0.Cores/Scroll";

const AtomDropdown_Public: NFC<typeof AtomDropdownModel> = (props) => {
	const { handleClick, titleMain, titleDrop, handleClickElement, isOpen, style, colorMain, colorDrop, name } = props;

	function rowElement<T>(ads: TAtomDropdownGroup<Array<T>>, El: FC<TAtomDropdownGroup<Array<T>>["value"][number]>) {
		return (
			<div css={ads.styleGroup}>
				{ads.value.map((el) => (
					<El key={JSON.stringify(el)} {...(el as any)} />
				))}
			</div>
		);
	}

	function row(elementList: TAtomDropdownEl) {
		return (
			<div key={elementList.id} css={styles.element} onClick={() => handleClickElement(elementList.id)}>
				{elementList.iconLeft && rowElement(elementList.iconLeft, Images)}
				{elementList.text && rowElement(elementList.text, Text)}
				{elementList.iconRight && rowElement(elementList.iconRight, Images)}
			</div>
		);
	}

	return (
		<div css={[styles.wrapper(colorMain), style?.drop]} onClick={handleClick}>
			<Scroll.div>{row(titleMain)}</Scroll.div>

			<div css={styles.listWrap}>
				<Scroll.div extStyle={[styles.dropWrap, isOpen && styles.openDrop]}>
					<div css={styles.drop(colorDrop)}>{titleDrop.map((el) => row(el))}</div>
				</Scroll.div>
			</div>
		</div>
	);
};

export default AtomDropdown_Public;
