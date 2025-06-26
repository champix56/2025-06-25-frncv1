import { ScrollView, } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./ProductsLayout.styles";
 interface IProductsLayoutProps{
  children:Array<React.ReactElement>
 }
const ProductsLayout = (props: IProductsLayoutProps) => {
  
  return (
    <ScrollView style={styles.ProductsLayout}>
      {props.children}
    </ScrollView>
  );
};

export default ProductsLayout;
