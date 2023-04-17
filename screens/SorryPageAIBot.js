import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const SorryPageAIBot = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sorryPageAiBot}>
      <View style={styles.sorryPageAiBotChild} />
      <Text style={styles.sorryForThe}>Sorry for the inconvenience!</Text>
      <Image
        style={styles.aarogyaHighResolutionLogoWIcon}
        resizeMode="cover"
        source={require("../assets/aarogyahighresolutionlogowhiteontransparentbackground.png")}
      />
      <Image
        style={styles.sorryPageAiBotItem}
        resizeMode="cover"
        source={require("../assets/group-9691.png")}
      />
      <Text style={styles.thisFeatureIsntContainer}>
        <Text
          style={styles.thisFeatureIsnt}
        >{`This feature isn’t added yet. We’re regularly working on the app and will do our best to add this feature in later updates.
`}</Text>
        <Text style={styles.thankYouFor}>Thank you for being so patient!</Text>
      </Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/group-985.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  sorryPageAiBotChild: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: "#707070",
    borderWidth: 1,
    width: 943,
    height: 519,
    marginTop: -59,
    marginLeft: 151,
  },
  sorryForThe: {
    fontSize: FontSize.size_31xl,
    fontFamily: FontFamily.poppinsExtraBoldRegular,
    color: Color.black,
    textAlign: "center",
    marginTop: -487,
    marginLeft: 250,
  },
  aarogyaHighResolutionLogoWIcon: {
    width: 158,
    height: 158,
    marginLeft: 552,
    marginTop: 86,
  },
  sorryPageAiBotItem: {
    width: 562,
    height: 332,
    marginTop: 22,
    marginLeft: 341,
  },
  thisFeatureIsnt: {
    fontFamily: FontFamily.poppinsLightRegular,
  },
  thankYouFor: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
  },
  thisFeatureIsntContainer: {
    fontSize: FontSize.size_8xl,
    color: Color.white,
    textAlign: "left",
    width: 1077,
    marginLeft: 100,
    marginTop: 86,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 118,
    height: 118,
    marginTop: -147,
  },
  sorryPageAiBot: {
    backgroundColor: Color.slategray,
    flex: 1,
    paddingLeft: Padding.p_42xl,
    paddingTop: Padding.p_51xl,
    paddingRight: Padding.p_110xl,
    width: "100%",
  },
});

export default SorryPageAIBot;
