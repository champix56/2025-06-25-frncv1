import { Alert, ToastAndroid, View, Button } from "react-native";
import React from "react";
import ProductsLayout from "../../layout/ProductsLayout/ProductsLayout";
import IProduct from "../../../interfaces/iProduct";
import ProductInFlexGrid from "../../ui/Button/ProductInFlexGrid/ProductInFlexGrid";
import { IConnectedListProductsProps } from "./IListProduits";

interface IListProduitsProps {
  products: Array<IProduct>;
  // addProduct: Function;
  onProductLongPress?: Function;
}
type IAssembleProps = IConnectedListProductsProps & IListProduitsProps;
const ListProduits = (props: IAssembleProps) => {
  return (
    <View>
      <ProductsLayout>
        {props.products.map((e, i) => (
          <ProductInFlexGrid
            product={e}
            key={"p" + i}
            onPress={(p) => {
              ToastAndroid.show(`${p.name} : ${p.stock}`, ToastAndroid.SHORT);
            }}
            onLongPress={(p) => {
              if (undefined !== props.onProductLongPress) {
                props.onProductLongPress(p);
              }
              Alert.alert("Edition de ", `${p.name} : ${p.stock}`);
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
