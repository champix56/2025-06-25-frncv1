import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./MainPage.styles";
import Button from "../../components/ui/Button/Button";
import { useNavigation } from "@react-navigation/native";
interface IMainPageProps {}
interface IMainPageState {}
const mainPageInitialState = {};
const MainPage = (props: IMainPageProps) => {
  console.log("mainPa");
  const navigation: any = useNavigation();
  return (
    <View style={styles.MainPage}>
      <Text style={styles.titre}>Mon stock v1.0</Text>
      <Image
        source={{
          uri: "https://energynews.pro/wp-content/uploads/2023/10/entrepot-logistique.png",
        }}
        style={styles.image}
      />
      <View style={styles.buttonContainer}>
        <Button
          style={styles.Button}
          onPress={() => {
            navigation.navigate("edit");
          }}
        >
          <View style={styles.buttonView}>
            <Image
              source={{
                uri: "https://www.cartonsdedemenagement.com/carton-livres,CCLI10.png",
              }}
              style={styles.buttonImage}
            />
            <Text style={styles.buttonText}>Nouveau</Text>
          </View>
        </Button>
        <Button
          bgColor="skyblue"
          style={styles.Button}
          onPress={() => {
            navigation.navigate("list");
          }}
        >
          <View style={styles.buttonView}>
            <Image
              source={{
                uri: "https://www.urbanhub.fr/wp-content/uploads/2020/07/entrepot-logistique-Paris-Urbanhub-photo-2.png",
              }}
              style={styles.buttonImage}
            />
            <Text style={styles.buttonText}>Liste</Text>
          </View>
        </Button>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("credits");
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "blue",
            textDecorationStyle: "solid",
            textDecorationColor: "blue",
            marginTop:5
          }}
        >
          ByDefault credits
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("credits", {
            users: [],
            coucou: "nouvelle objet",
          });
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "blue",
            textDecorationStyle: "solid",
            textDecorationColor: "blue",
          }}
        >
          By param on nav credits
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainPage;
