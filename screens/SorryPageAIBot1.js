import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const SorryPageAIBot1 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.sorryPageAiBot1}
      onPress={() => navigation.navigate("SorryPageAIBot")}
    >
      <View style={styles.sorryPageAiBot1Child} />
      <Text style={styles.sorryForThe}>Sorry for the inconvenience!</Text>
      <Image
        style={styles.aarogyaHighResolutionLogoWIcon}
        resizeMode="cover"
        source={require("../assets/aarogyahighresolutionlogowhiteontransparentbackground.png")}
      />
      <Image
        style={styles.sorryPageAiBot1Item}
        resizeMode="cover"
        source={require("../assets/group-969.png")}
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
  sorryPageAiBot1Child: {
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
  sorryPageAiBot1Item: {
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
  sorryPageAiBot1: {
    backgroundColor: Color.slategray,
    flex: 1,
    paddingLeft: Padding.p_42xl,
    paddingTop: Padding.p_51xl,
    paddingRight: Padding.p_110xl,
    width: "100%",
  },
});

export default SorryPageAIBot1;
