import { FC } from "react";
import Substance, { IComponent as ISubstances } from "View/Components/3.Substances/SubstanceAsideMenu";
import UseCases from "Logic/Core/UseCases/UseCases";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import { RouteInterfaces } from "Logic/Core/Modules/Routes/Route.interfaces";
import { observer } from "mobx-react";

export interface IComponent {}

const Index: FC<IComponent> = (props) => {
	const {} = props;

	const currentPageName = UseCases.interactor("router", "getCurrentPage");

	const propsComponent: ISubstances = {
		head: {
			title: LanguageInterface.EWord.W_SOCKETER,
			icon: "IconMessage",
		},
		titleBtn: {
			icon: "IconChat",
			text: LanguageInterface.EWord.CHAT,
			...otherProp("CHAT_PAGE"),
		},
		anyBtn: [
			{
				icon: "IconMessage",
				text: LanguageInterface.EWord.MESSAGES,
				...otherProp("MESSAGE_PAGE"),
			},
			{
				icon: "IconBug",
				text: LanguageInterface.EWord.AUTOTESTS,
				...otherProp("AUTOTEST_PAGE"),
			},
			{
				icon: "IconTune",
				text: LanguageInterface.EWord.FILTERS,
				...otherProp("FILTER_PAGE"),
			},
			{
				icon: "IconKey",
				text: LanguageInterface.EWord.PROTOCOLS,
				...otherProp("PROTOCOL_PAGE"),
			},
			{
				icon: "IconHistory",
				text: LanguageInterface.EWord.HISTORY,
				...otherProp("HISTORY_PAGE"),
			},
			{
				icon: "IconSettings",
				text: LanguageInterface.EWord.SETTINGS,
				...otherProp("SETTING_PAGE"),
			},
		],
	};

	function otherProp(page: RouteInterfaces.EPathName): Pick<ISubstances["titleBtn"], "isActive" | "click"> {
		return {
			isActive: isActiveBtn(page),
			click: () => goPage(page),
		};
	}

	function isActiveBtn(page: RouteInterfaces.EPathName) {
		return page === currentPageName;
	}

	function goPage(page: RouteInterfaces.EPathName) {
		UseCases.interactor("router", "goLink", page);
	}

	return <Substance {...propsComponent} />;
};

export default observer(Index);
