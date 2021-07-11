import { createStore } from "redux";
import allreducers from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["counter"],
};

const persistedReducer = persistReducer(persistConfig, allreducers);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
