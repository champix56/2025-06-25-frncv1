import { Image, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./MainPage.styles";
import Button from "../../components/ui/Button/Button";
interface IMainPageProps {}
interface IMainPageState {}
const mainPageInitialState = {};
const MainPage = (props: IMainPageProps) => {
  return (
    <View style={styles.MainPage}>
      <Text style={styles.titre}>Mon stock v1.0</Text>
      <Image source={{uri:'https://energynews.pro/wp-content/uploads/2023/10/entrepot-logistique.png'}} style={styles.image} />
      <View style={styles.buttonContainer}>
        <Button  style={styles.Button}onPress={() => {}}>
          <View style={styles.buttonView}>
            <Image source={{uri:'https://www.cartonsdedemenagement.com/carton-livres,CCLI10.png'}} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Nouveau</Text>
          </View>
        </Button>
        <Button bgColor="skyblue" style={styles.Button} onPress={() => {}}>
          <View style={styles.buttonView}>
            <Image source={{uri:'https://www.urbanhub.fr/wp-content/uploads/2020/07/entrepot-logistique-Paris-Urbanhub-photo-2.png'}} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Liste</Text>
          </View>
        </Button>
      </View>
    </View>
  );
};

export default MainPage;
