import { IComponent } from "./index";
import UseCases from "Logic/Core/UseCases/UseCases";

function TestPageModel(props: IComponent) {
	const {} = props;

	function handleClick() {
		UseCases.interactor("router", "goLink", "TEST_PAGE_2");
	}

	return { handleClick };
}

export default TestPageModel;
