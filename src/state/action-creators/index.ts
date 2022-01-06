import axios from "axios";
import { ActionType } from "../action-types";
import { Action } from "../action";
import { Dispatch } from "redux";

export const searchRep = (term: string) =>
{
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_REP_ACTION
        });

        try{
            const  { data } = await axios.get("https://registry.npmjs.org/-/v1/search", {
                params:{
                    text: term
                }
            });



            const names = data.objects.map((result: any)=>{
                return result.package.name;
            });

            dispatch({
                type: ActionType.SEARCH_REP_SUCCESS_ACTION,
                payload: names,
            });
        }
        catch(err: any) {
            dispatch({
                type: ActionType.SEARCH_REP_ERROR_ACTION,
                payload: err.message,
            });
        }
    }
};