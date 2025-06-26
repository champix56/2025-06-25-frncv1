import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./ViewProduct.styles";
interface IViewProductProps {}
interface IViewProductState {}
const viewProductInitialState = {};
const ViewProduct = (props: IViewProductProps) => {
  const [state, setstate] = useState<IViewProductState>(
    viewProductInitialState
  );
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <View style={styles.ViewProduct}>
      <Text>viewProduct</Text>
    </View>
  );
};

export default ViewProduct;
