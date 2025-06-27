import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import store from "./store/store";
import RootStack from "./pages/RootStack/RootStack";
export default function App() {
  return (
    <Provider store={store}>
        <RootStack />
    </Provider>
  );
}
