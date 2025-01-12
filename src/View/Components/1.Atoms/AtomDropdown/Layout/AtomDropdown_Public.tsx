import styles from "./AtomDropdown_Public.styles";
import AtomDropdownModel from "../AtomDropdown.model";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import Text from "View/Components/0.Cores/Text";
import Images from "View/Components/0.Cores/Images";
import { TAtomDropdownEl, TAtomDropdownGroup } from "../index";
import { FC } from "react";

const AtomDropdown_Public: NFC<typeof AtomDropdownModel> = (props) => {
	const { handleClick, titleMain, titleDrop, handleClickElement, isOpen, style, colorMain, colorDrop, name } = props;

	function row(elementList: TAtomDropdownEl) {
		return (
			<option value={elementList.value} css={styles.element} onClick={() => handleClickElement(elementList.id)}>
				{elementList.iconLeft && rowElement(elementList.iconLeft, Images)}
				{elementList.text && rowElement(elementList.text, Text)}
				{elementList.iconRight && rowElement(elementList.iconRight, Images)}
			</option>
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
		<select css={[styles.wrapper(colorMain), style?.drop]} onClick={handleClick} name={name}>
			{row(titleMain)}

			{titleDrop.map((el) => row(el))}
		</select>
	);
};

export default AtomDropdown_Public;
