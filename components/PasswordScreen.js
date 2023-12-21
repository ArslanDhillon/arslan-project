import React, { useState } from "react";
import { View, Image, Text, Dimensions, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { globalStyles } from "./GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";

const { height, width } = Dimensions.get('window');
const passwordIcon = require('../assets/passwordIcon.png');
const arrowBotton = require('../assets/arrow.png');

const PasswordScreen = (props) => {

    const [showPassword ,setShowPassword] = useState(false)

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
                            height: 35 / 852 * height,width: 35 /852 *height, borderRadius: 17.5, borderWidth: 1, alignSelf: "center", justifyContent: 'center'
                        }}>
                            <Image source={passwordIcon}
                                style={{
                                    height: 20 / 852 * height, width: 20 / 852 * height,  alignSelf: 'center', justifyContent: 'center'
                                }}
                            />
                        </View>

                <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#000", marginRight: 9, marginLeft: 6 }}></View>
                <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#000" }}></View>

            </View>
            <Text style={{ fontSize: 20, fontWeight: '800', marginTop: 10 }}>
               Set Password
            </Text>

            <View style={styles.inputContainer}>
                <TextInput placeholder="Password " style={styles.inputStyle} 
                    secureTextEntry = {!showPassword}
                    autoFocus= {true}
                />
                <TouchableOpacity style = {{alignSelf:'center',marginRight:20}}
                    onPress={()=>{
                        setShowPassword(!showPassword)
                    }}
                    
                >
                    <Text style = {{color:'#2468E8',fontSize:12,fontWeight:'500'}}>
                        Show
                    </Text>
                </TouchableOpacity>

            </View>
            <View style={{ width: width, marginTop: 70 / 852 * height }}>
                <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: 20, marginEnd: 12 }} 
                    onPress={() => props.navigation.navigate('CongratesScreen')}
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

export default PasswordScreen;

const styles = StyleSheet.create({
    inputStyle:{
        flex:1,
        padding:8,
    },
    inputContainer:{
        marginTop:70,
        margin:20,
        flexDirection:'row',
        backgroundColor:'#f2f2f2',
        width: 360 / 393 * width ,
        borderRadius:10,
        height: 49 / 852 * height,

    }
})