import { MessagesDomain } from "./Domain/Messages.domain";
import { MessagesService } from "./Service/Messages.service";
import Creators from "../../../Helpers/Creators/Creators";
import { EModuleList } from "../../../Helpers/Creators/Factory/Factory.enam";

// @ts-ignore TODO когда сделаю типизацию, убрать игнор
const Modules = Creators.createModule(EModuleList.MessagesModule, { domain: MessagesDomain, service: MessagesService });
export default Modules;
