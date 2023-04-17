import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const LandingPage = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.landingPage}
      onPress={() => navigation.navigate("GetStarted1")}
    >
      <Text style={[styles.toFacilitateAnd, styles.aarogyaFlexBox]}>
        To facilitate and care for the elderly!
      </Text>
      <Text style={[styles.aarogya, styles.aarogyaFlexBox]}>Aarogya</Text>
      <View style={styles.getStartedWrapper}>
        <Text style={[styles.getStarted, styles.aarogyaFlexBox]}>
          Get Started
        </Text>
      </View>
      <Image
        style={styles.oldPeopleIcon}
        resizeMode="cover"
        source={require("../assets/old-people.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  aarogyaFlexBox: {
    textAlign: "center",
    color: Color.white,
  },
  toFacilitateAnd: {
    fontSize: FontSize.size_31xl,
    marginTop: -653,
    marginRight: 1,
    fontFamily: FontFamily.poppinsLightRegular,
    color: Color.white,
  },
  aarogya: {
    fontSize: 124,
    textTransform: "capitalize",
    fontFamily: FontFamily.poppinsMediumRegular,
    width: 643,
    height: 173,
    textShadowColor: "rgba(0, 0, 0, 0.16)",
    textShadowOffset: {
      width: 8,
      height: 6,
    },
    textShadowRadius: 4,
    marginTop: 37,
    marginRight: 1,
  },
  getStarted: {
    position: "absolute",
    marginTop: -24.5,
    marginLeft: -99,
    top: "50%",
    left: "50%",
    fontSize: FontSize.size_16xl,
    fontFamily: FontFamily.poppinsLightRegular,
    color: Color.white,
  },
  getStartedWrapper: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.darkslategray,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    width: 330,
    height: 85,
    marginTop: 546,
    marginRight: 1,
  },
  oldPeopleIcon: {
    width: 927,
    height: 618,
    marginTop: 37,
  },
  landingPage: {
    backgroundColor: Color.slategray,
    //remove these two
    
    flex: 1,
    width: "100%",
    paddingLeft: 220,
    paddingTop: 46,
    paddingRight: Padding.p_200xl,
    alignItems: "center",
  },
});

export default LandingPage;
