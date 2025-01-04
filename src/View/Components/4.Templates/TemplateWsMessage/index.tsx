import { FC, useEffect, useState } from "react";
import Substance, { IComponent as ISubstances } from "View/Components/3.Substances/SubstanceMessagePlace";
import { v4 as createId } from "uuid";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

export interface IComponent {}

const json = {
	stringValue: "Hello, world!",
	numberValue: 42,
	booleanValue: true,
	nullValue: null,
	arrayValue: [
		"text",
		123,
		false,
		null,
		{
			nestedString: "Nested",
			nestedNumber: 99,
		},
		["nestedArray", 456],
	],
	objectValue: {
		// Объект
		nestedString: "Nested Object",
		nestedNumber: 3.14,
		nestedBoolean: false,
		nestedNull: null,
		nestedArray: [1, 2, 3],
		deeplyNestedObject: {
			key: "value",
			anotherKey: 100,
		},
	},
};

const json2 = {
	stringValue: "Hello, world!",
	numberValue: 42,
	booleanValue: true,
	nullValue: null,
};

const json3 = {
	numberValue: 42,
};

const json5 = {
	dsfg: "42",
};

type Tasd = {
	id: string;
	isSending: boolean;
	value: any;
};

const jsonArr = [
	{ id: createId(), isSending: !Math.round(Math.random()), value: json },
	{ id: createId(), isSending: !Math.round(Math.random()), value: json2 },
	{ id: createId(), isSending: !Math.round(Math.random()), value: json3 },
	{ id: createId(), isSending: !Math.round(Math.random()), value: json5 },
	{ id: createId(), isSending: !Math.round(Math.random()), value: json2 },
	{ id: createId(), isSending: !Math.round(Math.random()), value: json3 },
	{ id: createId(), isSending: !Math.round(Math.random()), value: 435345 },
	{ id: createId(), isSending: !Math.round(Math.random()), value: ["3423", 23423, json2, json2, 435345] },
];

const Index: FC<IComponent> = (props) => {
	const {} = props;

	const [message, setMessage] = useState<Tasd[]>(jsonArr);

	useEffect(() => {
		const time = setTimeout(
			() =>
				setMessage((el) => [
					{ ...el[Math.floor(Math.random() * el.length)], id: createId(), isSending: !Math.round(Math.random()) },
					...el,
				]),
			2000,
		);

		return () => clearTimeout(time);
	}, [message]);

	const propsComponent: ISubstances = {
		messages: message.slice(0, 50),
		sendState: { colorBg: StylesInterface.EColor.BLUE_1 },
		receiveState: { colorBg: StylesInterface.EColor.PRIME_4 },
	};

	return <Substance {...propsComponent} />;
};

export default Index;
