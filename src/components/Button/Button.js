import { Text, TouchableHighlight, View, StyleSheet } from "react-native";
/**
 * 
 * @param {{bgColor:string,color:string}} props 
 * @returns 
 */
const Button = (props) => {
  console.log(props);
  /**
   * gestion press du button
   * @param evt {GestureResponderEvent} event
   * @returns undefined
   *
   */
  function onButtonPress(evt) {
    console.log(evt);
    alert("Titre", "message");
  }
  return (
    <TouchableHighlight onPress={onButtonPress}>
      <View style={[style.Touchable, { backgroundColor: props.bgColor }]}>
        <Text style={[style.Text, { color: props.color }]}>DEMAT BREIZH</Text>
      </View>
    </TouchableHighlight>
  );
};

const style = StyleSheet.create({
  Touchable: {
    backgroundColor: "blue",
    marginLeft: 5,
    marginRight: 5,
    padding: 7,
    borderRadius: 7,
  },
  Text: {
    color: "red",
    fontWeight: "900",
    fontSize: 12,
    textAlign: "center",
  },
});

export default Button;
