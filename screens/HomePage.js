import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.homePage}
      onPress={() => navigation.navigate("AIBot")}
    >
      <View style={styles.groupParent}>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/group-24.png")}
        />
        <Text style={[styles.aiBotClickAndContainer, styles.containerPosition]}>
          <Text style={styles.aiBot}>{`AI Bot
`}</Text>
          <Text style={styles.cl}>cl</Text>
        </Text>
      </View>
      <View style={[styles.ellipseParent, styles.ellipseShadowBox]}>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-18.png")}
        />
        <Text
          style={[
            styles.reminderShowsYouRegularContainer,
            styles.welcomeToAarogyaLayout,
          ]}
        >
          <Text style={styles.aiBot}>{`Reminder
`}</Text>
          <Text
            style={styles.cl}
          >{`shows you regular reminders of checkups `}</Text>
        </Text>
        <Image
          style={[styles.iconAwesomeCalendarCheck, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/icon-awesomecalendarcheck.png")}
        />
      </View>
      <Pressable
        style={[styles.ellipseGroup, styles.groupShadowBox]}
        onPress={() => navigation.navigate("RoutineTracker")}
      >
        <Image
          style={[styles.groupInner, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-18.png")}
        />
        <Text
          style={[
            styles.routineTrackerTracksYourContainer,
            styles.containerPosition,
          ]}
        >
          <Text style={styles.aiBot}>{`Routine Tracker
`}</Text>
          <Text style={styles.cl}>{`tracks your medicine & routi`}</Text>
        </Text>
        <Image
          style={[styles.iconMaterialWatchLater, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/icon-materialwatchlater.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.ellipseContainer, styles.ellipseShadowBox]}
        onPress={() => navigation.navigate("Events")}
      >
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-18.png")}
        />
        <Text
          style={[
            styles.eventsAndActivitiesShowsContainer,
            styles.showsContainerLayout,
          ]}
        >
          <Text style={styles.aiBot}>{`Events and Activities
`}</Text>
          <Text style={styles.cl}>shows you events and activ</Text>
        </Text>
        <Image
          style={[styles.iconAwesomeRunning, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/icon-awesomerunning.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.groupPressable, styles.groupShadowBox]}
        onPress={() => navigation.navigate("PeopleFinder")}
      >
        <Image
          style={[styles.groupChild1, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-18.png")}
        />
        <Text
          style={[
            styles.findHelperFindsSomeoneContainer,
            styles.containerPosition,
          ]}
        >
          <Text style={styles.findHelper}>{`Find Helper
`}</Text>
          <Text style={styles.cl}>finds someone to help you</Text>
        </Text>
        <Image
          style={[styles.iconAwesomeHandsHelping, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/icon-awesomehandshelping.png")}
        />
      </Pressable>
      <View style={[styles.path3971Parent, styles.groupShadowBox]}>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/path-3971.png")}
        />
        <Text
          style={[
            styles.homeServicesOffersServicesContainer,
            styles.showsContainerLayout,
          ]}
        >
          <Text style={styles.aiBot}>{`Home Services
`}</Text>
          <Text style={styles.cl}>Offers services you might need</Text>
        </Text>
        <Image
          style={[styles.groupIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/group-979.png")}
        />
      </View>
      <Text style={[styles.welcomeToAarogya, styles.welcomeToAarogyaLayout]}>
        Welcome to Aarogya
      </Text>
      <View style={styles.homePageChild} />
      <Image
        style={styles.aarogyaHighResolutionLogoWIcon}
        resizeMode="cover"
        source={require("../assets/aarogyahighresolutionlogowhiteontransparentbackground1.png")}
      />
      <Image
        style={styles.c1366f3de801a96e8aa1f42efce5fIcon}
        resizeMode="cover"
        source={require("../assets/729c1366f3de801a96e8aa1f42efce5f.png")}
      />
      <Image
        style={styles.bcd7e93b469c95a276df1884e90d3aIcon}
        resizeMode="cover"
        source={require("../assets/bcd7e93b469c95a276df1884e90d3ade.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 179,
    width: 179,
    top: "50%",
    position: "absolute",
  },
  containerPosition: {
    color: Color.black,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  ellipseShadowBox: {
    marginTop: 81.07,
    marginRight: 122,
    height: 289,
    width: 500,
    borderWidth: 1,
    borderColor: "#707070",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowColor: "rgba(0, 0, 0, 0.65)",
    backgroundColor: Color.white,
    borderRadius: Border.br_21xl,
  },
  welcomeToAarogyaLayout: {
    height: 180,
    textAlign: "center",
  },
  iconPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupShadowBox: {
    marginTop: -288.93,
    height: 289,
    width: 500,
    borderWidth: 1,
    borderColor: "#707070",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowColor: "rgba(0, 0, 0, 0.65)",
    backgroundColor: Color.white,
    borderRadius: Border.br_21xl,
  },
  groupPosition: {
    maxHeight: "100%",
    bottom: 55,
    top: 55,
    width: 179,
    position: "absolute",
  },
  iconPosition1: {
    top: "50%",
    position: "absolute",
  },
  showsContainerLayout: {
    width: 245,
    color: Color.black,
    position: "absolute",
  },
  groupChild: {
    left: 45,
    marginTop: -89.5,
  },
  aiBot: {
    fontSize: FontSize.size_16xl,
    fontFamily: FontFamily.poppinsMediumRegular,
  },
  cl: {
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.poppinsLightRegular,
  },
  aiBotClickAndContainer: {
    marginTop: -62.5,
    right: 56,
    width: 194,
    textAlign: "center",
  },
  groupParent: {
    marginTop: -6,
    marginRight: 744,
    height: 289,
    width: 500,
    borderWidth: 1,
    borderColor: "#707070",
    borderStyle: "solid",
    shadowColor: "rgba(0, 0, 0, 0.65)",
    backgroundColor: Color.white,
    borderRadius: Border.br_21xl,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  groupItem: {
    marginTop: -92.5,
    left: 41,
  },
  reminderShowsYouRegularContainer: {
    width: 245,
    color: Color.black,
    position: "absolute",
    right: 26,
    top: 55,
    height: 180,
  },
  iconAwesomeCalendarCheck: {
    marginTop: -48.51,
    marginLeft: -159.32,
    width: 80,
    height: 91,
  },
  ellipseParent: {
    marginRight: 122,
  },
  groupInner: {
    left: 41,
  },
  routineTrackerTracksYourContainer: {
    width: 236,
    right: 26,
    textAlign: "center",
    marginTop: -89.5,
  },
  iconMaterialWatchLater: {
    marginTop: -59.13,
    left: 71,
    width: 118,
    height: 118,
  },
  ellipseGroup: {
    marginRight: 122,
  },
  eventsAndActivitiesShowsContainer: {
    top: 52,
    right: 17,
    height: 226,
    textAlign: "center",
  },
  iconAwesomeRunning: {
    marginTop: -64.36,
    marginLeft: -171.8,
    width: 105,
    height: 129,
  },
  ellipseContainer: {
    marginRight: 122,
  },
  groupChild1: {
    left: 45,
  },
  findHelper: {
    fontSize: 33,
    fontFamily: FontFamily.poppinsMediumRegular,
  },
  findHelperFindsSomeoneContainer: {
    marginTop: -80.5,
    right: 32,
    width: 226,
    textAlign: "center",
  },
  iconAwesomeHandsHelping: {
    marginTop: -48.8,
    left: 74,
    width: 122,
    height: 98,
  },
  groupPressable: {
    marginRight: 744,
  },
  homeServicesOffersServicesContainer: {
    top: 45,
    right: 22,
    height: 200,
    textAlign: "center",
  },
  groupIcon: {
    marginTop: -62.42,
    marginLeft: -168.39,
    width: 98,
    height: 103,
  },
  path3971Parent: {
    marginRight: 744,
  },
  welcomeToAarogya: {
    fontSize: FontSize.size_36xl,
    color: Color.white,
    width: 523,
    textShadowColor: "rgba(0, 0, 0, 0.16)",
    textShadowOffset: {
      width: 3,
      height: 3,
    },
    textShadowRadius: 6,
    alignSelf: "center",
    marginTop: 87.07,
    fontFamily: FontFamily.poppinsMediumRegular,
  },
  homePageChild: {
    shadowColor: "rgba(0, 0, 0, 0.16)",
    width: 1366,
    height: 248,
    marginTop: 87.07,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    backgroundColor: Color.slategray,
  },
  aarogyaHighResolutionLogoWIcon: {
    width: 158,
    height: 158,
    marginTop: -177.93,
    marginRight: 595,
  },
  c1366f3de801a96e8aa1f42efce5fIcon: {
    width: 90,
    height: 74,
    marginTop: -131.93,
    marginRight: 1190,
  },
  bcd7e93b469c95a276df1884e90d3aIcon: {
    width: 30,
    height: 73,
    marginTop: -73.93,
    marginRight: 98,
  },
  homePage: {
    flex: 1,
    width: "100%",
    alignItems: "flex-end",
    backgroundColor: Color.slategray,
  },
});

export default HomePage;
