import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import ListProduitsUnconnected from "./ListProduits";
import { add } from "../../../store/produits";
import IProduct from "../../../interfaces/iProduct";
import { IConnectedListProductsProps } from "./IListProduits";

const ListProduits = (props: IConnectedListProductsProps) => {
  const productsInStore = useSelector((e: RootState) => e.ressources.products);
  const dispatch: AppDispatch = useDispatch();
  return (
    <ListProduitsUnconnected
      {...props}
      products={productsInStore}
      addProduct={(p: IProduct) => {
        console.log(add(p));
        dispatch(add(p));
      }}
    />
  );
};
export default ListProduits;
