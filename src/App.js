import { StyleSheet, Text, View } from "react-native";
import Button from "./components/Button/Button";
import { useState, useEffect } from "react";
import FlexL from "./components/FlexL/FlexL";

// export class App extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state={
//       counter:0,
//       text:"",
//     }
//   }
// componentDidMount(){

// }
//   componentDidUpdate(os,od){

//   }
//   componentWillUnmount(){}
//   render() {
//     return (
//       <View style={styles.c1}>
//         <Text>Valeur du counter: {counter}</Text>
//         <View style={styles.container}>
//           <Button
//             text="-1"
//             bgColor="tomato"
//             color="white"
//             onPress={() => {
//               this.setState({counter:this.state.counter+1})
//               //this.state.counter--;
//               console.trace(counter);
//             }}
//           />
//           <Button
//             text="+1"
//             bgColor="skyblue"
//             color="white"
//             onPress={() => {
//               counter++;
//               console.trace(counter);
//             }}
//           />
//         </View>
//       </View>
//     );
//   }
// }
export default function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    //didMount
    setCounter(-1000);
  }, []);
  useEffect(() => {
    //didMount+didUpdate
    console.warn(counter);
    return () => {
      //willUnmount
    };
  }, [counter]);
  return (
    <View style={styles.c1}>
      <Text>Valeur du counter: {counter}</Text>
      <View style={styles.container}>
        <FlexL>
          {" "}
          <Button
            text="-1"
            bgColor="tomato"
            color="white"
            onPress={() => {
              setCounter(counter - 1);
              console.trace(counter);
            }}
          />
          <Button
            text="+1"
            bgColor="skyblue"
            color="white"
            onPress={() => {
              setCounter(counter + 1);
              console.trace(counter);
            }}
          />
        </FlexL>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  c1: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
