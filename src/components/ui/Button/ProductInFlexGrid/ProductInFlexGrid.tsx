import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./ProductInFlexGrid.styles";
import IProduct from "../../../../interfaces/iproduct";

interface IProductInFlexGridProps {
  product: IProduct;
  onPress?: Function;
  onLongPress?: Function;
}

const ProductInFlexGrid = (props: IProductInFlexGridProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (undefined !== props.onPress) {
          props.onPress(props.product);
        }
      }}
      onLongPress={() => {
        if (undefined !== props.onLongPress) {
          props.onLongPress(props.product);
        }
      }}
    >
      <View   style={styles.ProductInFlexGrid}
    >
        <Image source={{ uri: props.product.image }} style={styles.image} />
        <Text>{props.product.name}</Text>
        <Text
          style={[
            styles.dispoState,
            { color: props.product.stock > 0 ? "green" : "red" },
          ]}
        >{props.product.stock > 0 ? "disponible" : "victime de son succes" }
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductInFlexGrid;
