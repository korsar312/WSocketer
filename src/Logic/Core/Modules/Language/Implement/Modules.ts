import { LanguageDomain } from "./Domain/Language.domain";
import { LanguageService } from "./Service/Language.service";
import Creators from "../../../Helpers/Creators/Creators";
import { EModuleList } from "../../../Helpers/Creators/Factory/Factory.enam";

// @ts-ignore TODO когда сделаю типизацию, убрать игнор
const Modules = Creators.createModule(EModuleList.LanguageModule, { domain: LanguageDomain, service: LanguageService });
export default Modules;
