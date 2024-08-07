import { GlobalState } from "./types/GlobalState";

export const getCategory = (state : GlobalState)=> state.Games.category
export const getImageShot = (state : GlobalState)=> state.Games.image
export const getResponseColor = (state : GlobalState)=> state.Games.colors
export const getquestColor = (state : GlobalState)=> state.Games.questionColor
