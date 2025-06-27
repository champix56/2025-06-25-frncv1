import { View, Text } from "react-native";
import React, { useState } from "react";
import Editor from "./EditProduct";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { saveProductToServer } from "../../../store/asyncCalling";
type Props = {
  style?:{}
};

const EditProduct = (props: Props) => {
  const prod = useSelector((storeState: RootState) => storeState.current);
  const dispatch: AppDispatch = useDispatch();
  return (
    <Editor
      {...props}
      onProductChange={(p) => {
        dispatch(saveProductToServer(p));
      }}
      product={prod}
    />
  );
};

export default EditProduct;
