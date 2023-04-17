import * as React from "react";
import { Image, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const Intro = () => {
  const navigation = useNavigation();

  React.useEffect(() => {

    if (!navigation){
      console.warn('navigation object not available yet');
      return;
    }
    setTimeout(() => {
      navigation.navigate("LandingPage");
      
    }, 2000);

    
  }, [navigation]);

  return (

    <View style ={styles.intro}>
      <Image
        style={styles.aarogyaHighResolutionColorIcon}
        resizeMode="cover"
        source={require("../assets/aarogyahighresolutioncolorlogo.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  aarogyaHighResolutionColorIcon: {
    width: 1200,
    height: 2000,
  },
  intro: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    paddingRight: 0,
    marginTop: 4,
    marginBottom: 14,
    alignItems: "center",
  },
});

export default Intro;
