import { RouteInterfaces } from "Logic/Core/Modules/Routes/Route.interfaces";
import { RouteObject } from "react-router-dom";
import { lazy } from "react";

const RouteLayout = lazy(() => import("View/Layouts/RouteLayout"));

const ChatPage = lazy(() => import("View/Pages/ChatPage"));
const MessagePage = lazy(() => import("View/Pages/MessagePage"));
const AutotestPage = lazy(() => import("View/Pages/AutotestPage"));
const FilterPage = lazy(() => import("View/Pages/FilterPage"));
const ProtocolPage = lazy(() => import("View/Pages/ProtocolPage"));
const HistoryPage = lazy(() => import("View/Pages/HistoryPage"));
const SettingPage = lazy(() => import("View/Pages/SettingPage"));

const { PathName } = RouteInterfaces;

export const MailList: RouteObject[] = [
	{
		path: PathName.CHAT_PAGE,
		element: <ChatPage />,
	},
	{
		path: PathName.ERROR_PAGE,
		element: <ChatPage />,
	},
	{
		path: PathName.MESSAGE_PAGE,
		element: <MessagePage />,
	},
	{
		path: PathName.AUTOTEST_PAGE,
		element: <AutotestPage />,
	},
	{
		path: PathName.FILTER_PAGE,
		element: <FilterPage />,
	},
	{
		path: PathName.PROTOCOL_PAGE,
		element: <ProtocolPage />,
	},
	{
		path: PathName.HISTORY_PAGE,
		element: <HistoryPage />,
	},
	{
		path: PathName.SETTING_PAGE,
		element: <SettingPage />,
	},
];

export const RouteList: RouteObject[] = [
	{
		path: "/*",
		element: <RouteLayout />,
		children: MailList,
	},
];
