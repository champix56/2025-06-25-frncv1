import { GestureResponderEvent, Text, TouchableHighlight, View} from "react-native";
import styleFile from "./Button.styles";

interface IButtonProps{
  children:React.ReactElement|Array<React.ReactElement>;
  onPress:Function;
  bgColor?:'tomato'|'skyblue'|'blue';
  color? : string;
  style?:{}
}

const Button = ({children,style, onPress,bgColor='tomato', color='yellow'}:IButtonProps) => {
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
    <TouchableHighlight onPress={onButtonPress} style={style}>
      <View style={[styleFile.Touchable, { backgroundColor: bgColor }]}>
        {children}
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
