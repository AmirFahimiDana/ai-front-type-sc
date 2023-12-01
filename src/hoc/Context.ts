import { createContext } from "react";

export function createCtx<S, A>(defaultValue: S) {
    const defaultDispatch: React.Dispatch<A> = () => defaultValue;
    const ctx = createContext({
        state: defaultValue,
        dispatch: defaultDispatch
    });
    return ctx;
}

