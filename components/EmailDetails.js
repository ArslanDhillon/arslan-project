import React, { useState } from "react";
import { View, Image, Text, Dimensions, TouchableOpacity, TextInput, Alert, } from 'react-native';
import { globalStyles } from "./GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import validator from "validator";

const { height, width } = Dimensions.get('window');
const messageIcon = require('../assets/message.png');
const arrowBotton = require('../assets/arrow.png');

const EmailDetails = (props) => {

    const [email ,setEmail] = useState('')
    const[emailError,setEmailError] = useState('')

    const emailChangeHandle = (text) =>{
        setEmail(text);
        setEmailError('');
    };

    const onPressHandle = () =>{
        if (validator.isEmail(email)){
            props.navigation.navigate('CongratesScreen')
        }
        else{
            setEmailError('Please enter a valid email address');
        }
    }

    return (
        <SafeAreaView>
        <View style={globalStyles.container}>

            <Text style={{ fontSize: 12 }}>
                Account Details
            </Text>

            <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>

                <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#000" }}></View>

                <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#000", marginRight: 9, marginLeft: 6 }}></View>

                <View style={{
                    height: 35 / 852 * height,width: 35 /852 *height, borderRadius: 17.5, borderWidth: 1, alignSelf: "center",justifyContent:'center'
                }}>
                    <Image source={messageIcon}
                        style={{
                            height: 19 / 852 * height, width: 19 / 393 * width, resizeMode: 'contain', alignSelf: 'center', justifyContent: 'center'
                        }}
                    />
                </View>

                <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#000", marginRight: 9, marginLeft: 6 }}></View>
                <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#000" }}></View>

            </View>
            <Text style={{ fontSize: 20, fontWeight: '800', marginTop: 10 }}>
                Email Address
            </Text>

            <View style={{ marginTop: 30 }}>
                <TextInput placeholder="Email Address" style={globalStyles.inputStyle} 
                    autoFocus= {true}
                    onChangeText={emailChangeHandle}
                    value={email}
                />
            </View>
            {emailError ? <Text style = {{color:'red' ,fontSize:10}}>{emailError}</Text>:null}
            <View style={{ width: width, marginTop: 70 / 852 * height }}>
                <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: 20, marginEnd: 12 }}
                    onPress={onPressHandle}
                >
                    <View style={globalStyles.arrowBotton}>
                        <Image source={arrowBotton}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>
    )

}

export default EmailDetails;