import { RoutesDomain } from "./Domain/Routes.domain";
import { RoutesService } from "./Service/Routes.service";
import Creators from "Logic/Core/Helpers/Creators/Creators";
import { EModuleList } from "../../../Helpers/Creators/Factory/Factory.enam";

// @ts-ignore TODO когда сделаю типизацию, убрать игнор
const Modules = Creators.createModule(EModuleList.RouterModule, { domain: RoutesDomain, service: RoutesService });
export default Modules;
