import { View, StyleSheet } from "react-native";
import React from "react";
interface IFlexLProps {
  children: Array<React.ReactElement> | React.ReactElement;
}
const FlexL = (props:IFlexLProps) => {
  console.log(props);
  return <View style={s.container}>{props.children}</View>;
};
const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
export default FlexL;
