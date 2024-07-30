import { Clue } from "../Models/Clue";
import { generateID } from "../Utilities";

export const clues : Clue[] = [
    {
        _id : generateID(),
        completed : false,
        type : "color",
        created_at : new Date(),
        img_url : 'assets/images/color wheel.svg'
    },
    {
        _id : generateID(),
        completed : false,
        type : "shapes",
        created_at : new Date(),
        img_url : 'assets/images/shapes.svg'
    },
    {
        _id : generateID(),
        completed : false,
        type : "sound",
        created_at : new Date(),
        img_url : 'assets/images/sound.svg'
    },
    {
        _id : generateID(),
        completed : false,
        type : "texture",
        created_at : new Date(),
        img_url : 'assets/images/texture.svg'
    },
    {
        _id : generateID(),
        completed : false,
        type : "sound",
        created_at : new Date(),
        img_url : 'assets/images/sound.svg'
    },
    {
        _id : generateID(),
        completed : false,
        type : "texture",
        created_at : new Date(),
        img_url : 'assets/images/texture.svg'
    },
    {
        _id : generateID(),
        completed : false,
        type : "shapes",
        created_at : new Date(),
        img_url : 'assets/images/shapes.svg'
    },
    {
        _id : generateID(),
        completed : false,
        type : "color ",
        created_at : new Date(),
        img_url : 'assets/images/color wheel.svg'
    },
    {
        _id : generateID(),
        completed : false,
        type : "shapes",
        created_at : new Date(),
        img_url : 'assets/images/shapes.svg'
    },
]