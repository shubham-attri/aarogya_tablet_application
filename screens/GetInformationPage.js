import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, Color, FontFamily, Padding } from "../GlobalStyles";

const GetInformationPage = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.getInformationPage}
      onPress={() => navigation.navigate("HomePage")}
    >
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupShadowBox]} />
        <Text style={[styles.name, styles.nameTypo]}>Name</Text>
        <Text style={[styles.enterYourName, styles.enterTypo]}>
          Enter your name
        </Text>
        <Text style={[styles.gender, styles.genderIconPosition]}>Gender</Text>
        <Text style={[styles.dateOfBirth, styles.genderIconPosition]}>
          Date of Birth
        </Text>
        <View style={[styles.groupItem, styles.genderIconPosition]} />
        <View style={[styles.groupInner, styles.groupShadowBox]} />
        <Text style={[styles.enterGender, styles.genderIconPosition]}>
          Enter gender
        </Text>
        <Text style={[styles.enterDateOf, styles.enterDateOfPosition]}>
          Enter date of birth
        </Text>
        <Image
          style={[styles.iconMaterialPermIdentity, styles.genderIconPosition]}
          resizeMode="cover"
          source={require("../assets/icon-materialpermidentity.png")}
        />
        <Image
          style={[styles.iconAwesomeGenderless, styles.genderIconPosition]}
          resizeMode="cover"
          source={require("../assets/icon-awesomegenderless.png")}
        />
        <Image
          style={[styles.iconMaterialCake, styles.enterDateOfPosition]}
          resizeMode="cover"
          source={require("../assets/icon-materialcake.png")}
        />
      </View>
      <Image
        style={styles.aarogyaHighResolutionLogoWIcon}
        resizeMode="cover"
        source={require("../assets/aarogyahighresolutionlogowhiteontransparentbackground.png")}
      />
      <Pressable
        style={[styles.submitWrapper, styles.groupShadowBox]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Text style={[styles.submit, styles.genderIconPosition]}>Submit</Text>
      </Pressable>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("LoginAndSignUp")}
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
  groupShadowBox: {
    height: 85,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    borderRadius: Border.br_3xs,
  },
  nameTypo: {
    width: 423,
    textAlign: "left",
    fontSize: FontSize.size_3xl,
    left: 33,
    color: Color.white,
    fontFamily: FontFamily.poppinsLightRegular,
  },
  enterTypo: {
    width: 198,
    color: Color.dimgray,
    fontSize: FontSize.size_xl,
    left: "50%",
    marginLeft: -178.5,
    textAlign: "left",
    fontFamily: FontFamily.poppinsLightRegular,
  },
  genderIconPosition: {
    top: "50%",
    position: "absolute",
  },
  enterDateOfPosition: {
    bottom: 30,
    position: "absolute",
  },
  groupChild: {
    top: 35,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    backgroundColor: Color.white,
    left: 0,
    right: 0,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  name: {
    top: 0,
    position: "absolute",
  },
  enterYourName: {
    top: 63,
    position: "absolute",
  },
  gender: {
    marginTop: -60,
    width: 423,
    textAlign: "left",
    fontSize: FontSize.size_3xl,
    left: 33,
    color: Color.white,
    fontFamily: FontFamily.poppinsLightRegular,
  },
  dateOfBirth: {
    marginTop: 93,
    width: 423,
    textAlign: "left",
    fontSize: FontSize.size_3xl,
    left: 33,
    color: Color.white,
    fontFamily: FontFamily.poppinsLightRegular,
  },
  groupItem: {
    marginTop: -25,
    height: 85,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    borderRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    backgroundColor: Color.white,
    left: 0,
    right: 0,
  },
  groupInner: {
    bottom: 0,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    backgroundColor: Color.white,
    left: 0,
    right: 0,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  enterGender: {
    marginTop: 2,
    width: 198,
    color: Color.dimgray,
    fontSize: FontSize.size_xl,
    left: "50%",
    marginLeft: -178.5,
    textAlign: "left",
    fontFamily: FontFamily.poppinsLightRegular,
  },
  enterDateOf: {
    width: 222,
    color: Color.dimgray,
    fontSize: FontSize.size_xl,
    left: "50%",
    marginLeft: -178.5,
    bottom: 30,
    textAlign: "left",
    fontFamily: FontFamily.poppinsLightRegular,
  },
  iconMaterialPermIdentity: {
    left: 36,
    width: 24,
    height: 24,
    marginTop: -147,
  },
  iconAwesomeGenderless: {
    marginTop: 7.38,
    left: 38,
    width: 20,
    height: 20,
  },
  iconMaterialCake: {
    left: 35,
    width: 27,
    height: 33,
  },
  rectangleParent: {
    width: 515,
    height: 426,
  },
  aarogyaHighResolutionLogoWIcon: {
    width: 158,
    height: 158,
    marginTop: 78,
    marginRight: 170,
  },
  submit: {
    marginTop: -24.5,
    fontSize: FontSize.size_16xl,
    textAlign: "center",
    width: 331,
    color: Color.white,
    fontFamily: FontFamily.poppinsLightRegular,
    top: "50%",
    left: 0,
  },
  submitWrapper: {
    backgroundColor: Color.darkslategray,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    width: 330,
    marginTop: 111,
    marginRight: 93,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    borderRadius: Border.br_3xs,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 118,
    height: 118,
    marginRight: 762,
    marginTop: -147,
  },
  getInformationPage: {
    backgroundColor: Color.slategray,
    flex: 1,
    paddingLeft: Padding.p_42xl,
    paddingTop: Padding.p_51xl,
    paddingRight: 425,
    alignItems: "flex-end",
    width: "100%",
  },
});

export default GetInformationPage;
