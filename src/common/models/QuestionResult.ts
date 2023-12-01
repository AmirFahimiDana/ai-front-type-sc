export interface IField<T = string> {
    [key: string]: T;
}

export interface IQuestionResult {
    content: {
        fields?: IField[],
        query?: string,
        data?: any[]
    }

}