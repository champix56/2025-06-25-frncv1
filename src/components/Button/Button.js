import { Text, TouchableHighlight, View, StyleSheet } from "react-native";


const Button = ({text, onPress,bgColor='tomato', color='yellow'}) => {
  //console.log(props);
  /**
   * gestion press du button
   * @param evt {GestureResponderEvent} event
   * @returns undefined
   *
   */
  function onButtonPress(evt) {
    onPress();
  }
  return (
    <TouchableHighlight onPress={onButtonPress}>
      <View style={[style.Touchable, { backgroundColor: bgColor }]}>
        <Text style={[style.Text, { color: color }]}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};
// Button.defaultProps={
//     bgColor:'tomato',
//     color:"yellow"
// }
// Button.propTypes ={
//     bgColor:PropTypes.string.isRequired,
//     color: PropTypes.string.isRequired,
//     o: PropTypes.shape({
//       e: PropTypes.number.isRequired,
//       x: PropTypes.shape({
//         a: PropTypes.string.isRequired
//       }).isRequired
//     }).isRequired
//     //{e:4,x:{a:"s"}
// }

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
