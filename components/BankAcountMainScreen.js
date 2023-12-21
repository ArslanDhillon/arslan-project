import React from "react";
import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import { globalStyles } from "./GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";

const { height, width } = Dimensions.get('window')


const BankAccountMainScreen = () => {
    return (
        <SafeAreaView>
            <View style={globalStyles.container}>
                <Text style={{ fontSize: 10, fontWeight: '500' }}>
                    New Account
                </Text>

                <Image source={require("../assets/bankIcon.png")}
                    style={{ height: 146 / 852 * height, width: 146 / 393 * width, marginTop: 140 / 852 * height, resizeMode: 'contain' }}
                />

                <Text style={{ fontSize: 15, fontWeight: '500', marginTop: 50 / 852 * height }}>
                    Click The Button Below To
                </Text> 
                <Text style={{ fontSize: 15, fontWeight: '500', }}>
                    Manually Enter Bank Details
                </Text>

                <TouchableOpacity style = {[globalStyles.capsuleButton,{backgroundColor:'#000',marginTop:40}]}>
                    <View style = {{flexDirection:'row',alignItems:'center'}}>
                    <Image source={require('../assets/buttonImage.png')}
                        style = {{height:31/852*height,width:31/393*width,resizeMode:'contain'}}
                    />
                    <Text style = {{color:'#fff',fontSize:10,fontWeight:'500'}}>
                        Login to My Bank
                    </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}


export default BankAccountMainScreen;