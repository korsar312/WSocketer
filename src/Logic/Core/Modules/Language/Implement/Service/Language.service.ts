import { TransformLangToArr } from "./Methods/TransformLangToArr/TransformLangToArr";
import { GetUserLanguage } from "./Methods/GetUserLanguage/GetUserLanguage";
import { CreateLanguageObj } from "./Methods/CreateLanguageObj/CreateLanguageObj";
import { GetDictionary } from "./Methods/GetDictionary/GetDictionary";
import { GetTransfer } from "./Methods/GetTransfer/GetTransfer";
import { GetModifer } from "./Methods/GetModifer/GetModifer";
import { ServiceBase } from "../../../../Helpers/Creators/Factory/Variables/Modules/Service";
import { EStoreList } from "../../../../Helpers/Creators/Factory/Factory.enam";
import APIRequest from "../../../../API/API";

const typeService = EStoreList.LanguageStore;

export class LanguageService extends ServiceBase<typeof typeService> {
	constructor(Api: typeof APIRequest) {
		super({ Api, Type: typeService });
	}

	public getDictionary = GetDictionary.execute();
	public getTransfer = GetTransfer.execute();
	public getModifer = GetModifer.execute();
	public createLanguageObj = CreateLanguageObj.execute();
	public getUserLanguage = GetUserLanguage.execute();
	public transformLangToArr = TransformLangToArr.execute();
}
