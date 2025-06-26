import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./ProductInFlexGrid.styles";
import IProduct from "../../../../interfaces/iproduct";
interface IProductInFlexGridProps {
  product: IProduct;
  onPress?: Function;
  onLongPress?: Function;
}

const ProductInFlexGrid = (props: IProductInFlexGridProps) => {
  return (
    <View style={styles.ProductInFlexGrid}>
      <Text>productInFlexGrid</Text>
    </View>
  );
};

export default ProductInFlexGrid;
