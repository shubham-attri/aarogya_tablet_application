import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Role = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.role}
      onPress={() => navigation.navigate("LoginAndSignUp")}
    >
      <Image
        style={styles.aarogyaHighResolutionLogoWIcon}
        resizeMode="cover"
        source={require("../assets/aarogyahighresolutionlogowhiteontransparentbackground.png")}
      />
      <Pressable
        style={[styles.caretakerWrapper, styles.wrapperShadowBox]}
        onPress={() => navigation.navigate("SorryPageAIBot1")}
      >
        <Text style={[styles.caretaker, styles.caretakerTypo]}>Caretaker</Text>
      </Pressable>
      <Pressable
        style={[styles.elderlyWrapper, styles.wrapperShadowBox]}
        onPress={() => navigation.navigate("LoginAndSignUp")}
      >
        <Text style={[styles.caretaker, styles.caretakerTypo]}>Elderly</Text>
      </Pressable>
      <Text style={[styles.chooseYourRole, styles.caretakerTypo]}>
        Choose your role
      </Text>
      <Image
        style={styles.iconAwesomeQuestionCircle}
        resizeMode="cover"
        source={require("../assets/icon-awesomequestioncircle.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapperShadowBox: {
    height: 85,
    width: 330,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    backgroundColor: Color.darkslategray,
    borderRadius: Border.br_3xs,
  },
  caretakerTypo: {
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.poppinsLightRegular,
  },
  aarogyaHighResolutionLogoWIcon: {
    width: 158,
    height: 158,
    marginTop: -196,
    marginRight: 560,
  },
  caretaker: {
    position: "absolute",
    marginTop: -24.5,
    top: "50%",
    left: 0,
    fontSize: FontSize.size_16xl,
    width: 331,
  },
  caretakerWrapper: {
    marginTop: 185,
    marginRight: 813,
  },
  elderlyWrapper: {
    marginTop: -85,
    marginRight: 153,
  },
  chooseYourRole: {
    fontSize: FontSize.size_36xl,
    width: 572,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: {
      width: 0,
      height: 3,
    },
    textShadowRadius: 6,
    marginRight: 362,
    marginTop: 126,
  },
  iconAwesomeQuestionCircle: {
    width: 88,
    height: 88,
    marginTop: 126,
  },
  role: {
    backgroundColor: Color.slategray,
    flex: 1,
    width: "100%",
    paddingLeft: 188,
    paddingTop: 52,
    paddingRight: 35,
    alignItems: "flex-end",
  },
});

export default Role;
