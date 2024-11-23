import { RouteInterfaces } from "Logic/Core/Modules/Routes/Route.interfaces";
import { RouteObject } from "react-router-dom";
import { lazy } from "react";

const RouteLayout = lazy(() => import("View/Layouts/RouteLayout"));
const HomePage = lazy(() => import("View/Pages/HomePage"));
const TestPage = lazy(() => import("View/Pages/TestPage"));
const Test2Page = lazy(() => import("View/Pages/Test2Page"));

const { PathName } = RouteInterfaces;

export const MailList: RouteObject[] = [
	{
		path: PathName.HOME_PAGE,
		element: <HomePage />,
	},
	{
		path: PathName.TEST_PAGE,
		element: <TestPage />,
	},
	{
		path: PathName.TEST_PAGE_2,
		element: <Test2Page />,
	},
];

export const RouteList: RouteObject[] = [
	{
		path: "/*",
		element: <RouteLayout />,
		children: MailList,
	},
];
