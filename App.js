const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Intro from "./screens/Intro";
import LandingPage from "./screens/LandingPage";
import SorryPageAIBot1 from "./screens/SorryPageAIBot1";
import Events from "./screens/Events";
import Services from "./screens/Services";
import GetStarted1 from "./screens/GetStarted1";
import GetStarted2 from "./screens/GetStarted2";
import Calendar from "./screens/Calendar";
import SorryPageAIBot from "./screens/SorryPageAIBot";
import RoutineTracker from "./screens/RoutineTracker";
import Role from "./screens/Role";
import PeopleFinder from "./screens/PeopleFinder";
import AIBot from "./screens/AIBot";
import HomePage from "./screens/HomePage";
import GetInformationPage from "./screens/GetInformationPage";
import LoginAndSignUp from "./screens/LoginAndSignUp";
import GetStarted3 from "./screens/GetStarted3";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded, error] = useFonts({
    "Poppins Light_regular": require("./assets/fonts/Poppins_Light_regular.ttf"),
    "Poppins Medium_regular": require("./assets/fonts/Poppins_Medium_regular.ttf"),
    "Poppins ExtraBold_regular": require("./assets/fonts/Poppins_ExtraBold_regular.ttf"),
    "Poppins_light": require("./assets/fonts/Poppins_light.ttf"),
    "Poppins_medium": require("./assets/fonts/Poppins_medium.ttf"),
    "Poppins_bold": require("./assets/fonts/Poppins_bold.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 3000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Intro"
              component={Intro}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LandingPage"
              component={LandingPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SorryPageAIBot1"
              component={SorryPageAIBot1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Events"
              component={Events}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Services"
              component={Services}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GetStarted1"
              component={GetStarted1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GetStarted2"
              component={GetStarted2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Calendar"
              component={Calendar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SorryPageAIBot"
              component={SorryPageAIBot}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RoutineTracker"
              component={RoutineTracker}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Role"
              component={Role}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PeopleFinder"
              component={PeopleFinder}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AIBot"
              component={AIBot}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GetInformationPage"
              component={GetInformationPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginAndSignUp"
              component={LoginAndSignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GetStarted3"
              component={GetStarted3}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Intro />
        )}
      </NavigationContainer>
    </>
  );
};

export default App;
