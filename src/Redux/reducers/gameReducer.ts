
import { UnknownAction } from "@reduxjs/toolkit";
import { ADD_TO_CATEGORY, REMOVE_FROM_CATEGORY } from "../actions/ActionType";
import { CategoryAction } from "../actions/types";



  
const initState: any =  {};
export const gameReducers = (state = initState,
    action:UnknownAction | CategoryAction = { type: null, key: null, payload: null }) => {
    switch (action.type) {
        case ADD_TO_CATEGORY:
            if (action.key) {
                if (!action.unique) {
                    // if (!state[action.key+""]) {
                    //     state[action.key+""] = []

                    // }
                   
                    const existing = state[action.key+""]
                        .find((exist: any) => exist._id === action.payload?._id)
                    if (!existing) {
                        action.payload.created_at = new Date()


                        state = {...state , [action.key+""]: [...[action.key+""] , action.payload]}
                    } else {
                        action.payload.updated_at = new Date()
                        const existingIndex = state[action.key+""]
                            .findIndex((exist: any) => exist._id === action.payload?._id)
                        state = {...state , [action.key+""]: [...[action.key+""] ,[action.key+""][existingIndex] = action.payload]}

                    }
                } else {
                    state ={ ...state, [action.key+""] : action.payload}
                }
            } else {
                state = action.payload
            }


            return { ...state }

        case REMOVE_FROM_CATEGORY:
            if (action.key) {
                if (!action.unique) {
                    if (state[action.key+""]) {
                        const index = state[action.key+""]
                            .findIndex((exist: any) => exist._id === action.payload?._id)
                        console.log(index);


                        if (index !== -1) {
                            state[action.key+""] = state[action.key+""].filter((data: any) => data._id !== action.payload?._id)
                        }

                    }
                } else {
                    delete state[action.key+""]
                }
               


            }
            return { ...state }

        default:
            return state
    }
}
