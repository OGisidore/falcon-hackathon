
import { UnknownAction } from "@reduxjs/toolkit";
import { Clue } from "../../Helpers/Models/Clue";
import { ADD_TO_CATEGORY, REMOVE_FROM_CATEGORY } from "../actions/ActionType";
import { CategoryAction } from "../actions/types";
import { generateID } from "../../Helpers/Utilities";


// const category: Clue ={
//     _id: generateID(),
//     type : "Color",
//     img_url : "",
//     created_at : new Date(),
//     completed : false
// }
// let category
  
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
                        // console.log(action.payload);
                        action.payload.created_at = new Date()


                        // state[action.key+""].push(action.payload)
                        state = {...state , [action.key+""]: [...[action.key+""] , action.payload]}
                        // state[action.key+""] = [...state[action.key+""]]
                    } else {
                        action.payload.updated_at = new Date()
                        const existingIndex = state[action.key+""]
                            .findIndex((exist: any) => exist._id === action.payload?._id)
                        // state[action.key+""][existingIndex] = action.payload
                        state = {...state , [action.key+""]: [...[action.key+""] ,[action.key+""][existingIndex] = action.payload]}

                        // state[action.key+""] = [...state[action.key+""]]
                    }
                } else {
                    state ={ ...state, [action.key+""] : action.payload}
                }
            } else {
                state = action.payload
            }


            return { ...state }

            break;
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
            break;

        default:
            return state
            break;
    }
}
// import { UnknownAction } from "@reduxjs/toolkit";
// import { Clue } from "../../Helpers/Models/Clue";
// import { ADD_TO_CATEGORY, REMOVE_FROM_CATEGORY } from "../actions/ActionType";
// import { CategoryAction } from "../actions/types";
// import { generateID } from "../../Helpers/Utilities";

// const initState: any = {};

// export const categoryReducers = (state = initState, action: UnknownAction | CategoryAction = { type: null, key: null, payload: null }) => {
//     switch (action.type) {
//         case ADD_TO_CATEGORY:
//             if (action.key) {
//                 if (!action.unique) {
//                     const existingCategory = state[action.key + ""] || [];
//                     const existingIndex = existingCategory.findIndex((exist: any) => exist._id === action.payload?._id);
                    
//                     if (existingIndex === -1) {
//                         return {
//                             ...state,
//                             ...action.payload,
//                         };
//                     } else {
//                         const updatedItem = {
//                             ...action.payload,
//                             updated_at: new Date(),
//                         };
//                         const updatedCategory = [...existingCategory];
//                         updatedCategory[existingIndex] = updatedItem;
//                         return {
//                             ...state,
//                              updatedCategory,
//                         };
//                     }
//                 } else {
//                     return {
//                         ...state,
//                         [action.key + ""]: action.payload,
//                     };
//                 }
//             } else {
//                 return action.payload;
//             }

//         case REMOVE_FROM_CATEGORY:
//             if (action.key) {
//                 if (!action.unique) {
//                     const existingCategory = state[action.key + ""] || [];
//                     const updatedCategory = existingCategory.filter((data: any) => data._id !== action.payload?._id);

//                     return {
//                         ...state,
//                         [action.key + ""]: updatedCategory,
//                     };
//                 } else {
//                     const { [action.key + ""]: removedKey, ...newState } = state;
//                     return newState;
//                 }
//             }
//             return state;

//         default:
//             return state;
//     }
// };
