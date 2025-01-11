import { IComponent } from "./index";
import { useEffect, useRef } from "react";

function AtomModalModel(props: IComponent) {
	const { children, isShow } = props;

	const refDialog = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		(isShow ? open : close)();
	}, [isShow]);

	function close() {
		const { current: dialog } = refDialog;
		if (!dialog) return;

		dialog.close();
	}

	function open() {
		const { current: dialog } = refDialog;
		if (!dialog) return;

		dialog.showModal();
	}

	return { children, refDialog, close, isShow };
}

export default AtomModalModel;
