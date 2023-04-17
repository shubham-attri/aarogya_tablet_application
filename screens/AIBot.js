import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const AIBot = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.aiBot}
      onPress={() => navigation.navigate("RoutineTracker")}
    >
      <Pressable
        style={[styles.aiBotChild, styles.botLayout]}
        onPress={() => navigation.navigate("SorryPageAIBot")}
      />
      <View style={styles.speakToMeClickMeAndSpeakParent}>
        <Text
          style={[
            styles.speakToMeClickContainer,
            styles.clickContainerPosition,
          ]}
        >
          <Text style={styles.speakToMe}>{`Speak to me
`}</Text>
          <Text style={styles.clickMeAnd}>{`click me and speak `}</Text>
        </Text>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/group-34.png")}
        />
      </View>
      <Pressable
        style={[styles.aiBotInner, styles.botLayout]}
        onPress={() => navigation.navigate("SorryPageAIBot")}
      >
        <View style={styles.scanAroundClickToFindPeopParent}>
          <Text
            style={[
              styles.scanAroundClickToContainer,
              styles.clickContainerPosition,
            ]}
          >
            <Text style={styles.speakToMe}>{`Scan Around
`}</Text>
            <Text style={styles.clickMeAnd}>click to find peopl</Text>
          </Text>
          <Image
            style={styles.groupChild}
            resizeMode="cover"
            source={require("../assets/group-31.png")}
          />
        </View>
      </Pressable>
      <Text style={styles.welcomeToAi}>{`Welcome to AI Bot `}</Text>
      <Image
        style={styles.aiBotItem}
        resizeMode="cover"
        source={require("../assets/group-975.png")}
      />
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
    </Pressable>
  );
};

const styles = StyleSheet.create({
  botLayout: {
    height: 289,
    width: 500,
    borderWidth: 1,
    borderColor: "#707070",
    borderStyle: "solid",
    backgroundColor: Color.white,
    borderRadius: Border.br_21xl,
  },
  clickContainerPosition: {
    color: Color.black,
    right: -1,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  aiBotChild: {
    marginTop: 122,
    marginLeft: 48,
  },
  speakToMe: {
    fontSize: FontSize.size_16xl,
    fontFamily: FontFamily.poppinsMediumRegular,
  },
  clickMeAnd: {
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.poppinsLightRegular,
  },
  speakToMeClickContainer: {
    marginTop: -62.5,
    width: 225,
    textAlign: "center",
  },
  groupChild: {
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 179,
    position: "absolute",
  },
  speakToMeClickMeAndSpeakParent: {
    width: 420,
    marginTop: -234,
    marginLeft: 93,
    height: 179,
  },
  scanAroundClickToContainer: {
    marginTop: -81.5,
    width: 234,
    textAlign: "center",
  },
  scanAroundClickToFindPeopParent: {
    marginTop: -89.5,
    right: 26,
    left: 45,
    top: "50%",
    position: "absolute",
    height: 179,
  },
  aiBotInner: {
    marginTop: -289,
    marginLeft: 683,
  },
  welcomeToAi: {
    fontSize: FontSize.size_36xl,
    color: Color.white,
    width: 523,
    height: 77,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: {
      width: 0,
      height: 3,
    },
    textShadowRadius: 6,
    marginLeft: 361,
    marginTop: 8,
    fontFamily: FontFamily.poppinsLightRegular,
    textAlign: "center",
  },
  aiBotItem: {
    width: 158,
    height: 158,
    marginLeft: 552,
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
  },
  aiBot: {
    backgroundColor: Color.slategray,
    flex: 1,
    paddingLeft: Padding.p_42xl,
    paddingTop: Padding.p_42xl,
    paddingRight: 122,
    width: "100%",
  },
});

export default AIBot;
