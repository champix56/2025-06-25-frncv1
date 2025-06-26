import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import ListProduits from "./components/functional/ListProduits/ListProduits.stored";
import { Provider } from "react-redux";
import store from "./store/store";
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <View style={styles.container}>
          <View>
            <Text style={{ textAlign: "center", fontSize: 30 }}>
              Liste des produits disponibles
            </Text>
          </View>
          <ListProduits />
        </View>
      </SafeAreaView>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
    // flexDirection: "row",
    // marginTop:10
  },
});
