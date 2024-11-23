import { Modules } from "../Modules/Modules";
import { PublicCase } from "./PublicCase/PublicCase";
import Util from "../../Libs/Util";

function interactor<MODULE>(module: MODULE) {
	return function <TARGET extends keyof MODULE, METHOD extends keyof MODULE[TARGET], ARGS extends MODULE[TARGET][METHOD]>(
		target: TARGET,
		method: METHOD,
		...args: ARGS extends (...args: infer P) => unknown ? Parameters<ARGS> : unknown[]
	): ARGS extends (...args: infer P) => any ? ReturnType<ARGS> : ARGS {
		try {
			return Util.polymorph(module[target][method], module[target], ...args);
		} catch (e) {
			console.error(e);
		}

		throw new Error();
	};
}

const modules = new Modules();

export class Facade {
	public interactor = interactor(modules);
	public public = new PublicCase(this);
}

const UseCases = new Facade();
export default UseCases;
