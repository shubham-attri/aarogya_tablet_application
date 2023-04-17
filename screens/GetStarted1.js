import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const GetStarted1 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.getStarted1}
      onPress={() => navigation.navigate("GetStarted2")}
    >
      <Text style={styles.helpingTheElderly}>Helping the Elderly</Text>
      <Text style={[styles.easilyMonitorThe, styles.skip1Typo]}>
        Easily monitor the health of your loved ones with this application.
      </Text>
      <Image
        style={styles.oldPeople4}
        resizeMode="cover"
        source={require("../assets/old-people-4.png")}
      />
      <Image
        style={styles.getStarted1Child}
        resizeMode="cover"
        source={require("../assets/group-932.png")}
      />
      <Pressable
        style={styles.skip}
        onPress={() => navigation.navigate("Role")}
      >
        <Text style={[styles.skip1, styles.skip1Typo]}>{`Skip >`}</Text>
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  skip1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    color: Color.white,
  },
  helpingTheElderly: {
    fontSize: FontSize.size_41xl,
    fontFamily: FontFamily.poppinsMediumRegular,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.16)",
    textShadowRadius: 4,
    marginRight: 319,
    textShadowOffset: {
      width: 4,
      height: 4,
    },
    color: Color.white,
  },
  easilyMonitorThe: {
    fontSize: FontSize.size_31xl,
    width: 443,
    marginTop: -479,
  },
  oldPeople4: {
    width: 579,
    height: 579,
    marginTop: 82,
    marginRight: 599,
  },
  getStarted1Child: {
    width: 156,
    height: 58,
    marginTop: -48,
    marginRight: 512,
  },
  skip1: {
    fontSize: FontSize.size_21xl,
    width: 115,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowRadius: 6,
    textShadowOffset: {
      width: 4,
      height: 4,
    },
  },
  skip: {
    marginTop: 215,
    marginRight: 77,
  },
  getStarted1: {
    backgroundColor: Color.slategray,
    flex: 1,
    width: "100%",
    paddingLeft: 104,
    paddingTop: Padding.p_78xl,
    paddingRight: Padding.p_65xl,
    alignItems: "flex-end",
  },
});

export default GetStarted1;
