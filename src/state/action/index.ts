import {ActionType} from "../action-types";

interface SearchRepAct{
    type: ActionType.SEARCH_REP_ACTION;
}

interface SearchRepSuccessAct{
    type: ActionType.SEARCH_REP_SUCCESS_ACTION;
    payload: string[];
}


interface SearchRepErrorAct{
    type: ActionType.SEARCH_REP_ERROR_ACTION;
    payload: string;
}


export type Action =
 | SearchRepAct
 | SearchRepSuccessAct
 | SearchRepErrorAct;