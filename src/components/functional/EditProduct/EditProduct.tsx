import { Button, Image, Switch, Text, TextInput, View } from "react-native";
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
      <Text>Image du produit</Text>
      <Image style={styles.image} source={{uri:"https://www.ioburo.fr/453413-large_default/carton-de-demenagement-55x35.jpg"}}/>
      <TextInput placeholder="Titre du produit" />
      <TextInput placeholder="0.00€" />
      <TextInput placeholder="chemin image" />
      <Text>Disponible</Text>
      <Switch/>
      <Button title="Annuler"/>
      <Button title="Enregistrer"/>
    </View>
  );
};

export default EditProduct;
