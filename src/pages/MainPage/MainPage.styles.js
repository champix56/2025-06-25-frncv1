import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  MainPage: {marginTop:50, height:'100%'},
  titre:{fontSize:60,fontWeight:'900', textAlign:'center',marginBottom:50},
  image:{height:130,marginBottom:150},
  buttonContainer:{paddingHorizontal:10, flexDirection:'row', justifyContent:"space-between", },
  Button:{maxWidth:'45%', padding:5, borderRadius:10},
  buttonView:{marginHorizontal:10, flexDirection:'row', alignItems:'center'},
  buttonText:{color:"white",fontWeight:'900',},
  buttonImage:{height:70,width:70}
});

export default styles;
