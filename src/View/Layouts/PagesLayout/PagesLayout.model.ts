import { IComponent } from "./index";
import { useRoutes } from "react-router-dom";
import { RouteList } from "Logic/Config/ConfigLists/RouteList";
import UseCases from "Logic/Core/UseCases/UseCases";

function PagesLayoutModel(props: IComponent) {
	const {} = props;

	const Pages = useRoutes(RouteList);
	const pathname = UseCases.interactor("router", "getCurrentPageName");

	console.log(pathname);

	return { Pages, pathname };
}

export default PagesLayoutModel;
