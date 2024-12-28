import APIRequest from "../../../../../API/API";
import { TStoreFactory } from "../../Factory.enam";
import Creators from "../../../Creators";

export interface IService {}

export interface IServiceProps<T extends keyof TStoreFactory> {
	Api: typeof APIRequest;
	Type: T;
}

export abstract class ServiceBase<T extends keyof TStoreFactory> implements IService {
	protected api;
	public _store;

	protected constructor(props: IServiceProps<T>) {
		this.api = props.Api;
		this._store = Creators.createStore(props.Type) as ReturnType<TStoreFactory[typeof props.Type]["factoryMethod"]> as ReturnType<
			TStoreFactory[typeof props.Type]["factoryMethod"]
		>;
	}

	get store() {
		return this._store;
	}
}
