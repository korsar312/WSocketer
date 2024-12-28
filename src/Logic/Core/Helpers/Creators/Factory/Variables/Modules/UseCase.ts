import { TModuleFactory, TTypeModule } from "../../Factory.enam";

export interface IUseCase {}

export interface IUseCaseProps<T extends keyof TTypeModule> {
	initFn: { execute: (val: TTypeModule[T]) => () => void };
	modules: ReturnType<TModuleFactory[T]["factoryMethod"]>;
}

export class UseCaseBase<T extends keyof TTypeModule> implements IUseCase {
	public module;

	constructor(props: IUseCaseProps<T>) {
		this.module = props.modules.invoker();
		const initStoreFn = props.initFn.execute(this.module);

		initStoreFn();
	}
}
