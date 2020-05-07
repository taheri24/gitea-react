import { declareModel } from "../../core";
import { Reducer } from 'redux';
interface IState {

}
const reducer: Reducer<IState | undefined> = (state, action) => {
    if (action.type == 'FFFF') return { ...state };
    return state;
}
export const Dashboard = declareModel({
    controllers: [
        [reducer, reducer]
    ],
    mapping: {
        dd: [2]
    }
})