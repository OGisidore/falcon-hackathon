import { Game } from "../Models/Game";
import { generateID } from "../Utilities";


  
export const Games : Game[] = [
    {
        _id : generateID(),
        title : "Can you findiIt",
        img_url :"assets/images/CYFI Button.svg",
        slug:"CYFI",
        created_at : new Date()

    },
    {
        _id : generateID(),
        title : "What comes Next",
        img_url :"assets/images/WCN Button.svg",
        slug:"Next prediction game",
        created_at : new Date()

    },
    {
        _id : generateID(),
        title : "Follow the Story",
        img_url :"assets/images/WCN Button.svg",
        slug:"Story Following game",
        created_at : new Date()

    }
]