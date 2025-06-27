import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./RootStack.styles";
import {
  createNativeStackNavigator,
  createStaticNavigation,
} from "@react-navigation/native-stack";
import MainPage from "../MainPage/MainPage";
import EditProduct from "../../components/functional/EditProduct/EditProduct.store";
import ListProduits from "../../components/functional/ListProduits/ListProduits.stored";
// interface IRootStackState {}
const rootStackInitialState = {};
 
const NativeStack = createNativeStackNavigator();

// const Navigator=createStaticNavigation();
const RootStack = () => {
  const [state, setstate] = useState < IRootStackState > rootStackInitialState;
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <NativeStack>
      <NativeStack.Screen component={MainPage} name="main"></NativeStack.Screen>
      <NativeStack.Screen component={EditProduct} name="edit"></NativeStack.Screen>
      <NativeStack.Screen component={ListProduits} name="list"></NativeStack.Screen>
    </NativeStack>
  );
};

export default RootStack;
