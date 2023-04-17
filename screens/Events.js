import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Events = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.events}
      onPress={() => navigation.navigate("Services")}
    >
      <View style={styles.groupParent}>
        <Pressable
          style={[styles.yogaSessionsParent, styles.parentPosition1]}
          onPress={() => navigation.navigate("SorryPageAIBot")}
        >
          <Text style={[styles.yogaSessions, styles.gardeningFlexBox]}>
            Yoga Sessions
          </Text>
          <View style={[styles.yoga2Parent, styles.groupBorder]}>
            <Image
              style={[styles.yoga2Icon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/yoga-2.png")}
            />
            <Image
              style={[styles.yogaIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/yoga.png")}
            />
          </View>
        </Pressable>
        <Pressable
          style={[styles.gardeningParent, styles.parentPosition]}
          onPress={() => navigation.navigate("SorryPageAIBot")}
        >
          <Text
            style={[styles.gardening, styles.gardeningFlexBox]}
          >{`Gardening `}</Text>
          <View style={[styles.yoga2Parent, styles.groupBorder]}>
            <Image
              style={[styles.layer1Icon, styles.groupLayout]}
              resizeMode="cover"
              source={require("../assets/layer-1.png")}
            />
          </View>
        </Pressable>
        <Pressable
          style={[styles.socialClubsParent, styles.parentPosition]}
          onPress={() => navigation.navigate("SorryPageAIBot")}
        >
          <Text style={[styles.socialClubs, styles.gardeningFlexBox]}>
            Social Clubs
          </Text>
          <View style={[styles.groupWrapper, styles.groupBorder]}>
            <Image
              style={[styles.groupChild, styles.groupPosition]}
              resizeMode="cover"
              source={require("../assets/group-849.png")}
            />
          </View>
        </Pressable>
        <Pressable
          style={[styles.petTherapyParent, styles.parentPosition2]}
          onPress={() => navigation.navigate("SorryPageAIBot")}
        >
          <Text style={[styles.petTherapy, styles.gardeningFlexBox]}>
            Pet Therapy
          </Text>
          <View style={[styles.groupContainer, styles.groupBorder]}>
            <Image
              style={[styles.groupItem, styles.groupPosition1]}
              resizeMode="cover"
              source={require("../assets/group-863.png")}
            />
          </View>
        </Pressable>
        <Pressable
          style={styles.checkupCampParent}
          onPress={() => navigation.navigate("SorryPageAIBot")}
        >
          <Text style={[styles.checkupCamp, styles.gardeningFlexBox]}>
            Checkup camp
          </Text>
          <View style={[styles.groupFrame, styles.groupBorder]}>
            <Image
              style={[styles.groupInner, styles.groupLayout]}
              resizeMode="cover"
              source={require("../assets/group-502.png")}
            />
          </View>
        </Pressable>
        <Pressable
          style={[styles.groupReadingActivityParent, styles.parentPosition]}
          onPress={() => navigation.navigate("SorryPageAIBot")}
        >
          <Text style={[styles.groupReadingActivity, styles.gardeningFlexBox]}>
            Group Reading Activity
          </Text>
          <View style={[styles.groupView, styles.groupBorder]}>
            <Image
              style={[styles.groupIcon, styles.groupPosition]}
              resizeMode="cover"
              source={require("../assets/group-897.png")}
            />
          </View>
        </Pressable>
      </View>
      <View style={styles.eventsChild} />
      <Text style={[styles.eventsHappeningAround, styles.gardeningFlexBox]}>
        Events happening around you
      </Text>
      <Image
        style={styles.eventsItem}
        resizeMode="cover"
        source={require("../assets/group-981.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/group-9851.png")}
        />
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  parentPosition1: {
    height: 352,
    top: "50%",
    marginTop: -170,
  },
  gardeningFlexBox: {
    textAlign: "center",
    color: Color.white,
  },
  groupBorder: {
    borderWidth: 1,
    borderColor: "#707070",
    borderStyle: "solid",
    backgroundColor: Color.white,
    borderRadius: Border.br_21xl,
    left: 0,
    top: 0,
    right: 0,
    position: "absolute",
  },
  iconPosition: {
    maxHeight: "100%",
    bottom: 14,
    left: "50%",
    position: "absolute",
  },
  parentPosition: {
    left: 0,
    width: 500,
    position: "absolute",
  },
  groupLayout: {
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
  },
  groupPosition: {
    left: 41,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
  },
  parentPosition2: {
    width: 500,
    right: 0,
    position: "absolute",
  },
  groupPosition1: {
    bottom: 12,
    top: 12,
  },
  yogaSessions: {
    marginLeft: -131,
    width: 305,
    fontFamily: FontFamily.poppinsMediumRegular,
    fontSize: FontSize.size_21xl,
    color: Color.white,
    bottom: 0,
    position: "absolute",
    left: "50%",
  },
  yoga2Icon: {
    marginLeft: 21,
    top: 16,
    width: 100,
  },
  yogaIcon: {
    marginLeft: -151,
    top: 40,
    width: 172,
  },
  yoga2Parent: {
    bottom: 63,
  },
  yogaSessionsParent: {
    width: 500,
    right: 0,
    position: "absolute",
  },
  gardening: {
    left: 85,
    width: 332,
    fontFamily: FontFamily.poppinsMediumRegular,
    fontSize: FontSize.size_21xl,
    color: Color.white,
    bottom: 0,
    position: "absolute",
  },
  layer1Icon: {
    top: 27,
    right: 74,
    bottom: 29,
    left: 73,
  },
  gardeningParent: {
    height: 352,
    top: "50%",
    marginTop: -170,
  },
  socialClubs: {
    left: 82,
    width: 338,
    fontFamily: FontFamily.poppinsMediumRegular,
    fontSize: FontSize.size_21xl,
    color: Color.white,
    bottom: 0,
    position: "absolute",
  },
  groupChild: {
    right: 40,
    bottom: 12,
    top: 12,
  },
  groupWrapper: {
    bottom: 64,
  },
  socialClubsParent: {
    height: 353,
    top: 0,
  },
  petTherapy: {
    left: 34,
    width: 434,
    fontFamily: FontFamily.poppinsMediumRegular,
    fontSize: FontSize.size_21xl,
    color: Color.white,
    bottom: 0,
    position: "absolute",
  },
  groupItem: {
    right: 23,
    left: 24,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
  },
  groupContainer: {
    bottom: 68,
  },
  petTherapyParent: {
    height: 357,
    top: 0,
  },
  checkupCamp: {
    left: 67,
    width: 368,
    fontFamily: FontFamily.poppinsMediumRegular,
    fontSize: FontSize.size_21xl,
    color: Color.white,
    bottom: 0,
    position: "absolute",
  },
  groupInner: {
    top: 32,
    right: 29,
    bottom: 24,
    left: 29,
  },
  groupFrame: {
    bottom: 65,
  },
  checkupCampParent: {
    height: 354,
    bottom: 0,
    width: 500,
    right: 0,
    position: "absolute",
  },
  groupReadingActivity: {
    left: 10,
    width: 480,
    fontFamily: FontFamily.poppinsMediumRegular,
    fontSize: FontSize.size_21xl,
    color: Color.white,
    bottom: 0,
    position: "absolute",
  },
  groupIcon: {
    top: 5,
    right: 42,
    bottom: 5,
  },
  groupView: {
    bottom: 61,
  },
  groupReadingActivityParent: {
    bottom: 4,
    height: 350,
  },
  groupParent: {
    width: 1061,
    height: 1198,
    marginTop: 26,
    marginLeft: 183,
  },
  eventsChild: {
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    width: 1366,
    height: 338,
    marginTop: 33,
    backgroundColor: Color.slategray,
  },
  eventsHappeningAround: {
    fontSize: FontSize.size_36xl,
    fontFamily: FontFamily.poppinsLightRegular,
    width: 849,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: {
      width: 0,
      height: 3,
    },
    textShadowRadius: 6,
    alignSelf: "center",
    marginTop: 33,
  },
  eventsItem: {
    width: 158,
    height: 158,
    marginTop: -277,
    marginLeft: 613,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 118,
    height: 118,
    marginTop: -138,
    marginLeft: 61,
  },
  events: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.slategray,
  },
});

export default Events;
