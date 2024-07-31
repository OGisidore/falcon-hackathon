import { ADD_TO_CATEGORY, REMOVE_FROM_CATEGORY } from "./ActionType"

export interface CategoryAction{
    type : typeof ADD_TO_CATEGORY | typeof REMOVE_FROM_CATEGORY | null
    key:string | null
    unique? : boolean,
    payload : any| null
}
