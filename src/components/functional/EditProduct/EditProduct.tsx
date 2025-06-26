import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./EditProduct.styles";
interface IEditProductProps {}
interface IEditProductState {}
const editProductInitialState = {};
const EditProduct = (props: IEditProductProps) => {
  const [state, setstate] = useState<IEditProductState>(
    editProductInitialState
  );
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <View style={styles.EditProduct}>
      <Text>editProduct</Text>
    </View>
  );
};

export default EditProduct;
