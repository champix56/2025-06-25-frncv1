import { Button, Image, Platform, Switch, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./EditProduct.styles";
import IProduct from "../../../interfaces/iproduct";
interface IEditProductProps {
  product: IProduct;
  onProductChange: Function;
}
const EditProduct = (props: IEditProductProps) => {
  useEffect(() => {
    setProduct(props.product);
  }, [props.product]);

  const [product, setProduct] = useState<IProduct>({
    description: "",
    image: "",
    name: "",
    prix: 0,
    stock: 0,
  });
  // const [image, setImage] = useState("");
  // useEffect(() => {

  // }, [image])
  useEffect(() => {
    return () => {};
  }, []);
  function onTextChange(
    propertyName: string,
    value: string,
    type: "string" | "number" = "string"
  ) {
    const tmp = { ...product };
    switch (type) {
      case "number":
        tmp[propertyName] = Number(value);
        break;
      default:
        tmp[propertyName] = value;
    }
    setProduct(tmp);
  }
  return (
    <View style={styles.EditProduct}>
      <Text>Image du produit</Text>
      <Image
        style={styles.image}
        source={{
          uri:
            product.image.length > 0
              ? product.image
              : "https://www.ioburo.fr/453413-large_default/carton-de-demenagement-55x35.jpg",
        }}
      />
      <TextInput
        placeholder="Titre du produit"
        value={product.name}
        onChangeText={(t) => {
          onTextChange("name", t);
        }}
      />
      <TextInput
        placeholder="0.00€" keyboardType="numeric"
        value={product.prix.toFixed(2)}
        onChangeText={(t) => {
          onTextChange("prix", t, "number");
        }}
      />
      <TextInput
        placeholder="chemin image"
        value={product.image}
        onChangeText={(t) => {
          onTextChange("image", t);
        }}
      />
      <Text>Disponible</Text>
      <Switch
        value={product.stock > 0}
        onValueChange={(b) => {
          onTextChange("stock", Number(b).toString(), "number");
        }}
      />
      <TextInput
        placeholder="description"
        value={product.description}
        onChangeText={(t) => {
          onTextChange("description", t);
        }}
        keyboardType={Platform.OS==="ios"?"name-phone-pad":"decimal-pad"}
      />
      <Button title="Annuler" />
      <Button
        title="Enregistrer"
        onPress={() => {
          props.onProductChange(product);
        }}
      />
      {Platform.OS==='ios'&&<Text>IOS</Text>}
      <Text>{JSON.stringify(product)}</Text>
    </View>
  );
};

export default EditProduct;
