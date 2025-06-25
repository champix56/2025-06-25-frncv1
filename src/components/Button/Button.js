import { Text, View } from "react-native";

const Button = (props) => {
    console.log(props);
  return (
    <View>
      <Text>{JSON.stringify(props)}
      DEMAT BREIZH</Text>
    </View>
  );
};

export default Button;
