import "../styles/globals.css";
import { persistor, store } from "../redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />;
        </Provider>
    );
}

export default MyApp;
