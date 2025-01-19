import { CSSObject } from "@emotion/react";
import { typesUtils } from "Logic/Libs/Util/TypesUtils";
import { InputHTMLAttributes } from "react";

export type TDeepCSSObject = typesUtils.TDeepTypeObject<CSSObject>;
export type TTagPartial<T extends HTMLElement, K extends keyof InputHTMLAttributes<T>> = Partial<Pick<InputHTMLAttributes<T>, K>>;
