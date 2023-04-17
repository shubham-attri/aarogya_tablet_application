import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Services = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.services}
      onPress={() => navigation.navigate("Calendar")}
    >
      <View style={styles.groupParent}>
        <Pressable
          style={[styles.physiotherapyParent, styles.parentBorder]}
          onPress={() => navigation.navigate("SorryPageAIBot")}
        >
          <Text style={[styles.physiotherapy, styles.homeFlexBox]}>
            Physiotherapy
          </Text>
          <Image
            style={styles.groupChild}
            resizeMode="cover"
            source={require("../assets/group-119.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.onlineYogaClassesParent, styles.parentPosition]}
          onPress={() => navigation.navigate("SorryPageAIBot")}
        >
          <Text style={[styles.onlineYogaClasses, styles.homeFlexBox]}>
            Online Yoga Classes
          </Text>
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/group-483.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.healthCheckupParent, styles.parentLayout]}
          onPress={() => navigation.navigate("SorryPageAIBot")}
        >
          <Text
            style={[styles.healthCheckup, styles.homeFlexBox]}
          >{`Health Checkup `}</Text>
          <Image
            style={[styles.fullBodyCheckup, styles.groupChild1Layout]}
            resizeMode="cover"
            source={require("../assets/full-body-checkup.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.homeMakerParent, styles.parentBorder]}
          onPress={() => navigation.navigate("SorryPageAIBot")}
        >
          <Text style={[styles.homeMaker, styles.homeFlexBox]}>Home Maker</Text>
          <Image
            style={styles.groupInner}
            resizeMode="cover"
            source={require("../assets/group-576.png")}
          />
        </Pressable>
        <Pressable
          style={styles.groceriesParent}
          onPress={() => navigation.navigate("SorryPageAIBot")}
        >
          <Text style={[styles.physiotherapy, styles.homeFlexBox]}>
            Groceries
          </Text>
          <Image
            style={[styles.groupIcon, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/group-814.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.companionshipParent, styles.parentLayout]}
          onPress={() => navigation.navigate("SorryPageAIBot")}
        >
          <Text style={[styles.companionship, styles.homeFlexBox]}>
            Companionship
          </Text>
          <Image
            style={[styles.groupChild1, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/group-846.png")}
          />
        </Pressable>
      </View>
      <View style={styles.servicesChild} />
      <Text style={[styles.homeServicesFor, styles.homeFlexBox]}>
        Home Services for you
      </Text>
      <Image
        style={styles.servicesItem}
        resizeMode="cover"
        source={require("../assets/group-984.png")}
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
  parentBorder: {
    width: 500,
    borderWidth: 1,
    borderColor: "#707070",
    borderStyle: "solid",
    backgroundColor: Color.white,
    borderRadius: Border.br_21xl,
    position: "absolute",
  },
  homeFlexBox: {
    textAlign: "center",
    color: Color.white,
  },
  parentPosition: {
    top: "50%",
    marginTop: -170,
  },
  parentLayout: {
    height: 352,
    width: 500,
    borderWidth: 1,
    borderColor: "#707070",
    borderStyle: "solid",
    backgroundColor: Color.white,
    borderRadius: Border.br_21xl,
    position: "absolute",
  },
  groupChild1Layout: {
    overflow: "hidden",
    maxWidth: "100%",
  },
  groupPosition: {
    height: 272,
    top: 11,
    position: "absolute",
  },
  physiotherapy: {
    left: 82,
    width: 338,
    fontFamily: FontFamily.poppinsMediumRegular,
    fontSize: FontSize.size_21xl,
    color: Color.white,
    bottom: 0,
    position: "absolute",
  },
  groupChild: {
    marginLeft: -160,
    top: 32,
    width: 320,
    height: 225,
    left: "50%",
    position: "absolute",
  },
  physiotherapyParent: {
    height: 355,
    left: 0,
    top: 0,
  },
  onlineYogaClasses: {
    left: 44,
    width: 413,
    fontFamily: FontFamily.poppinsMediumRegular,
    fontSize: FontSize.size_21xl,
    color: Color.white,
    bottom: 0,
    position: "absolute",
  },
  groupItem: {
    marginLeft: -149.56,
    width: 303,
    height: 289,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  onlineYogaClassesParent: {
    height: 350,
    right: 0,
    width: 500,
    borderWidth: 1,
    borderColor: "#707070",
    borderStyle: "solid",
    backgroundColor: Color.white,
    borderRadius: Border.br_21xl,
    position: "absolute",
  },
  healthCheckup: {
    left: 35,
    width: 430,
    fontFamily: FontFamily.poppinsMediumRegular,
    fontSize: FontSize.size_21xl,
    color: Color.white,
    bottom: 0,
    position: "absolute",
  },
  fullBodyCheckup: {
    top: 6,
    right: 92,
    left: 92,
    height: 264,
    position: "absolute",
  },
  healthCheckupParent: {
    top: "50%",
    marginTop: -170,
    left: 0,
  },
  homeMaker: {
    left: 34,
    width: 434,
    fontFamily: FontFamily.poppinsMediumRegular,
    fontSize: FontSize.size_21xl,
    color: Color.white,
    bottom: 0,
    position: "absolute",
  },
  groupInner: {
    marginLeft: -130.67,
    top: 7,
    width: 262,
    height: 280,
    left: "50%",
    position: "absolute",
  },
  homeMakerParent: {
    height: 359,
    right: 0,
    top: 0,
  },
  groupIcon: {
    marginLeft: -137.5,
    width: 274,
    left: "50%",
  },
  groceriesParent: {
    height: 354,
    bottom: 0,
    width: 500,
    borderWidth: 1,
    borderColor: "#707070",
    borderStyle: "solid",
    backgroundColor: Color.white,
    borderRadius: Border.br_21xl,
    left: 0,
    position: "absolute",
  },
  companionship: {
    left: 49,
    width: 408,
    fontFamily: FontFamily.poppinsMediumRegular,
    fontSize: FontSize.size_21xl,
    color: Color.white,
    bottom: 0,
    position: "absolute",
  },
  groupChild1: {
    right: 27,
    left: 28,
    overflow: "hidden",
    maxWidth: "100%",
  },
  companionshipParent: {
    bottom: 2,
    right: 0,
  },
  groupParent: {
    width: 1061,
    height: 1198,
    marginTop: 80,
    marginLeft: 183,
  },
  servicesChild: {
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
  homeServicesFor: {
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
  servicesItem: {
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
  services: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.slategray,
  },
});

export default Services;
