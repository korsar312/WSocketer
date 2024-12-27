import { FC } from "react";
import Substance, { IComponent as ISubstances } from "View/Components/3.Substances/SubstanceMessagePlace";

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

const jsonArr = [json, json2, json3, json5, json2, json3, 435345, ["3423", 23423, json2, json2, 435345]];

const Index: FC<IComponent> = (props) => {
	const {} = props;

	const propsComponent: ISubstances = {
		messages: jsonArr,
	};

	return <Substance {...propsComponent} />;
};

export default Index;
