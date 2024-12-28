import {
	EModuleList,
	EStoreList,
	TFactoryCreators,
	TModuleFactory,
	TStoreFactory,
	TTypeModule,
} from "Logic/Core/Helpers/Creators/Factory/Factory.enam";
import factory from "Logic/Core/Helpers/Creators/Factory/Factory";
import APIRequest from "../../API/API";

type TStores = {
	[key in keyof TStoreFactory]: TStoreFactory[key];
};

type TModules = {
	[key in keyof TModuleFactory]: TModuleFactory[key];
};

class Creators {
	private stores: TStores;
	private modules: TModules;

	constructor() {
		this.stores = this.createFactory(Object.keys(EStoreList) as Array<keyof TFactoryCreators>);
		this.modules = this.createFactory(Object.keys(EModuleList) as Array<keyof TFactoryCreators>);
	}

	private createFactory(list: Array<keyof TFactoryCreators>) {
		return list.reduce((previousValue, currentValue) => {
			const cur = currentValue;
			previousValue[cur] = factory.create(cur);

			return previousValue;
		}, {} as any);
	}

	public createStore<T extends keyof TStoreFactory>(store: T): ReturnType<TStoreFactory[T]["factoryMethod"]> {
		return this.stores[store].factoryMethod() as ReturnType<TStoreFactory[T]["factoryMethod"]>;
	}

	public createModule<T extends keyof TModuleFactory>(module: T, imp: TTypeModule[T]): ReturnType<TModuleFactory[T]["factoryMethod"]> {
		const { domain: Domain, service: Service, ...restImp } = imp;

		// @ts-ignore TODO сделать нормально (временное решение)
		const implement: TTypeModule[T] = {
			domain: new Domain(),
			service: new Service(APIRequest),
			...restImp,
		};

		return this.modules[module].factoryMethod(implement) as ReturnType<TModuleFactory[T]["factoryMethod"]>;
	}
}

export default new Creators();
