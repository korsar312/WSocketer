import StoreCreator from "./Variables/FactoryStore";
import ModulesCreator from "./Variables/FactoryModules";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import { RouteInterfaces } from "Logic/Core/Modules/Routes/Route.interfaces";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { AppStatusInterfaces } from "Logic/Core/Modules/AppState/AppStatus.interfaces";
import { ServiceBase } from "./Variables/Modules/Service";
import { DomainBase } from "./Variables/Modules/Domain";
import APIRequest from "../../../API/API";
import factory from "./Factory";
import { LanguageService } from "../../../Modules/Language/Implement/Service/Language.service";
import { LanguageDomain } from "../../../Modules/Language/Implement/Domain/Language.domain";
import { RoutesDomain } from "../../../Modules/Routes/Implement/Domain/Routes.domain";
import { RoutesService } from "../../../Modules/Routes/Implement/Service/Routes.service";
import { StylesService } from "../../../Modules/Styles/Implement/Service/Styles.service";
import { AppStatusService } from "../../../Modules/AppState/Implement/Service/AppStatus.service";
import { AppStatusDomain } from "../../../Modules/AppState/Implement/Domain/AppStatus.domain";
import { StylesDomain } from "../../../Modules/Styles/Implement/Domain/Styles.domain";
import { WebSocketDomain } from "../../../Modules/WebSocket/Implement/Domain/WebSocket.domain";
import { WebSocketService } from "../../../Modules/WebSocket/Implement/Service/WebSocket.service";
import { WebSocketInterfaces } from "../../../Modules/WebSocket/WebSocket.interfaces";

// @ts-ignore TODO сделать нормально (временное решение)
export type TModuleImp<D, S, ANY = unknown> = {
	domain: D & (new () => DomainBase & D);
	service: S & (new (API: typeof APIRequest) => ServiceBase<any> & S);
} & ANY;

export enum EStoreList {
	LanguageStore = "LanguageStore",
	RouterStore = "RouterStore",
	StyleStore = "StyleStore",
	AppStatusStore = "AppStatusStore",
	WebSocketStore = "WebSocketStore",
}

export enum EModuleList {
	LanguageModule = "LanguageModule",
	RouterModule = "RouterModule",
	StyleModule = "StyleModule",
	AppStatusModule = "AppStatusModule",
	WebSocketModule = "WebSocketModule",
}

export type TStoreFactory = {
	[EStoreList.LanguageStore]: StoreCreator<LanguageInterface.TObj>;
	[EStoreList.RouterStore]: StoreCreator<RouteInterfaces.TObj>;
	[EStoreList.StyleStore]: StoreCreator<StylesInterface.TObj>;
	[EStoreList.AppStatusStore]: StoreCreator<AppStatusInterfaces.TObj>;
	[EStoreList.WebSocketStore]: StoreCreator<WebSocketInterfaces.TObj>;
};

export type TTypeModule = {
	[EModuleList.LanguageModule]: TModuleImp<LanguageDomain, LanguageService>;
	[EModuleList.RouterModule]: TModuleImp<RoutesDomain, RoutesService>;
	[EModuleList.StyleModule]: TModuleImp<StylesDomain, StylesService>;
	[EModuleList.AppStatusModule]: TModuleImp<AppStatusDomain, AppStatusService>;
	[EModuleList.WebSocketModule]: TModuleImp<WebSocketDomain, WebSocketService>;
};

export type TModuleFactory = {
	[key in keyof TTypeModule]: ModulesCreator<TTypeModule[key]>;
};

export type TFactoryCreators = TStoreFactory & TModuleFactory;

export function registerModules() {
	Object.keys(EModuleList).forEach((moduleName) => {
		factory.register(moduleName as EModuleList, new ModulesCreator());
	});

	Object.keys(EStoreList).forEach((moduleName) => {
		factory.register(moduleName as EStoreList, new StoreCreator());
	});
}
