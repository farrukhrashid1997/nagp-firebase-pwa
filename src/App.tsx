import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import AppRouter from "./AppRouter";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
