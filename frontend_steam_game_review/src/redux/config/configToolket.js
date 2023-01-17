import { configureStore } from "@reduxjs/toolkit";
import comments from "../modules/commentsSlice";
import comment from "../modules/commentsSlice";

/**
 * import 해온 것은 slice.reducer 입니다.
 */

const store = configureStore({
  reducer: { comments },
});

export default store;
