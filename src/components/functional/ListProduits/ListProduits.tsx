import { Alert, ToastAndroid, View, Button } from "react-native";
import React from "react";
import ProductsLayout from "../../layout/ProductsLayout/ProductsLayout";
import IProduct from "../../../interfaces/iproduct";
import ProductInFlexGrid from "../../ui/Button/ProductInFlexGrid/ProductInFlexGrid";
import { IConnectedListProductsProps } from "./IListProduits";

interface IListProduitsProps {
  products: Array<IProduct>;
  addProduct: Function;
}
type IAssembleProps = IConnectedListProductsProps & IListProduitsProps;
const ListProduits = (props: IAssembleProps) => {
  return (
    <View>
      <Button
        title="Nouveau"
        onPress={() => {
          props.addProduct({
            id: -1,
            name: "",
            description: "",
            prix: 0,
            stock: 0,
            image: "",
          });
        }}
      />
      <ProductsLayout>
        {props.products.map((e, i) => (
          <ProductInFlexGrid
            product={e}
            key={"p" + i}
            onPress={(p) => {
              ToastAndroid.show(`${p.name} : ${p.stock}`, ToastAndroid.SHORT);
            }}
            onLongPress={(p) => {
              Alert.alert("LongPress", `${p.name} : ${p.stock}`);
            }}
          />
        ))}
      </ProductsLayout>
    </View>
  );
};

export default ListProduits;

// function mapDispatchToProps(dispatch:AppDispatch){
//   return {
//     addProduct:(p)=>{dispatch(add(p))}
//   }
// }
// function mapStateToProps(parentProps,s:RootState){
//   return {...parentProps,products:s.ressources.products}
// }

// export const ConnectedComponent=connect(mapStateToProps,mapDispatchToProps)(ListProduits)
