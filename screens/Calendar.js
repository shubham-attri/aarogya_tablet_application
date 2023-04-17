import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const Calendar = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.calendar}
      onPress={() => navigation.navigate("SorryPageAIBot1")}
    >
      <View style={styles.groupParent}>
        <View style={[styles.groupContainer, styles.newReminderPosition]}>
          <View style={[styles.rectangleWrapper, styles.groupChildPosition]}>
            <View style={[styles.groupChild, styles.groupChildPosition]} />
          </View>
          <Text style={styles.april2023}>April 2023</Text>
        </View>
        <View style={styles.sunMonTueWedThParent}>
          <Text style={[styles.sunContainer, styles.text30Typo]}>
            <Text style={styles.sun}>Sun</Text>
            <Text style={styles.mon}> Mon Tue Wed Thu Fri Sat</Text>
          </Text>
          <Text style={[styles.text, styles.textTypo2]}>1</Text>
          <Text style={[styles.text1, styles.textPosition6]}>8</Text>
          <Text style={[styles.text2, styles.textPosition5]}>15</Text>
          <Text style={[styles.text3, styles.textPosition4]}>22</Text>
          <Text style={[styles.text4, styles.textGroupPosition]}>21</Text>
          <Text style={[styles.text5, styles.textTypo2]}>29</Text>
          <Text style={[styles.text6, styles.textGroupPosition]}>7</Text>
          <Text style={[styles.text7, styles.textGroupPosition]}>14</Text>
          <Text style={[styles.text8, styles.textGroupPosition]}>28</Text>
          <Text style={[styles.text9, styles.textPosition3]}>6</Text>
          <Text style={[styles.text10, styles.textPosition3]}>13</Text>
          <Text style={[styles.text11, styles.textPosition3]}>20</Text>
          <Text style={[styles.text12, styles.textPosition3]}>27</Text>
          <Text style={[styles.text13, styles.textPosition2]}>5</Text>
          <Text style={[styles.text14, styles.textPosition2]}>12</Text>
          <Text style={[styles.text15, styles.textPosition2]}>19</Text>
          <Text style={[styles.text16, styles.textPosition2]}>26</Text>
          <Text style={[styles.text17, styles.textPosition1]}>4</Text>
          <Text style={[styles.text18, styles.textPosition1]}>11</Text>
          <Text style={[styles.text19, styles.textPosition1]}>18</Text>
          <Text style={[styles.text20, styles.textPosition1]}>25</Text>
          <Text style={[styles.text21, styles.textPosition]}>3</Text>
          <Text style={[styles.text22, styles.textPosition]}>10</Text>
          <Text style={[styles.text23, styles.textPosition]}>17</Text>
          <Text style={[styles.text24, styles.textPosition]}>24</Text>
          <Text style={[styles.text25, styles.textTypo]}>2</Text>
          <Text style={[styles.text26, styles.textTypo]}>9</Text>
          <Text style={[styles.text27, styles.textTypo]}>16</Text>
          <Text style={[styles.text28, styles.textTypo]}>23</Text>
          <Text style={[styles.text29, styles.textTypo]}>30</Text>
          <Image
            style={[styles.groupItem, styles.textGroupPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-175.png")}
          />
          <Image
            style={[styles.groupInner, styles.textGroupPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-176.png")}
          />
        </View>
      </View>
      <View style={styles.newReminderWrapper}>
        <Text style={[styles.newReminder, styles.newReminderTypo]}>
          New Reminder
        </Text>
      </View>
      <Text
        style={[styles.calendarReminders, styles.newReminderTypo]}
      >{`Calendar & Reminders`}</Text>
      <Image
        style={[styles.calendarChild, styles.calendarLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-177.png")}
      />
      <Image
        style={[styles.calendarItem, styles.calendarLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-177.png")}
      />
      <Image
        style={[styles.calendarInner, styles.calendarLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-177.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.calendarLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-177.png")}
      />
      <View style={styles.path3795Parent}>
        <Image
          style={[styles.path3795Icon, styles.newReminderPosition]}
          resizeMode="cover"
          source={require("../assets/path-3795.png")}
        />
        <View style={[styles.rectangleView, styles.newReminderPosition]} />
        <View style={[styles.lineView, styles.textGroupPosition]} />
        <Text style={[styles.date, styles.dateTypo]}>Date</Text>
        <Text style={styles.reminder}>Reminder</Text>
        <View style={[styles.parent, styles.groupPosition]}>
          <Text style={[styles.text30, styles.dateTypo]}>1</Text>
          <Text style={styles.eyeCheckup}>Eye Checkup</Text>
        </View>
        <View style={[styles.group, styles.groupPosition]}>
          <Text style={[styles.text30, styles.dateTypo]}>10</Text>
          <Text style={styles.eyeCheckup}>Physiotherapy</Text>
        </View>
        <View style={[styles.container, styles.groupPosition]}>
          <Text style={[styles.text30, styles.dateTypo]}>19</Text>
          <Text style={styles.eyeCheckup}>Clinic Visit</Text>
        </View>
        <View style={[styles.groupView, styles.groupPosition]}>
          <Text style={[styles.text30, styles.dateTypo]}>28</Text>
          <Text style={styles.eyeCheckup}>Foot X-Ray</Text>
        </View>
      </View>
      <Image
        style={styles.path3796Icon}
        resizeMode="cover"
        source={require("../assets/path-3796.png")}
      />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-982.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/group-9852.png")}
        />
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  newReminderPosition: {
    left: 0,
    position: "absolute",
  },
  groupChildPosition: {
    borderRadius: Border.br_21xl,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  text30Typo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: 0,
  },
  textTypo2: {
    width: 36,
    right: 30,
    color: Color.black,
    fontSize: FontSize.size_6xl,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMediumRegular,
    position: "absolute",
  },
  textPosition6: {
    marginTop: -72.5,
    top: "50%",
  },
  textPosition5: {
    marginTop: -16.5,
    top: "50%",
  },
  textPosition4: {
    marginTop: 38.5,
    top: "50%",
  },
  textGroupPosition: {
    left: "50%",
    position: "absolute",
  },
  textPosition3: {
    marginLeft: 63,
    left: "50%",
    width: 36,
    color: Color.black,
    fontSize: FontSize.size_6xl,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMediumRegular,
    position: "absolute",
  },
  textPosition2: {
    marginLeft: -4,
    left: "50%",
    width: 36,
    color: Color.black,
    fontSize: FontSize.size_6xl,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMediumRegular,
    position: "absolute",
  },
  textPosition1: {
    marginLeft: -80,
    left: "50%",
    width: 36,
    color: Color.black,
    fontSize: FontSize.size_6xl,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMediumRegular,
    position: "absolute",
  },
  textPosition: {
    marginLeft: -152,
    left: "50%",
    width: 36,
    color: Color.black,
    fontSize: FontSize.size_6xl,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMediumRegular,
    position: "absolute",
  },
  textTypo: {
    left: 25,
    width: 36,
    color: Color.black,
    fontSize: FontSize.size_6xl,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMediumRegular,
    position: "absolute",
  },
  newReminderTypo: {
    fontFamily: FontFamily.poppinsLightRegular,
    textAlign: "center",
    color: Color.white,
  },
  calendarLayout: {
    height: 62,
    width: 62,
  },
  dateTypo: {
    width: 111,
    fontSize: FontSize.size_9xl,
    textAlign: "center",
    position: "absolute",
  },
  groupPosition: {
    height: 43,
    right: 8,
    left: 30,
    position: "absolute",
  },
  groupChild: {
    height: 180,
    backgroundColor: Color.darkslategray,
  },
  rectangleWrapper: {
    backgroundColor: Color.white,
    bottom: 0,
  },
  april2023: {
    top: 60,
    left: 71,
    fontSize: FontSize.size_31xl,
    width: 452,
    height: 70,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.poppinsMediumRegular,
    position: "absolute",
  },
  groupContainer: {
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
  },
  sun: {
    color: "#ce0000",
  },
  mon: {
    color: Color.black,
  },
  sunContainer: {
    width: 491,
    fontSize: FontSize.size_6xl,
    fontWeight: "700",
    textAlign: "center",
    top: 0,
    position: "absolute",
  },
  text: {
    marginTop: -127.5,
    top: "50%",
  },
  text1: {
    width: 36,
    right: 30,
    color: Color.black,
    fontSize: FontSize.size_6xl,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMediumRegular,
    position: "absolute",
  },
  text2: {
    width: 36,
    right: 30,
    color: Color.black,
    fontSize: FontSize.size_6xl,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMediumRegular,
    position: "absolute",
  },
  text3: {
    width: 36,
    right: 30,
    color: Color.black,
    fontSize: FontSize.size_6xl,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMediumRegular,
    position: "absolute",
  },
  text4: {
    marginLeft: 125,
    left: "50%",
    width: 36,
    color: Color.black,
    fontSize: FontSize.size_6xl,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMediumRegular,
    marginTop: 38.5,
    top: "50%",
  },
  text5: {
    bottom: 54,
  },
  text6: {
    marginLeft: 125,
    left: "50%",
    width: 36,
    color: Color.black,
    fontSize: FontSize.size_6xl,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMediumRegular,
    marginTop: -72.5,
    top: "50%",
  },
  text7: {
    marginLeft: 125,
    left: "50%",
    width: 36,
    color: Color.black,
    fontSize: FontSize.size_6xl,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMediumRegular,
    marginTop: -16.5,
    top: "50%",
  },
  text8: {
    bottom: 54,
    marginLeft: 125,
    left: "50%",
    width: 36,
    color: Color.black,
    fontSize: FontSize.size_6xl,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMediumRegular,
  },
  text9: {
    marginTop: -72.5,
    top: "50%",
  },
  text10: {
    marginTop: -16.5,
    top: "50%",
  },
  text11: {
    marginTop: 38.5,
    top: "50%",
  },
  text12: {
    bottom: 54,
  },
  text13: {
    marginTop: -72.5,
    top: "50%",
  },
  text14: {
    marginTop: -16.5,
    top: "50%",
  },
  text15: {
    marginTop: 38.5,
    top: "50%",
  },
  text16: {
    bottom: 54,
  },
  text17: {
    marginTop: -72.5,
    top: "50%",
  },
  text18: {
    marginTop: -16.5,
    top: "50%",
  },
  text19: {
    marginTop: 38.5,
    top: "50%",
  },
  text20: {
    bottom: 54,
  },
  text21: {
    marginTop: -72.5,
    top: "50%",
  },
  text22: {
    marginTop: -16.5,
    top: "50%",
  },
  text23: {
    marginTop: 38.5,
    top: "50%",
  },
  text24: {
    bottom: 54,
  },
  text25: {
    marginTop: -72.5,
    top: "50%",
  },
  text26: {
    marginTop: -16.5,
    top: "50%",
  },
  text27: {
    marginTop: 38.5,
    top: "50%",
  },
  text28: {
    bottom: 54,
  },
  text29: {
    bottom: 0,
  },
  groupItem: {
    marginTop: -25.5,
    marginLeft: -89,
    width: 53,
    height: 53,
    top: "50%",
  },
  groupInner: {
    marginLeft: 54,
    bottom: 44,
    width: 55,
    height: 55,
  },
  sunMonTueWedThParent: {
    right: 48,
    bottom: 42,
    left: 54,
    height: 365,
    position: "absolute",
  },
  groupParent: {
    width: 592,
    height: 609,
    marginTop: 13,
    marginLeft: 30,
  },
  newReminder: {
    marginTop: -24.5,
    fontSize: FontSize.size_16xl,
    width: 331,
    top: "50%",
    left: 0,
    position: "absolute",
  },
  newReminderWrapper: {
    borderRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    width: 330,
    height: 85,
    marginTop: -42,
    marginLeft: 836,
    backgroundColor: Color.darkslategray,
  },
  calendarReminders: {
    fontSize: FontSize.size_36xl,
    width: 707,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: {
      width: 0,
      height: 3,
    },
    textShadowRadius: 6,
    marginLeft: 269,
    marginTop: 25,
  },
  calendarChild: {
    marginTop: 50,
    marginLeft: 164,
  },
  calendarItem: {
    marginTop: -142,
    marginLeft: 495,
  },
  calendarInner: {
    marginTop: -8,
    marginLeft: 311,
  },
  ellipseIcon: {
    marginTop: -7,
    marginLeft: 440,
  },
  path3795Icon: {
    top: 1,
    bottom: 1,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    right: 0,
    left: 0,
  },
  rectangleView: {
    borderTopLeftRadius: Border.br_7xl,
    borderTopRightRadius: Border.br_7xl,
    height: 83,
    backgroundColor: Color.darkslategray,
    right: 0,
    left: 0,
    top: 0,
  },
  lineView: {
    marginLeft: -77.5,
    top: -1,
    borderStyle: "solid",
    borderColor: "#fff",
    borderRightWidth: 1,
    width: 2,
    bottom: 0,
  },
  date: {
    left: 30,
    top: 25,
    width: 111,
    color: Color.white,
    fontFamily: FontFamily.poppinsMediumRegular,
  },
  reminder: {
    width: 257,
    fontSize: FontSize.size_9xl,
    top: 25,
    right: 30,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.poppinsMediumRegular,
    position: "absolute",
  },
  text30: {
    marginTop: -19.5,
    top: "50%",
    color: Color.black,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: 0,
  },
  eyeCheckup: {
    marginTop: -21.5,
    right: -1,
    fontSize: FontSize.size_11xl,
    textAlign: "left",
    width: 267,
    top: "50%",
    color: Color.black,
    fontFamily: FontFamily.poppinsMediumRegular,
    position: "absolute",
  },
  parent: {
    marginTop: -63.25,
    top: "50%",
  },
  group: {
    marginTop: -10.25,
    top: "50%",
  },
  container: {
    marginTop: 42.75,
    top: "50%",
  },
  groupView: {
    bottom: 32,
  },
  path3795Parent: {
    width: 464,
    height: 341,
    marginTop: -563,
    marginLeft: 743,
  },
  path3796Icon: {
    width: 1,
    height: 257,
    marginTop: -258,
    marginLeft: 898,
  },
  groupIcon: {
    width: 158,
    height: 158,
    marginLeft: 552,
    marginTop: 25,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 118,
    height: 118,
    marginTop: -138,
  },
  calendar: {
    backgroundColor: Color.slategray,
    flex: 1,
    paddingLeft: Padding.p_42xl,
    paddingTop: Padding.p_42xl,
    paddingRight: 98,
    width: "100%",
  },
});

export default Calendar;
