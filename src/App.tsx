import { BrowserRouter } from "react-router-dom";
import Pages from "pages";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import store from "store";

let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Pages />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
