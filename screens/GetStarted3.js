import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const GetStarted3 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.getStarted3}
      onPress={() => navigation.navigate("Role")}
    >
      <Text style={styles.monitorTheHealth}>Monitor the health</Text>
      <Text style={[styles.youCanMeasure, styles.go1Typo]}>
        You can measure and record health indicators daily and get
        recommendations and statistics.
      </Text>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/7201306-30809.png")}
      />
      <Image
        style={styles.getStarted3Child}
        resizeMode="cover"
        source={require("../assets/group-934.png")}
      />
      <Pressable style={styles.go} onPress={() => navigation.navigate("Role")}>
        <Text style={[styles.go1, styles.go1Typo]}>{`Go >`}</Text>
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  go1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    color: Color.white,
  },
  monitorTheHealth: {
    fontSize: FontSize.size_41xl,
    fontFamily: FontFamily.poppinsMediumRegular,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.16)",
    textShadowRadius: 4,
    marginRight: 307,
    textShadowOffset: {
      width: 4,
      height: 4,
    },
    color: Color.white,
  },
  youCanMeasure: {
    fontSize: FontSize.size_31xl,
    width: 468,
    marginTop: -478,
  },
  icon: {
    width: 766,
    height: 583,
    marginTop: 19,
    marginRight: 518,
  },
  getStarted3Child: {
    width: 156,
    height: 58,
    marginTop: -48,
    marginRight: 514,
  },
  go1: {
    fontSize: FontSize.size_21xl,
    width: 89,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowRadius: 6,
    textShadowOffset: {
      width: 4,
      height: 4,
    },
  },
  go: {
    marginTop: 121,
    marginRight: 79,
  },
  getStarted3: {
    backgroundColor: Color.slategray,
    flex: 1,
    width: "100%",
    paddingTop: Padding.p_78xl,
    paddingRight: 82,
    alignItems: "flex-end",
  },
});

export default GetStarted3;
