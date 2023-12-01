import { IMessage } from "./Message";

export interface IResponse<T> {
    content?: T;
    messages?: IMessage[];
    skip?: number;
    take?: number;
    total?: number;
}

export interface IGResponse<T> {
    [key: string]: T;
}
