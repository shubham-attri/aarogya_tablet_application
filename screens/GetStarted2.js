import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const GetStarted2 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.getStarted2}
      onPress={() => navigation.navigate("GetStarted3")}
    >
      <Image
        style={styles.getStarted2Child}
        resizeMode="cover"
        source={require("../assets/group-933.png")}
      />
      <Text style={styles.keepAHealth}>Keep a health calendar</Text>
      <Image
        style={styles.oldPeople3}
        resizeMode="cover"
        source={require("../assets/old-people-3.png")}
      />
      <Text style={[styles.makeEntriesIn, styles.skip1Typo]}>
        Make entries in the calendar so as not to forget about taking the
        medications and visits to doctors.
      </Text>
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
  getStarted2Child: {
    width: 156,
    height: 58,
    marginTop: -82,
    marginRight: 537,
  },
  keepAHealth: {
    fontSize: FontSize.size_41xl,
    fontFamily: FontFamily.poppinsMediumRegular,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.16)",
    textShadowRadius: 4,
    marginRight: 253,
    marginTop: 34,
    textShadowOffset: {
      width: 4,
      height: 4,
    },
    color: Color.white,
  },
  oldPeople3: {
    width: 624,
    height: 624,
    marginTop: 34,
  },
  makeEntriesIn: {
    fontSize: FontSize.size_31xl,
    width: 468,
    marginTop: -552,
    marginRight: 756,
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
    marginTop: 139,
    marginRight: 102,
  },
  getStarted2: {
    backgroundColor: Color.slategray,
    flex: 1,
    width: "100%",
    paddingLeft: Padding.p_65xl,
    paddingTop: Padding.p_78xl,
    paddingRight: 59,
    alignItems: "flex-end",
  },
});

export default GetStarted2;
