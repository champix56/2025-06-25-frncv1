import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  Alert,
} from "react-native";
import { useState, useEffect } from "react";
import ProductsLayout from "./components/layout/ProductsLayout/ProductsLayout";
import ProductInFlexGrid from "./components/ui/Button/ProductInFlexGrid/ProductInFlexGrid";
import store from './store/store'
export default function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    //recuperation des datas rest pour state applicatif
    fetch(`${process.env.EXPO_PUBLIC_RESTADR}/products`)
      .then((r) => r.json())
      .then((arr) =>
        setProducts([...arr, ...arr, ...arr, ...arr, ...arr, ...arr])
      );
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text style={{ textAlign: "center", fontSize: 30 }}>
            Liste des produits disponibles
          </Text>
        </View>
        <ProductsLayout>
          {products.map((e, i) => (
            <ProductInFlexGrid product={e} key={'p'+i} onPress={(p)=>{
              ToastAndroid.show(`${p.name} : ${p.stock}`, ToastAndroid.SHORT)
            }}
            onLongPress={(p)=>{
              Alert.alert('LongPress', `${p.name} : ${p.stock}`)
            }}
             />
          ))}
        </ProductsLayout>
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
