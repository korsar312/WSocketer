import { GetArray } from "./GetArray/GetArray";
import { Polymorph } from "./Polymorph/Polymorph";
import { ToArray } from "./ToArray/ToArray";

class Index {
	/** Возвращает массив */
	public getArray = GetArray.execute();

	/** Возвращает необходимый тип */
	public polymorph = Polymorph.execute();

	/** Преобразует в массив */
	public toArray = ToArray.execute();
}

export default new Index();
