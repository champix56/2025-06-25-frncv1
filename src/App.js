import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "./components/ui/Button/Button";
import { useState, useEffect } from "react";
import FlexL from "./components/layouts/FlexL/FlexL";
import EditProduct from "./components/functional/EditProduct/EditProduct";

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
  useEffect(() => {}, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <EditProduct />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
    // flexDirection: "row",
    // marginTop:10
  },
});
