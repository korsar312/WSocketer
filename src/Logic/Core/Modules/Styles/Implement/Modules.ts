import { StylesDomain } from "./Domain/Styles.domain";
import { StylesService } from "./Service/Styles.service";
import Creators from "Logic/Core/Helpers/Creators/Creators";
import { EModuleList } from "../../../Helpers/Creators/Factory/Factory.enam";

// @ts-ignore TODO когда сделаю типизацию, убрать игнор
const Modules = Creators.createModule(EModuleList.StyleModule, { domain: StylesDomain, service: StylesService });
export default Modules;
