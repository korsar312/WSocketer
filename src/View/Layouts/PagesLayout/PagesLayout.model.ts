import { IComponent } from "./index";
import { useLocation, useRoutes } from "react-router-dom";
import { RouteList } from "Logic/Config/ConfigLists/RouteList";
import { useEffect } from "react";
import UseCases from "../../../Logic/Core/UseCases/UseCases";

function PagesLayoutModel(props: IComponent) {
	const {} = props;

	const Pages = useRoutes(RouteList);
	const { pathname } = useLocation();

	useEffect(() => {
		UseCases.interactor("router", "setCurrentPage", pathname);
	}, [pathname]);

	return { Pages, pathname };
}

export default PagesLayoutModel;
