import { Clue } from "../../../Helpers/Models/Clue";
interface result {
    colors : any[]
    label : string
}
export interface GlobalState{
    Games : {
        image : any
        category : Clue
        colors : result  
        questionColor : string                                                                       
    }
   
}