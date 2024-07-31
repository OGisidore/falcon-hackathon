export interface Clue{
    _id : string,
    completed : boolean,
    type : string
    image ?: any
    img_url : string
    created_at? : Date
    udated_at? : Date
}