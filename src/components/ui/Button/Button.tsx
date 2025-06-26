import { GestureResponderEvent, Text, TouchableHighlight, View} from "react-native";
import style from "./Button.styles";

interface IButtonProps{
  text:string;
  onPress:Function;
  bgColor?:'tomato'|'skyblue'|'blue';
  color? : string;
}

const Button = ({text, onPress,bgColor='tomato', color='yellow'}:IButtonProps) => {
  //console.log(props);
  /**
   * gestion press du button
   * @param evt {GestureResponderEvent} event
   * @returns undefined
   *
   */
  function onButtonPress(evt:GestureResponderEvent) {
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

export default Button;
