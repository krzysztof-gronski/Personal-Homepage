import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import personalHomepageReducer from "../features/personalHomepage/personalHomepageSlice";
import themeReducer from "../common/themeSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    // personalHomepage: personalHomepageReducer,
    // theme: themeReducer,
  },
  middleware: [sagaMiddleware],
});

// sagaMiddleware.run(rootSaga);

export default store;
