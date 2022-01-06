import {Action} from "../action";
import { ActionType } from "../action-types";


interface repState {
    loading: boolean;
    error: string | null;
    data: string[];
}

const initState = {
    loading: false,
    error: null,
    data: []
};

const reducer = (
    state: repState = initState,
    act: Action
): repState => {
    switch(act.type){
        case ActionType.SEARCH_REP_ACTION:
            return {loading: true, error: null, data: []};

        case ActionType.SEARCH_REP_SUCCESS_ACTION:
            return {loading: false, error: null, data: act.payload};

        case ActionType.SEARCH_REP_ERROR_ACTION:
            return {loading: false, error: act.payload, data: []};    

        default:
            return state;
    }
};

export default reducer;