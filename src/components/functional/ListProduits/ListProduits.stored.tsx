import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import ListProduitsUnconnected from "./ListProduits";
import { add } from "../../../store/produits";
import IProduct from "../../../interfaces/iProduct";
import { IConnectedListProductsProps } from "./IListProduits";
import { dummyProduct, select } from "../../../store/currentProduct";
import { useNavigation } from "@react-navigation/native";

const ListProduits = (props: IConnectedListProductsProps) => {
  const productsInStore = useSelector((e: RootState) => e.ressources.products);
  const dispatch: AppDispatch = useDispatch();
  const nav=useNavigation();
  return (
    <ListProduitsUnconnected
      {...props}
      products={productsInStore}
      addProduct={(p: IProduct) => {
        console.log(add(p));
        dispatch(add(p));
      }}
      onProductLongPress={(p)=>{
        dispatch(select(p));
        nav.navigate('edit');
      }}
    />
  );
};
export default ListProduits;
