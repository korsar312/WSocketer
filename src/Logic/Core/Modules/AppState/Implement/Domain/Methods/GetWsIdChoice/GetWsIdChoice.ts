import { AppStatusInterfaces } from "../../../../AppStatus.interfaces";

export class GetWsIdChoice {
	static execute() {
		return function (deviceObj: AppStatusInterfaces.TObj): string | undefined {
			return deviceObj.WSChoiceId;
		};
	}
}
