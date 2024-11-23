import { IComponent } from "./index";
import { RouteObject, useLocation, useRoutes } from "react-router-dom";
import { RouteList } from "Logic/Config/ConfigLists/RouteList";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import UseCases from "Logic/Core/UseCases/UseCases";
import { useDidUpdate } from "../../../Logic/Libs/Hooks/useDidUpdate/useDidUpdate";
import { RouteInterfaces } from "../../../Logic/Core/Modules/Routes/Route.interfaces";

function PagesLayoutModel(props: IComponent) {
	const {} = props;

	const pageLoaded = useRef<Set<RouteInterfaces.EPathName>>(new Set());
	const allPath = RouteInterfaces.PathName;

	const Pages = useRoutes(RouteList);
	const { pathname } = useLocation();

	const currentPageName = Object.keys(allPath).find(
		(key) => `/${allPath[key as RouteInterfaces.EPathName]}` === pathname,
	) as RouteInterfaces.EPathName;

	useLayoutEffect(() => {
		return () => {
			pageLoaded.current.add(currentPageName);
		};
	}, [pathname]);

	const isLoaded = pageLoaded.current.has(currentPageName);

	return { Pages, pathname, isLoaded };
}

export default PagesLayoutModel;
