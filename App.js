import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { store } from '~/data/redux/store';

import Loading from "~/components/Loading";

import SelectLanguage from '~/pages/setup/SelectLanguage';
import Login from '~/pages/setup/Login';
import LinkDevice from '~/pages/setup/LinkDevice';
import NameDevice from '~/pages/setup/NameDevice';
import CreateEvent from '~/pages/setup/CreateEvent';
import Register from '~/pages/setup/Register';
import SelectEvent from '~/pages/scan/SelectEvent';
import ScanEvent from '~/pages/scan/ScanEvent';


const Stack = createNativeStackNavigator();

function App() {

  let [fontsLoaded] = useFonts({
    'Sailec-Light': require("~/assets/fonts/Sailec-Light.otf"),
    'Sailec-Medium': require("~/assets/fonts/Sailec-Medium.otf"),
    'InterTight-ExtraLight': require("~/assets/fonts/InterTight-ExtraLight.ttf"),
    'InterTight-Light': require("~/assets/fonts/InterTight-Light.ttf"),
    'InterTight-Regular': require("~/assets/fonts/InterTight-Regular.ttf"),
    'InterTight-SemiBold': require("~/assets/fonts/InterTight-SemiBold.ttf"),
    'InterTight-Bold': require("~/assets/fonts/InterTight-Bold.ttf"),
    'DS-Bold': require("~/assets/fonts/DS-DIGIB.ttf"),
  });

  return fontsLoaded ? (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          
          <Stack.Screen name="SelectLanguage" component={SelectLanguage} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />

          <Stack.Screen name="LinkDevice" component={LinkDevice} />
          <Stack.Screen name="NameDevice" component={NameDevice} />
          <Stack.Screen name="CreateEvent" component={CreateEvent} />
          <Stack.Screen name="SelectEvent" component={SelectEvent} />
          <Stack.Screen name="ScanEvent" component={ScanEvent} />
          
         {/* <Stack.Screen name="CheckWifi" component={CheckWifiScreen} />
          
          <Stack.Screen name="RegisterCards" component={RegisterCardsScreen} />
          <Stack.Screen name="CreateEvent" component={CreateEventScreen} />
          <Stack.Screen name="SelectEvent" component={SelectEventScreen} />
          <Stack.Screen name="ScanEvent" component={ScanEventScreen} />*/}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  ) : <Loading/>;

}

export default App;
