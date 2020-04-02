import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "../reducers/index";
import { applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";


const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
  blacklist: []
};


const persistedReducer = persistReducer(persistConfig, allReducers);

let store = createStore(
  persistedReducer, applyMiddleware(sagaMiddleware)
);
let persistor = persistStore(store);
// sagaMiddleware.run(mySaga);

export { store, persistor };