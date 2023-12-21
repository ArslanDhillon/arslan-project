import React, { useRef } from "react";
import { View, Image, Dimensions, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { globalStyles } from "./GlobalStyles";


const { height, width } = Dimensions.get('window');

const messageIcon = require('../assets/message2.png');
const arrowBotton = require('../assets/arrow.png');



const VerifyEmailScreen = (props) => {

    const input1Ref = useRef(null);
    const input2Ref = useRef(null);
    const input3Ref = useRef(null);
    const input4Ref = useRef(null);

    
    const handelInputChange = (text, ref) => {
        if (text.length === 1 && ref) {
            ref.current.focus()
        }
    };


    return (
        <View style={globalStyles.container}>
            <View style={{
                height: 307 / 852 * height, width: 393 / 393 * width, borderBottomLeftRadius: 180,
                borderBottomRightRadius: 180, backgroundColor: '#2468E8', alignItems: 'center', marginTop: -30
            }}>

                <View style={{ flexDirection: 'row', marginTop: 40, alignItems: 'center' }}>
                    <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#fff" }}></View>

                    <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#fff", marginRight: 9, marginLeft: 6 }}></View>

                    <View style={{
                        height: 35 / 852 * height, borderRadius: 17.5, borderWidth: 1.5, alignSelf: "center", borderColor:'#fff'
                    }}>
                        <Image source={messageIcon}
                            style={{
                                height: 19 / 852 * height, width: 19 / 393 * width, margin: 4, resizeMode: 'contain',
                                 alignSelf: 'center', justifyContent: 'center',
                            }}
                        />
                    </View>

                    <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#fff", marginRight: 9, marginLeft: 6 }}></View>
                    <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#fff" }}></View>

                </View>

                <Text style={{ fontSize: 20, fontWeight: '500', marginTop: 10, color: '#fff' }}>
                    Verify Your Email
                </Text>

                <Text style={{ fontSize: 12, fontWeight: '500', color: '#fff', marginTop: 10 }}>
                    Enter the verification code sent to
                </Text>
                <Text style={{ fontSize: 12, fontWeight: '500', color: '#fff', }}>
                    noah@gmail.com
                </Text>

                <View style={{ flexDirection: 'row', marginTop: 80, gap: 10 }}>

                    <TextInput placeholder="0"
                        autoFocus = {true}
                        style={styles.inputStyle}
                        secureTextEntry = {true}
                        keyboardType="numeric"
                        maxLength={1}
                        ref={input1Ref}
                        onChangeText={(text) => handelInputChange(text, input2Ref)}
                    />

                    <TextInput placeholder="0"
                        style={styles.inputStyle}
                        keyboardType="numeric"
                        secureTextEntry = {true}
                        maxLength={1}
                        ref={input2Ref}
                        onChangeText={(text) => handelInputChange(text, input3Ref)}
                    />
                    <TextInput placeholder="0"
                        secureTextEntry = {true}
                        style={styles.inputStyle}
                        keyboardType="numeric"
                        maxLength={1}
                        ref={input3Ref}
                        onChangeText={(text) => handelInputChange(text, input4Ref)}
                    />
                    <TextInput placeholder="0"
                        style={styles.inputStyle}
                        secureTextEntry = {true}
                        keyboardType="numeric"
                        maxLength={1}
                        ref={input4Ref}
                        onChangeText={(text) => handelInputChange(text, null)}
                    />
                </View>

                <View style={{ marginTop: 50 / 852 * height }}>
                    <TouchableOpacity style={{ marginTop: 20, }} 
                        onPress={()=>props.navigation.navigate('PhoneNumberScreen')}
                    
                    >
                        <View style={globalStyles.arrowBotton}>
                            <Image source={arrowBotton}
                            />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 20 ,gap :5}}>
                    <Text style={{ fontSize: 14, fontWeight: '500', color: '#7e7c7e' }} >
                        Didn’t receive code?
                    </Text>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 14, fontWeight: '500' }} >
                            Resend
                        </Text>
                    </TouchableOpacity>
                </View>


            </View>
        </View>
    )
}

export default VerifyEmailScreen;

const styles = StyleSheet.create({
    inputStyle: {
        backgroundColor: '#f2f2f2',
        height: 58 / 852 * height,
        width: 64 / 393 * width,
        paddingLeft: 20,
        paddingRight: 20,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        borderRadius: 15,
        alignItems: 'center',
    }

})