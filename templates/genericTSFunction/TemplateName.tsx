import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./TemplateName.styles";
interface ITemplateNameProps {}
interface ITemplateNameState {}
const templateNameInitialState = {};
const TemplateName = (props: ITemplateNameProps) => {
  const [state, setstate] = useState<ITemplateNameState>(
    templateNameInitialState
  );
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <View style={styles.TemplateName}>
      <Text>templateName</Text>
    </View>
  );
};

export default TemplateName;
