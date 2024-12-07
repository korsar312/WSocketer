import styles from "./AtomDropdown_Public.styles";
import AtomDropdownModel from "../AtomDropdown.model";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import Text from "View/Components/0.Cores/Text";
import Images from "View/Components/0.Cores/Images";
import { TAtomDropdownEl, TAtomDropdownGroup } from "../index";
import Scroll from "View/Components/0.Cores/Scroll";
import { FC } from "react";
import BaseAnimation from "View/Components/0.Cores/BaseAnimation";

const AtomDropdown_Public: NFC<typeof AtomDropdownModel> = (props) => {
	const { handleClick, titleMain, titleDrop, handleClickElement, isOpen, style, colorMain, colorDrop } = props;

	function row(elementList: TAtomDropdownEl) {
		return (
			<div css={styles.element} onClick={() => handleClickElement(elementList.id)}>
				{elementList.iconLeft && rowElement(elementList.iconLeft, Images)}
				{elementList.text && rowElement(elementList.text, Text)}
				{elementList.iconRight && rowElement(elementList.iconRight, Images)}
			</div>
		);
	}

	function rowElement<T>(ads: TAtomDropdownGroup<Array<T>>, El: FC<TAtomDropdownGroup<Array<T>>["value"][number]>) {
		return (
			<div css={ads.styleGroup}>
				{ads.value.map((el) => (
					<El key={JSON.stringify(el)} {...(el as any)} />
				))}
			</div>
		);
	}

	return (
		<div css={[styles.wrapper(colorMain), style?.drop]} onClick={handleClick}>
			{row(titleMain)}

			<BaseAnimation deps={isOpen}>
				{isOpen && (
					<Scroll.div extStyleScroll={styles.scrollCorrect} extStyle={[styles.variable(colorDrop), style?.drop]}>
						{titleDrop.map((el) => (
							<li key={el.id} css={styles.list}>
								{row(el)}
							</li>
						))}
					</Scroll.div>
				)}
			</BaseAnimation>
		</div>
	);
};

export default AtomDropdown_Public;
