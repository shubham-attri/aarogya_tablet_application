import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const RoutineTracker = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.routineTracker}
      onPress={() => navigation.navigate("PeopleFinder")}
    >
      <Text style={[styles.wakeUp, styles.wakeUpClr]}>Wake up</Text>
      <Text style={[styles.exercise, styles.wakeUpClr]}>Exercise</Text>
      <Text style={[styles.eveningWalk, styles.wakeUpClr]}>Evening walk</Text>
      <Text style={[styles.newspaper, styles.wakeUpClr]}>Newspaper</Text>
      <Text style={[styles.takeMeds, styles.takeTypo]}>Take Meds</Text>
      <Text style={[styles.dinner, styles.wakeUpClr]}>Dinner</Text>
      <Text style={[styles.takeMeds1, styles.takeTypo]}>Take Meds</Text>
      <Image
        style={styles.routineTrackerChild}
        resizeMode="cover"
        source={require("../assets/group-49.png")}
      />
      <Text style={styles.text}>43%</Text>
      <Text style={[styles.yourRoutine, styles.wakeUpClr]}>Your routine</Text>
      <Image
        style={styles.routineTrackerItem}
        resizeMode="cover"
        source={require("../assets/group-972.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/group-9853.png")}
        />
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wakeUpClr: {
    color: Color.white,
    textAlign: "center",
  },
  takeTypo: {
    width: 262,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_21xl,
  },
  wakeUp: {
    width: 219,
    marginTop: 36,
    marginRight: 355,
    textAlign: "center",
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_21xl,
    color: Color.white,
  },
  exercise: {
    width: 191,
    marginTop: -109,
    textAlign: "center",
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_21xl,
    color: Color.white,
  },
  eveningWalk: {
    width: 244,
    marginTop: 165,
    marginRight: 598,
    textAlign: "center",
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_21xl,
    color: Color.white,
  },
  newspaper: {
    width: 284,
    marginTop: -98,
    marginRight: 48,
    textAlign: "center",
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_21xl,
    color: Color.white,
  },
  takeMeds: {
    marginTop: -488,
    marginRight: 640,
  },
  dinner: {
    width: 153,
    marginTop: -48,
    marginRight: 737,
    textAlign: "center",
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_21xl,
    color: Color.white,
  },
  takeMeds1: {
    marginTop: -42,
    marginRight: 5,
  },
  routineTrackerChild: {
    width: 547,
    height: 520,
    marginTop: 7,
    marginRight: 190,
  },
  text: {
    fontSize: 104,
    fontFamily: FontFamily.poppinsExtraBoldRegular,
    color: Color.black,
    marginTop: 107,
    marginRight: 327,
    textAlign: "center",
  },
  yourRoutine: {
    fontSize: FontSize.size_36xl,
    fontFamily: FontFamily.poppinsLightRegular,
    width: 331,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: {
      width: 0,
      height: 3,
    },
    textShadowRadius: 6,
    marginRight: 299,
    marginTop: 8,
    textAlign: "center",
  },
  routineTrackerItem: {
    width: 158,
    height: 158,
    marginRight: 376,
    marginTop: 8,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 118,
    height: 118,
    marginTop: -138,
    marginRight: 968,
  },
  routineTracker: {
    backgroundColor: Color.slategray,
    flex: 1,
    paddingLeft: Padding.p_42xl,
    paddingTop: Padding.p_42xl,
    paddingRight: Padding.p_200xl,
    alignItems: "flex-end",
    width: "100%",
  },
});

export default RoutineTracker;
