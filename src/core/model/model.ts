
export interface IModel<TMapping> {
    controllers?: [[Function, any?, any?]],
    mapping: { [P in keyof TMapping]:
        [IMapper<TMapping[P]>] }

}

export interface IMapper<TResult> {
    compute(ctx: any): TResult;
}

const FunctionDirective: IMapper<Function> = null as any;
export function declareModel<TMapping>(m: IModel<TMapping>) {
    return m;
}
export function useModel<TMapping>(m: IModel<TMapping>): TMapping {
    return null as any;
}