import React from "react";
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { globalStyles } from "./GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";


const { height, width } = Dimensions.get('window');

const locationIcon = require('../assets/location.png');
const arrowBotton = require('../assets/arrow.png');

const HomeAddressScreen = () => {
    return (
        <SafeAreaView>
            <View style={globalStyles.container}>
                <Text style={{ fontSize: 12 }}>
                    Application Details
                </Text>

                <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>

                    <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#000" }}></View>

                    <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#000", marginRight: 9, marginLeft: 6 }}></View>

                    <View style={{
                        height: 35 / 852 * height, width: 35 / 852 * height, borderRadius: 17.5, borderWidth: 1, alignSelf: "center", justifyContent: 'center'
                    }}>
                        <Image source={locationIcon}
                            style={{
                                height: 20 / 852 * height, width: 20 / 852 * height, alignSelf: 'center', justifyContent: 'center'
                            }}
                        />
                    </View>

                    <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#000", marginRight: 9, marginLeft: 6 }}></View>
                    <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#000" }}></View>

                </View>
                <Text style={{ fontSize: 20, fontWeight: '800', marginTop: 10 }}>
                    Home Address
                </Text>

                <Text style={{ fontSize: 10, color: '#a7a7a7', margin: 10, marginBottom: 0 }}>
                    (Please ensure all information entered on your application
                </Text>
                <Text style={{ fontSize: 10, color: '#a7a7a7', }}>
                    is correct and up-to-date, America Finance will verify all
                </Text>
                <Text style={{ fontSize: 10, color: '#a7a7a7' }}>
                    information submitted.)
                </Text>

                <TextInput placeholder="Street Address"
                    style={globalStyles.inputStyle}
                    autoFocus={true}
                />
                <TextInput placeholder="Apt #10"
                    style={globalStyles.inputStyle}
                />

                <View style={{flexDirection:'row',gap:20 / 393 * width,marginTop:50/852*height,alignItems:'center'}}>

                    <TouchableOpacity style = {{marginTop:10}}>
                        <Text style = {{color:'#2468E8',fontSize:11,fontWeight:'500',textDecorationLine:'underline'}}>
                            Why do we collect this information
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: 20, marginEnd: 12 }} 
                        // onPress={() => props.navigation.navigate('CongratesScreen')}
                    >
                        <View style={globalStyles.arrowBotton}>
                            <Image source={arrowBotton}
                            />
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
}


export default HomeAddressScreen;