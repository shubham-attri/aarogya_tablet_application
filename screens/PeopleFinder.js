import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PeopleFinder = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.peopleFinder}
      onPress={() => navigation.navigate("Events")}
    >
      <View style={styles.groupParent}>
        <View style={[styles.img5298Parent, styles.img5298GroupLayout]}>
          <Image
            style={[styles.img5298Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/img-5298.png")}
          />
          <Text style={[styles.shubham, styles.shubhamTypo]}>Shubham</Text>
        </View>
        <View
          style={[
            styles.screenshot20230405At404Parent,
            styles.parentGroupPosition,
          ]}
        >
          <Image
            style={[styles.img5298Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/screenshot-20230405-at-40411-pm.png")}
          />
          <Text style={[styles.shubham, styles.shubhamTypo]}>Rishav</Text>
        </View>
        <View style={[styles.snapseed4Parent, styles.snapseed4GroupLayout]}>
          <Image
            style={[styles.snapseed4Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/snapseed-4.png")}
          />
          <Text style={[styles.saksham, styles.shubhamTypo]}>Saksham</Text>
        </View>
        <View
          style={[
            styles.screenshot20230405At400Parent,
            styles.groupParentPosition,
          ]}
        >
          <Image
            style={[styles.snapseed4Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/screenshot-20230405-at-40048-pm.png")}
          />
          <Text style={[styles.saksham, styles.shubhamTypo]}>Akarsh</Text>
        </View>
        <View
          style={[
            styles.whatsappImage20230405At5Parent,
            styles.snapseed4GroupLayout,
          ]}
        >
          <Image
            style={[styles.snapseed4Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/whatsapp-image-20230405-at-52016-pm.png")}
          />
          <Text style={[styles.saksham, styles.shubhamTypo]}>Kuldeep</Text>
        </View>
        <View
          style={[
            styles.screenshot20230405At402Parent,
            styles.groupParentPosition,
          ]}
        >
          <Image
            style={[styles.snapseed4Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/screenshot-20230405-at-40214-pm.png")}
          />
          <Text style={[styles.saksham, styles.shubhamTypo]}>Soham</Text>
        </View>
        <View
          style={[
            styles.whatsappImage20230404At7Parent,
            styles.snapseed4GroupLayout,
          ]}
        >
          <Image
            style={[styles.snapseed4Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/whatsapp-image-20230404-at-71506-pm.png")}
          />
          <Text style={[styles.saksham, styles.shubhamTypo]}>Adish</Text>
        </View>
        <View
          style={[
            styles.screenshot20230404At1013Parent,
            styles.snapseed4GroupLayout,
          ]}
        >
          <Image
            style={[styles.snapseed4Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/screenshot-20230404-at-101350-pm.png")}
          />
          <Text style={[styles.saksham, styles.shubhamTypo]}>Trilok</Text>
        </View>
        <View
          style={[
            styles.screenshot20230405At403Parent,
            styles.screenshot20230405ParentPosition,
          ]}
        >
          <Image
            style={[styles.snapseed4Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/screenshot-20230405-at-40315-pm.png")}
          />
          <Text style={[styles.saksham, styles.shubhamTypo]}>Asmit</Text>
        </View>
        <View
          style={[
            styles.screenshot20230405At407Parent,
            styles.screenshot20230405ParentPosition,
          ]}
        >
          <Image
            style={[styles.snapseed4Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/screenshot-20230405-at-40748-pm.png")}
          />
          <Text style={[styles.saksham, styles.shubhamTypo]}>Deepanshi</Text>
        </View>
        <View style={[styles.img5298Group, styles.groupPosition]}>
          <Image
            style={[styles.img5298Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/img-5298.png")}
          />
          <Text style={[styles.shubham, styles.shubhamTypo]}>Shubham</Text>
        </View>
        <View
          style={[
            styles.screenshot20230405At401Parent,
            styles.img5298GroupLayout,
          ]}
        >
          <Image
            style={[styles.img5298Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/screenshot-20230405-at-40143-pm.png")}
          />
          <Text style={[styles.shubham, styles.shubhamTypo]}>Aaryan</Text>
        </View>
        <View style={[styles.snapseed4Group, styles.groupPosition]}>
          <Image
            style={[styles.snapseed4Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/snapseed-4.png")}
          />
          <Text style={[styles.saksham, styles.shubhamTypo]}>Saksham</Text>
        </View>
        <View
          style={[
            styles.screenshot20230405At400Group,
            styles.screenshot20230405GroupPosition,
          ]}
        >
          <Image
            style={[styles.snapseed4Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/screenshot-20230405-at-40048-pm.png")}
          />
          <Text style={[styles.saksham, styles.shubhamTypo]}>Akarsh</Text>
        </View>
        <View
          style={[styles.screenshot20230405At406Parent, styles.groupPosition]}
        >
          <Image
            style={[styles.snapseed4Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/screenshot-20230405-at-40604-pm.png")}
          />
          <Text style={[styles.saksham, styles.shubhamTypo]}>Shaili</Text>
        </View>
        <View
          style={[
            styles.screenshot20230405At402Group,
            styles.screenshot20230405GroupPosition,
          ]}
        >
          <Image
            style={[styles.snapseed4Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/screenshot-20230405-at-40214-pm.png")}
          />
          <Text style={[styles.saksham, styles.shubhamTypo]}>Soham</Text>
        </View>
        <View
          style={[styles.screenshot20230404At1013Group, styles.groupPosition]}
        >
          <Image
            style={[styles.snapseed4Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/screenshot-20230404-at-101350-pm.png")}
          />
          <Text style={[styles.saksham, styles.shubhamTypo]}>Trilok</Text>
        </View>
        <View
          style={[
            styles.screenshot20230405At403Group,
            styles.screenshot20230405GroupPosition,
          ]}
        >
          <Image
            style={[styles.snapseed4Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/screenshot-20230405-at-40315-pm.png")}
          />
          <Text style={[styles.saksham, styles.shubhamTypo]}>Asmit</Text>
        </View>
        <View
          style={[
            styles.screenshot20230405At401Group,
            styles.parentGroupPosition,
          ]}
        >
          <Image
            style={[styles.img5298Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/screenshot-20230405-at-40143-pm.png")}
          />
          <Text style={[styles.shubham, styles.shubhamTypo]}>Aaryan</Text>
        </View>
        <View
          style={[
            styles.screenshot20230405At406Group,
            styles.snapseed4GroupLayout,
          ]}
        >
          <Image
            style={[styles.snapseed4Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/screenshot-20230405-at-40604-pm.png")}
          />
          <Text style={[styles.saksham, styles.shubhamTypo]}>Shaili</Text>
        </View>
      </View>
      <View style={styles.peopleFinderChild} />
      <Text style={styles.helpersAroundYou}>Helpers around you</Text>
      <Image
        style={styles.peopleFinderItem}
        resizeMode="cover"
        source={require("../assets/group-976.png")}
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
  img5298GroupLayout: {
    height: 208,
    width: 181,
  },
  iconLayout: {
    height: 157,
    overflow: "hidden",
    maxWidth: "100%",
    top: 0,
    position: "absolute",
  },
  shubhamTypo: {
    color: Color.black,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_6xl,
    left: 0,
    bottom: 0,
    textAlign: "center",
    position: "absolute",
  },
  parentGroupPosition: {
    top: "50%",
    position: "absolute",
  },
  snapseed4GroupLayout: {
    height: 200,
    width: 173,
  },
  groupParentPosition: {
    marginLeft: -192.5,
    left: "50%",
  },
  screenshot20230405ParentPosition: {
    marginTop: -344.5,
    height: 200,
    width: 173,
    top: "50%",
    position: "absolute",
  },
  groupPosition: {
    marginTop: 113.5,
    top: "50%",
    position: "absolute",
  },
  screenshot20230405GroupPosition: {
    bottom: 64,
    height: 200,
    width: 173,
    position: "absolute",
  },
  img5298Icon: {
    right: 12,
    left: 12,
  },
  shubham: {
    width: 182,
    height: 51,
    textAlign: "center",
  },
  img5298Parent: {
    left: 58,
    width: 181,
    top: 33,
    position: "absolute",
  },
  screenshot20230405At404Parent: {
    marginTop: -114.5,
    height: 208,
    width: 181,
    left: 58,
  },
  snapseed4Icon: {
    right: 8,
    left: 8,
  },
  saksham: {
    width: 174,
    textAlign: "center",
  },
  snapseed4Parent: {
    marginTop: -119.5,
    left: "50%",
    marginLeft: 19.5,
    top: "50%",
    position: "absolute",
  },
  screenshot20230405At400Parent: {
    top: 41,
    height: 200,
    width: 173,
    position: "absolute",
  },
  whatsappImage20230405At5Parent: {
    marginTop: -335.5,
    left: 62,
    top: "50%",
    position: "absolute",
  },
  screenshot20230405At402Parent: {
    marginTop: -339.5,
    height: 200,
    width: 173,
    top: "50%",
    position: "absolute",
  },
  whatsappImage20230404At7Parent: {
    top: 37,
    left: "50%",
    marginLeft: 19.5,
    position: "absolute",
  },
  screenshot20230404At1013Parent: {
    right: 62,
    top: 33,
    position: "absolute",
  },
  screenshot20230405At403Parent: {
    right: 62,
  },
  screenshot20230405At407Parent: {
    left: "50%",
    marginLeft: 19.5,
  },
  img5298Group: {
    height: 208,
    width: 181,
    left: 58,
  },
  screenshot20230405At401Parent: {
    bottom: 56,
    left: 58,
    width: 181,
    position: "absolute",
  },
  snapseed4Group: {
    marginLeft: -192.5,
    left: "50%",
    height: 200,
    width: 173,
  },
  screenshot20230405At400Group: {
    marginLeft: -192.5,
    left: "50%",
  },
  screenshot20230405At406Parent: {
    height: 200,
    width: 173,
    left: "50%",
    marginLeft: 19.5,
  },
  screenshot20230405At402Group: {
    left: "50%",
    marginLeft: 19.5,
  },
  screenshot20230404At1013Group: {
    right: 62,
    height: 200,
    width: 173,
  },
  screenshot20230405At403Group: {
    right: 62,
  },
  screenshot20230405At401Group: {
    marginTop: -110.5,
    marginLeft: -199.5,
    left: "50%",
    height: 208,
    width: 181,
  },
  screenshot20230405At406Group: {
    marginTop: -115.5,
    right: 62,
    top: "50%",
    position: "absolute",
  },
  groupParent: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: "#707070",
    borderWidth: 1,
    width: 933,
    height: 1213,
    marginLeft: 1,
    marginTop: 59,
  },
  peopleFinderChild: {
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    width: 1366,
    height: 395,
    marginTop: 59,
    backgroundColor: Color.slategray,
  },
  helpersAroundYou: {
    fontSize: FontSize.size_36xl,
    fontFamily: FontFamily.poppinsLightRegular,
    color: Color.white,
    width: 547,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: {
      width: 0,
      height: 3,
    },
    textShadowRadius: 6,
    textAlign: "center",
    marginTop: 59,
  },
  peopleFinderItem: {
    width: 158,
    height: 158,
    marginTop: -334,
    marginLeft: 18,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 118,
    height: 118,
    marginTop: -138,
    marginRight: 1126,
  },
  peopleFinder: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: Color.slategray,
  },
});

export default PeopleFinder;
