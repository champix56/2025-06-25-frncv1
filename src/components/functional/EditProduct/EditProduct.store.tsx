import { View, Text } from "react-native";
import React, { useState } from "react";
import Editor from "./EditProduct";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
type Props = {};

const EditProduct = (props: Props) => {
  const prod = useSelector((storeState: RootState) => storeState.current);
  return <Editor onProductChange={() => {}} product={prod} />;
};

export default EditProduct;
