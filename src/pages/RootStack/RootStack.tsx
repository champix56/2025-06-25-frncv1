import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainPage from "../MainPage/MainPage";
import EditProduct from "../../components/functional/EditProduct/EditProduct.store";
import ListProduits from "../../components/functional/ListProduits/ListProduits.stored";
import { NavigationContainer } from "@react-navigation/native";
import HeaderList from "../../components/HeaderList/HeaderList";
import ByProps from "../../components/ByProps/ByProps";

const rootStackInitialState = {};
export type IScreens = {
  main: undefined;
  edit: undefined;
  list: undefined;
  credits: {users:Array<{name:string,id:number}>};
};
const NativeStack = createNativeStackNavigator<IScreens>();

const RootStack = () => {
  const [state, setstate] = useState(rootStackInitialState);

  useEffect(() => {
    return () => {};
  }, []);
  return (
    <NavigationContainer>
      <NativeStack.Navigator initialRouteName="main">
        <NativeStack.Screen
          component={MainPage}
          name="main"
          options={{ headerShown: false }}
        ></NativeStack.Screen>
        <NativeStack.Screen
          component={EditProduct}
          name="edit"
          options={{
            headerStyle: { backgroundColor: "skyblue" },
            title: "Edition produit",
          }}
        ></NativeStack.Screen>
        <NativeStack.Screen
          component={ListProduits}
          name="list"
          options={{ header: HeaderList }}
        ></NativeStack.Screen>
        <NativeStack.Screen
          name="credits"
          component={ByProps}
          initialParams={{
            users: [
              { name: "toto", id: 0 },
              { name: "tata", id: 1 },
            ],
          }}
        />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
