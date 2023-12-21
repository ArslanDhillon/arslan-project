import React from "react";
import { View , Text, Dimensions,Image,TouchableOpacity, TextInput } from "react-native";
import { globalStyles } from "./GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";

const {height,width} = Dimensions.get('window');

const HouseRentAmount = () =>{
    return(
        <SafeAreaView>
            <View style = {globalStyles.container}>
            <Text  style = {{fontSize:10,fontWeight:'500'}}>
                    Application Details
                </Text>
                <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>

                    <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#000" }}></View>

                    <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#000", marginRight: 9, marginLeft: 6 }}></View>

                    <View style={{
                        height: 35 / 852 * height, width: 35 / 852 * height, borderRadius: 17.5, borderWidth: 1, alignSelf: "center", justifyContent: 'center'
                    }}>
                        <Image source={require('../assets/home.png')}
                            style={{
                                height: 20 / 852 * height, width: 20 / 852 * height, alignSelf: 'center', justifyContent: 'center'
                            }}
                        />
                    </View>

                    <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#000", marginRight: 9, marginLeft: 6 }}></View>
                    <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#000" }}></View>
                </View>
                <Text style={{ fontSize: 17, fontWeight: '700', marginTop: 10 }}>
                    Housing
                </Text>

                <TextInput  placeholder="How much do you pay monthly?"
                    style = {[globalStyles.inputStyle,{marginTop:35}]}
                    autoFocus = {true} 
                    keyboardType="numeric"

                />
                <View style = {{width:width,alignItems:'flex-end',marginRight:20,marginTop:20}}>
                   <TouchableOpacity>
                        <View style={globalStyles.arrowBotton}>
                            <Image source={require('../assets/arrow.png')} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}


export default HouseRentAmount ;