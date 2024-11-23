import { GetArray } from "./GetArray/GetArray";
import { Polymorph } from "./Polymorph/Polymorph";

class Index {
	/** Возвращает массив */
	public getArray = GetArray.execute();

	/** Возвращает необходимый тип */
	public polymorph = Polymorph.execute();
}

export default new Index();
