import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import EditProduct from "./components/functional/EditProduct/EditProduct";

export default function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    //recuperation des datas rest pour state applicatif
    fetch(`${process.env.EXPO_PUBLIC_RESTADR}/products`)
      .then((r) => r.json())
      .then((arr) => setProducts(arr));
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>{JSON.stringify(products[0])}</Text>
        <EditProduct
          product={undefined === products[0] ? { image: "" } : products[0]}
          onProductChange={(product) => {
            setProducts([product, ...products.slice(1)]);
          }}
        />
      </View>
    </SafeAreaView>
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
