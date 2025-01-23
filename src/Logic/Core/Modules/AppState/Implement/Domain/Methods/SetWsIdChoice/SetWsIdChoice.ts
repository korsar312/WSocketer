import { AppStatusInterfaces } from "../../../../AppStatus.interfaces";

export class SetWsIdChoice {
	static execute() {
		return function (deviceObj: AppStatusInterfaces.TObj, WSChoiceId?: string): AppStatusInterfaces.TObj {
			return { ...deviceObj, WSChoiceId };
		};
	}
}
