import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./HeaderList.styles";
const HeaderList = ({ navigation, route, options, back }) => {
console.log("header")
  return (
    <View style={styles.HeaderList}>
      <Text style={styles.text}>headerList</Text>
    </View>
  );
};

export default HeaderList;
