
import { configureStore } from "@reduxjs/toolkit"
import { gameReducers } from "./Redux/reducers/gameReducer"

const store = configureStore({
  reducer:{
    Games : gameReducers

  }
}

)

export default store
