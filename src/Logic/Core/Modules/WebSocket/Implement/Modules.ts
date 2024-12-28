import { WebSocketDomain } from "./Domain/WebSocket.domain";
import { WebSocketService } from "./Service/WebSocket.service";
import Creators from "../../../Helpers/Creators/Creators";
import { EModuleList } from "../../../Helpers/Creators/Factory/Factory.enam";

// @ts-ignore TODO когда сделаю типизацию, убрать игнор
const Modules = Creators.createModule(EModuleList.WebSocketModule, { domain: WebSocketDomain, service: WebSocketService });
export default Modules;
