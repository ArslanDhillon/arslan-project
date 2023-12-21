import React, { useState } from "react";
import { View, Image, Text, Dimensions, StyleSheet, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { globalStyles } from "./GlobalStyles";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import validator from "validator";



const { height, width } = Dimensions.get('window');

const afimageHeight = 106 / 852 * height;
const afimageWidth = 106 / 393 * width;
const appleIconHeight = 58 / 852 * height;
const appleIconWidth = 58 / 393 * width;


const afimage = require('../assets/AFImage.png');
const slectedIcon = require('../assets/slectedIcon.png');
const unselectedIcon = require("../assets/unslectedIcon.png");
const arrowBotton = require('../assets/arrow.png');
const appleIcon = require('../assets/appleIcon.png');
const googleIcon = require('../assets/googleIcon.png');
const facebookIcon = require('../assets/facebookIcon.png');


const SignInScreen = (props) => {

    const [showSlectedIcon, setShowSlectedIcon] = useState(false);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState('')

    const emailChangeHandle = (text) => {
        setEmail(text);
        setError('') ;
    };

    const passwordChangeHandl = (text) => {
        setPassword(text);
        setError('') ;
    };

    const onpressHandel = () => {

        setShowSlectedIcon(!showSlectedIcon)
    }

    const checkValidation = () => {
        
        const isValidEmail = validator.isEmail(email);
        const isValidPassword = validator.isStrongPassword(password, {

            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
        });
        if (isValidEmail && isValidPassword) {
            Alert.alert('User logged In')
        }
        else {
            setError('Invalid email or password')
        }
    }

    return (
        <SafeAreaView>
            {/* <ScrollView> */}
            <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}>
                <View style={globalStyles.container} >
                    <Image source={afimage}
                        style={[globalStyles.logoImageStyle, { marginTop: 10 }]}
                    />
                    <Text style={styles.mainText}>
                        Sign In
                    </Text>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ fontSize: 12, fontWeight: '500', }}>
                            New Member?
                        </Text>

                        <TouchableOpacity >
                            <Text style={{ fontSize: 12, fontWeight: '500', color: '#2468E8' }}>
                                Apply Now
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <TextInput placeholder="Email Address"

                        style={globalStyles.inputStyle}
                        autoFocus={true}
                        keyboardType="email-address"
                        value={email}
                        onChangeText={emailChangeHandle}
                    />

                    <TextInput placeholder="Password"
                        style={globalStyles.inputStyle}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={passwordChangeHandl}
                    />

                    {error?<Text style={{ color: 'red', height: 20, backgroundColor: 'yellow' }}>{error}</Text>:null}

                    <View style={{ flexDirection: 'row', gap: 60 / 393 * width, margin: 15 }}>

                        <TouchableOpacity>

                            <Text style={{ fontSize: 12, fontWeight: '500', textDecorationLine: 'underline' }}>
                                Forget Password
                            </Text>

                        </TouchableOpacity>

                        <TouchableOpacity onPress={onpressHandel}>

                            <View style={{ flexDirection: 'row', gap: 5 }}>
                                <Image source={showSlectedIcon ? slectedIcon : unselectedIcon}
                                    style={{ height: 26 / 853 * height, width: 26 / 393 * width, resizeMode: 'contain' }}
                                />
                                <Text style={{ fontSize: 12, fontWeight: '500', }}>
                                    Remember Me
                                </Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                    <View style={{ width: width }}>

                        <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: 20, marginEnd: 12 }}
                            onPress={()=>{
                                checkValidation()
                            }}
                        >
                            <View style={globalStyles.arrowBotton}>
                                <Image source={arrowBotton} />
                            </View>
                        </TouchableOpacity>
                        
                    </View>

                    <Text style={{ fontSize: 12, fontWeight: '500', marginTop: 20 }}>
                        Or continue with....
                    </Text>

                    <View style={{ flexDirection: 'row', marginTop: 15, gap: 10, alignItems: 'center' }}>
                        <Image source={appleIcon}
                            style={{ height: appleIconHeight, width: appleIconWidth, resizeMode: 'contain' }}
                        />
                        <Image source={googleIcon}
                            style={{ height: appleIconHeight, width: appleIconWidth, resizeMode: 'contain' }}
                        />
                        <Image source={facebookIcon}
                            style={{ height: appleIconHeight, width: appleIconWidth, resizeMode: 'contain' }}
                        />
                    </View>

                    <View style={{ alignItems: 'center', flexDirection: 'column', height: 100, marginTop: 30 }}>
                        <Text style={{ fontSize: 12, fontWeight: '500' }}>
                            By creating an account, you agree to the
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                            <TouchableOpacity>
                                <Text style={{ fontSize: 12, fontWeight: '500', color: '#2468E8' }}>
                                    Terms & Conditions
                                </Text>
                            </TouchableOpacity>
                            <Text> and </Text>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 12, fontWeight: '500', color: '#2468E8' }}>
                                    Privacy Policy
                                </Text>
                            </TouchableOpacity>

                        </View>
                        <Text style={{ fontSize: 12, fontWeight: '500' }}>
                            of America Finance
                        </Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
            {/* </ScrollView> */}
        </SafeAreaView>
    )
}

export default SignInScreen;


const styles = StyleSheet.create({
    mainText: {
        //   height:100,
        fontSize: 25,
        fontWeight: '300',
        marginTop: 10,

    }
})