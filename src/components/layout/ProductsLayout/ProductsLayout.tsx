import { ScrollView, View, } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./ProductsLayout.styles";
 interface IProductsLayoutProps{
  children:Array<React.ReactElement>
 }
const ProductsLayout = (props: IProductsLayoutProps) => {
  
  return (
    <ScrollView style={styles.FlexScrollView}>
      <View style={styles.container}>
      {props.children}
      </View>
    </ScrollView>
  );
};

export default ProductsLayout;
