import { IComponent } from "./index";
import UseCases from "Logic/Core/UseCases/UseCases";

function HomePageModel(props: IComponent) {
	const {} = props;

	function handleClick() {
		UseCases.interactor("router", "goLink", "TEST_PAGE");
	}

	return { handleClick };
}

export default HomePageModel;
