import styles from "./AtomDropdown_Public.styles";
import AtomDropdownModel from "../AtomDropdown.model";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import Text from "View/Components/0.Cores/Text";
import Images from "View/Components/0.Cores/Images";
import { TAtomDropdownEl, TAtomDropdownGroup } from "../index";
import { FC, useEffect, useRef, useState } from "react";
import Scroll from "../../../0.Cores/Scroll";

const AtomDropdown_Public: NFC<typeof AtomDropdownModel> = (props) => {
	const { handleClick, titleMain, titleDrop, handleClickElement, isOpen, style, colorMain, colorDrop, name, choice } = props;

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

	const heightRef = useRef<HTMLDivElement | null>(null);
	const widthRef = useRef<HTMLDivElement | null>(null);
	const [size, setSize] = useState<[number, number]>([0, 0]);

	useEffect(() => {
		const heightR = heightRef.current;
		const widthR = widthRef.current;
		if (!heightR || !widthR) return;

		const height = Math.min(heightR.offsetHeight, 100);
		setSize([widthR.offsetWidth, height]);
	}, [isOpen]);

	return (
		<div css={[styles.wrapper, styles.color(colorMain), style?.drop]} onClick={handleClick}>
			{row(titleMain)}

			<div css={[styles.listWrap, isOpen && styles.openList(size[0])]}>
				<Scroll.div extStyle={[styles.dropWrap, isOpen && styles.openDrop(size[1]), styles.color(colorDrop)]} ref={widthRef}>
					<div ref={heightRef}>{titleDrop.map((el) => row(el))}</div>
				</Scroll.div>
			</div>

			<input onChange={() => ""} name={name} value={choice.value} css={styles.hidden} />
		</div>
	);
};

export default AtomDropdown_Public;
