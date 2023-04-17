import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const LoginAndSignUp = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.loginAndSignUp}
      onPress={() => navigation.navigate("GetInformationPage")}
    >
      <View style={styles.loginAndSignUpChild} />
      <Text style={[styles.emailOrPhone, styles.emailTypo]}>
        Email or Phone number
      </Text>
      <Text style={[styles.enterEmailphone, styles.enterTypo1]}>
        Enter Email/Phone
      </Text>
      <Text style={[styles.createPassword, styles.emailTypo]}>
        Create Password
      </Text>
      <Text style={[styles.createPassword, styles.emailTypo]}>
        Confirm Password
      </Text>
      <Image
        style={[styles.iconMaterialEmail, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/icon-materialemail.png")}
      />
      <View style={styles.loginShadowBox} />
      <Image
        style={[styles.iconMaterialLockOutline, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/icon-materiallockoutline.png")}
      />
      <View style={styles.loginShadowBox} />
      <Image
        style={[styles.iconMaterialLockOutline, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/icon-materiallockoutline.png")}
      />
      <Text style={[styles.enterPassword, styles.enterTypo1]}>
        Enter Password
      </Text>
      <Text style={[styles.reEnterPassword, styles.enterTypo1]}>
        Re-enter password
      </Text>
      <View style={styles.rectangleViewShadowBox} />
      <Text style={[styles.emailOrPhone1, styles.emailTypo]}>
        Email or Phone number
      </Text>
      <Text style={[styles.enterEmailphone1, styles.enterTypo]}>
        Enter Email/Phone
      </Text>
      <Text style={[styles.emailOrPhone1, styles.emailTypo]}>
        Enter Password
      </Text>
      <Image
        style={[styles.iconMaterialEmail1, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/icon-materialemail.png")}
      />
      <View style={styles.rectangleViewShadowBox} />
      <Image
        style={[styles.iconMaterialLockOutline2, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/icon-materiallockoutline.png")}
      />
      <Text style={[styles.enterPassword2, styles.enterTypo]}>
        Enter Password
      </Text>
      <Pressable
        style={[styles.signUpWrapper, styles.wrapperShadowBox]}
        onPress={() => navigation.navigate("GetInformationPage")}
      >
        <Text style={[styles.signUp, styles.signUpTypo]}>Sign Up</Text>
      </Pressable>
      <Text style={[styles.createANew, styles.signUpTypo]}>
        Create a new account
      </Text>
      <Text style={[styles.loginIntoExisting, styles.signUpTypo]}>
        Login into existing account
      </Text>
      <Pressable
        style={[styles.loginWrapper, styles.wrapperShadowBox]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Text style={[styles.signUp, styles.signUpTypo]}>Login</Text>
      </Pressable>
      <View style={styles.lineView} />
      <Image
        style={styles.aarogyaHighResolutionLogoWIcon}
        resizeMode="cover"
        source={require("../assets/aarogyahighresolutionlogowhiteontransparentbackground.png")}
      />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-926.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Role")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/group-985.png")}
        />
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  emailTypo: {
    width: 423,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.poppinsLightRegular,
    fontSize: FontSize.size_3xl,
  },
  enterTypo1: {
    marginLeft: 108,
    color: Color.dimgray,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.poppinsLightRegular,
  },
  iconLayout1: {
    height: 24,
    width: 30,
    marginTop: -24.5,
  },
  iconLayout: {
    marginTop: -59.5,
    height: 31,
    width: 24,
  },
  enterTypo: {
    marginLeft: 779,
    width: 198,
    color: Color.dimgray,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.poppinsLightRegular,
  },
  wrapperShadowBox: {
    width: 330,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    backgroundColor: Color.darkslategray,
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
  signUpTypo: {
    width: 331,
    textAlign: "center",
    fontSize: FontSize.size_16xl,
    color: Color.white,
    fontFamily: FontFamily.poppinsLightRegular,
  },
  loginAndSignUpChild: {
    marginTop: -26,
    marginLeft: 29,
    height: 85,
    width: 515,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "rgba(0, 0, 0, 0.16)",
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
  },
  emailOrPhone: {
    marginTop: -475.5,
    marginLeft: 62,
  },
  enterEmailphone: {
    marginTop: -56.5,
    width: 198,
    marginLeft: 108,
    color: Color.dimgray,
    fontSize: FontSize.size_xl,
  },
  createPassword: {
    marginTop: -13.5,
    marginLeft: 62,
  },
  iconMaterialEmail: {
    marginTop: -24.5,
    marginLeft: 62,
  },
  loginShadowBox: {
    marginTop: 4.5,
    marginLeft: 29,
    height: 85,
    width: 515,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "rgba(0, 0, 0, 0.16)",
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
  },
  iconMaterialLockOutline: {
    marginLeft: 65,
  },
  enterPassword: {
    marginTop: -29.5,
    width: 198,
    marginLeft: 108,
    color: Color.dimgray,
    fontSize: FontSize.size_xl,
  },
  reEnterPassword: {
    width: 222,
    marginTop: -29.5,
    marginLeft: 108,
    color: Color.dimgray,
    fontSize: FontSize.size_xl,
  },
  rectangleViewShadowBox: {
    marginLeft: 700,
    marginTop: 4.5,
    height: 85,
    width: 515,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "rgba(0, 0, 0, 0.16)",
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
  },
  emailOrPhone1: {
    marginTop: -12.5,
    marginLeft: 733,
  },
  enterEmailphone1: {
    marginTop: -56.5,
  },
  iconMaterialEmail1: {
    marginLeft: 733,
    marginTop: -24.5,
  },
  iconMaterialLockOutline2: {
    marginLeft: 736,
  },
  enterPassword2: {
    marginTop: -29.5,
  },
  signUp: {
    position: "absolute",
    top: "50%",
    left: 0,
    marginTop: -24.5,
  },
  signUpWrapper: {
    marginTop: 119.5,
    marginLeft: 122,
  },
  createANew: {
    marginTop: -57.5,
    marginLeft: 122,
  },
  loginIntoExisting: {
    marginTop: -101.5,
    marginLeft: 793,
  },
  loginWrapper: {
    marginTop: -84.5,
    marginLeft: 793,
  },
  lineView: {
    borderStyle: "solid",
    borderColor: "#fff",
    borderRightWidth: 1,
    width: 2,
    height: 501,
    marginLeft: 622,
    marginTop: 30.5,
  },
  aarogyaHighResolutionLogoWIcon: {
    width: 158,
    height: 158,
    marginTop: -58.5,
    marginLeft: 552,
  },
  groupIcon: {
    width: 87,
    height: 87,
    marginLeft: 1189,
    marginTop: 30.5,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 118,
    height: 118,
    marginTop: -146.5,
  },
  loginAndSignUp: {
    backgroundColor: Color.slategray,
    flex: 1,
    paddingLeft: Padding.p_42xl,
    paddingTop: 42,
    paddingRight: 29,
    width: "100%",
  },
});

export default LoginAndSignUp;
