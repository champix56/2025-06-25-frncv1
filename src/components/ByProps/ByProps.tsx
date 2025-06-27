import { Text, View } from "react-native";
import React from "react";
import styles from "./ByProps.styles";

const ByProps = (props:any) => {
  return (
    <View style={styles.ByProps}>
      <Text>byProps</Text>
      <Text>{JSON.stringify(props)}</Text>
    </View>
  );
};

export default ByProps;
