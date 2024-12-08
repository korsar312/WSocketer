import { IComponent } from "./index";

function SubstanceMessagePlaceModel(props: IComponent) {
	const {} = props;

	const json = {
		stringValue: "Hello, world!", // Строка
		numberValue: 42, // Число
		booleanValue: true, // Булевый тип
		nullValue: null, // null
		arrayValue: [
			// Массив
			"text", // Строка в массиве
			123, // Число в массиве
			false, // Булевый тип в массиве
			null, // null в массиве
			{
				// Объект в массиве
				nestedString: "Nested",
				nestedNumber: 99,
			},
			[
				// Вложенный массив
				"nestedArray",
				456,
			],
		],
		objectValue: {
			// Объект
			nestedString: "Nested Object", // Строка в объекте
			nestedNumber: 3.14, // Число в объекте
			nestedBoolean: false, // Булевый тип в объекте
			nestedNull: null, // null в объекте
			nestedArray: [1, 2, 3], // Массив в объекте
			deeplyNestedObject: {
				// Вложенный объект
				key: "value",
				anotherKey: 100,
			},
		},
	};

	const json2 = {
		stringValue: "Hello, world!", // Строка
		numberValue: 42, // Число
		booleanValue: true, // Булевый тип
		nullValue: null, // null
	};

	const json3 = {
		numberValue: 42, // Число
	};

	const json5 = {
		dsfg: "42", // Число
	};

	const jsonArr = [json, json2, json3, json5, json2, json3, 435345, ["3423", 23423, json2, json2, 435345]];

	return { jsonArr };
}

export default SubstanceMessagePlaceModel;
