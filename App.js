import React from "react";
import {View,Text} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import NameDetails from "./components/NameDetails";
import Main from "./components/Main";
import SignInScreen from "./components/SignInScreen";
import EmailDetails from "./components/EmailDetails";
import VerifyEmailScreen from "./components/VerifyEmailScreen";
import PhoneNumberScreen from "./components/PhoneNumberScreen";
import VerifyNumberScreen from "./components/VerifyNumberScreen";
import FaceIdScreen from "./components/FaceIdScreen";
import PasswordScreen from "./components/PasswordScreen";
import CongratesScreen from "./components/CongratesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StateScreen from "./components/StateScreen";
import WaitListScreen from "./components/WaitListScreen";
import HomeAddressScreen from "./components/HomeAddressScreen";
import NotificationScreen from "./components/NotificationScreen";
import BankAccountMainScreen from "./components/BankAcountMainScreen";
import BankDetails from "./components/BankDetails";
import SelectBank from "./components/SelectBank";
import CredentialsScreen from "./components/CredentialsScreen";
import BankAccountDetails from "./components/BankAccountDetails";
import LoanRequest from "./components/LoanRequest";
import VerifyIdentityScreen from "./components/VerifyIdentityScreen";
import LicenseDetailsScreen from "./components/LicenseDetailsScreen";
import VerifyLicenseScreen from "./components/VerifyLicenseScreen";
import SelfieWithID from "./components/SelfieWithID";
import HousingSituition from "./components/HousingSituition";
import HouseRentAmount from "./components/HouseRentAmount";
import HousingDurationScreen from "./components/HousingDurationScreen";
import RecentHousingHistory from "./components/RecentHousingHistory";
import OtherHousingSituition from "./components/OtherHousingSituiting";
import DOBScreen from "./components/DOBScreen";
import Test from "./components/Test";
import HouseDetails from "./components/HouseDetails";
const Stack = createNativeStackNavigator();

const App = () => {

  return (
        // <NavigationContainer>
        //   <Stack.Navigator initialRouteName="Main" screenOptions={{headerShown:false}}>

        //     <Stack.Screen  name= "Main" component={Main} />
        //     <Stack.Screen  name="SignInScreen" component={SignInScreen}/>
        //     <Stack.Screen  name="NameDetails" component={NameDetails}/>
        //     <Stack.Screen  name="EmailDetails" component={EmailDetails}/>
        //     <Stack.Screen  name="VerifyEmailScreen" component={VerifyEmailScreen}/>
        //     <Stack.Screen  name="PhoneNumberScreen" component={PhoneNumberScreen}/>
        //     <Stack.Screen  name="VerifyNumberScreen" component={VerifyNumberScreen}/>
        //     <Stack.Screen  name="FaceIdScreen" component={FaceIdScreen}/>
        //     <Stack.Screen  name="PasswordScreen" component={PasswordScreen}/>
        //     <Stack.Screen  name="CongratesScreen" component={CongratesScreen}/>
        //     <Stack.Screen  name="StateScreen" component={StateScreen}/>
        //     <Stack.Screen  name="WaitListScreen" component={WaitListScreen}/>
        //     <Stack.Screen  name="HomeAddressScreen" component={HomeAddressScreen}/>





      //   </Stack.Navigator>
      // </NavigationContainer>


      // <NotificationScreen />
      // <BankAccountMainScreen />
      // <BankDetails/>
      // <SelectBank />
      // <CredentialsScreen />
      // <BankAccountDetails />
      // <LoanRequest />
      // <VerifyIdentityScreen />
      // <LicenseDetailsScreen />
      // <VerifyLicenseScreen />
      // <SelfieWithID />
      // <HousingSituition />
      // <HouseRentAmount />
      // <HousingDurationScreen />
      // <RecentHousingHistory />
      // <OtherHousingSituition />
      // <DOBScreen />
      <HouseDetails />
      // <Test />
        // <StateScreen />
        // <WaitListScreen  />
        // <HomeAddressScreen />
        )
        {/* <Main /> */}
        {/* <SignInScreen /> */}
        {/* <NameDetails /> */}
        {/* <EmailDetails /> */}
        {/* <VerifyEmailScreen /> */}
        {/* <PhoneNumberScreen /> */}
        {/* < VerifyNumberScreen /> */}
        {/* < FaceIdScreen /> */}
        {/* <PasswordScreen /> */}
        {/* <CongratesScreen /> */}
        {/* </View> */}

}
export default App;