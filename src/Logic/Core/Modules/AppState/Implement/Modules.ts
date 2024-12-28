import { AppStatusDomain } from "./Domain/AppStatus.domain";
import { AppStatusService } from "./Service/AppStatus.service";
import Creators from "../../../Helpers/Creators/Creators";
import { EModuleList } from "../../../Helpers/Creators/Factory/Factory.enam";

// @ts-ignore TODO когда сделаю типизацию, убрать игнор
const Modules = Creators.createModule(EModuleList.AppStatusModule, { domain: AppStatusDomain, service: AppStatusService });
export default Modules;
