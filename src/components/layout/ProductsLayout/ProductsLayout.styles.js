import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  FlexScrollView: {
    padding: 10,
    height:350
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "space-evenly",
  },
});

export default styles;
