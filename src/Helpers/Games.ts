import { Game } from "./Models/Game";

export const generateID = ()=>{
    var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
    return timestamp + 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[x]/g, function(){
      return (Math.random()*16 | 0 ).toString(16)
    }).toLowerCase();
  }


  
export const Games : Game[] = [
    {
        _id : generateID(),
        title : "Can you findiIt",
        img_url :"assets/images/CYFI Button.svg",
        slug:"Finding game",
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